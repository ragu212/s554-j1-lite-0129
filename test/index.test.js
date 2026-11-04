const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../index');
test('greet', () => { assert.strictEqual(greet('LaneSync'), 'Hello, LaneSync!'); });
const { farewell } = require('../index');
test('farewell', () => { assert.strictEqual(farewell('LaneSync'), 'Goodbye, LaneSync!'); });
