import assert from 'assert';
import fs from 'fs';
import { promisify as pify } from 'util';
import { transformFile } from '@babel/core';
import fn from '../index';

async function runTest(testCase, options = {}) {
	const [expected, actual] = await Promise.all([
		pify(fs.readFile)(`./test/fixtures/${testCase}.expected.js`, 'utf8'),
		pify(transformFile)(`./test/fixtures/${testCase}.js`, {
			plugins: [[fn, options]]
		})
	]);
	assert.equal(actual.code.trim(), expected.trim());
}

it('should transform native `Error`', function() {
	return runTest('classes');
});
