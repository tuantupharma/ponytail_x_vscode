import { assert } from 'node:assert/strict';
import { sum } from '../src/math.js';

assert.strictEqual(sum([1, 2, 3]), 6);
assert.strictEqual(sum([]), 0);
assert.throws(() => sum('not an array'), TypeError);

console.log('All math tests passed.');
