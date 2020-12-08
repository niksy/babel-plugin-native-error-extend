const bodyFactory = (template) => {
	return (message) => {
		return template(`
			super(MESSAGE);
			this.name = this.constructor.name;
			this.message = MESSAGE;
			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, this.constructor);
			} else {
				this.stack = new Error(MESSAGE).stack;
			}
		`)({
			MESSAGE: message
		});
	};
};

export default ({ types: t, template }) => {
	const body = bodyFactory(template);
	return {
		visitor: {
			ClassDeclaration(path) {
				let message;
				const isError = path.node.superClass?.name === 'Error' ?? false;
				const hasConstructor = path.node.body.body.some(
					({ kind }) => kind === 'constructor'
				);
				if (!isError) {
					return;
				}
				if (!hasConstructor) {
					message = t.identifier('message');
					path.get('body').unshiftContainer('body', [
						t.classMethod(
							'constructor',
							t.identifier('constructor'),
							[message],
							t.blockStatement(body(message))
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

				const [extractedMessage] =
					superCall?.get('expression.arguments') ??
					constructorPath.get('params') ??
					[];
				message = extractedMessage;

				if (typeof message === 'undefined') {
					message = t.identifier('message');
					constructorPath.unshiftContainer('params', message);
				} else {
					if (message.isAssignmentPattern()) {
						message = message.get('left');
					}
					message = message.node;
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
					.unshiftContainer('body', body(message));
			}
		}
	};
};
