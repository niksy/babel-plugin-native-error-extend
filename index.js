const bodyFactory = (template) => {
	return (message, options) => {
		return template(`
			super(MESSAGE, OPTIONS);
			this.name = this.constructor.name;
			this.message = MESSAGE;
			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, this.constructor);
			} else {
				this.stack = new Error(MESSAGE).stack;
			}
		`)({
			MESSAGE: message,
			OPTIONS: options
		});
	};
};

const resolveParameter = (parameter, { name, constructorPath, t }) => {
	if (typeof parameter === 'undefined') {
		parameter = t.identifier(name);
		constructorPath.pushContainer('params', parameter);
	} else {
		if (parameter.isAssignmentPattern()) {
			parameter = parameter.get('left');
		}
		parameter = parameter.node;
	}
	return parameter;
};

export default ({ types: t, template }) => {
	const body = bodyFactory(template);
	return {
		visitor: {
			ClassDeclaration(path) {
				let message, options;
				const isError = path.node.superClass?.name === 'Error' ?? false;
				const hasConstructor = path.node.body.body.some(
					({ kind }) => kind === 'constructor'
				);
				if (!isError) {
					return;
				}
				if (!hasConstructor) {
					message = t.identifier('message');
					options = t.identifier('options');
					path.get('body').unshiftContainer('body', [
						t.classMethod(
							'constructor',
							t.identifier('constructor'),
							[message, options],
							t.blockStatement(body(message, options))
						)
					]);
					return;
				}
				const constructorPath = path
					.get('body.body')
					.find((path) => path.node.kind === 'constructor');

				const superCall = constructorPath
					.get('body.body')
					.find((path) => path.get('expression.callee').isSuper());

				const [extractedMessage, extractedOptions] =
					superCall?.get('expression.arguments') ??
					constructorPath.get('params') ??
					[];
				if (extractedMessage?.isRestElement()) {
					const argument = extractedMessage.get('argument').node;
					message = t.memberExpression(argument, t.identifier('0'));
					options = t.memberExpression(argument, t.identifier('1'));
				} else {
					message = resolveParameter(extractedMessage, {
						name: 'message',
						constructorPath,
						t
					});
					options = resolveParameter(extractedOptions, {
						name: 'options',
						constructorPath,
						t
					});
				}

				constructorPath.get('body.body').forEach((path) => {
					try {
						const calleePath = path.get('expression.callee');
						if (calleePath.isSuper()) {
							calleePath
								.findParent((path) =>
									path.isExpressionStatement()
								)
								.remove();
						}
					} catch (error) {
						// Handled
					}
				});
				constructorPath
					.get('body')
					.unshiftContainer('body', body(message, options));
			}
		}
	};
};
