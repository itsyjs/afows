import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { process } from './main.js'

describe('process', () => {
  it('turns an object into an array of strings', () => {
    const result = process({
      foo: 'bar',
      biz: 'baz',
    })
    assert.deepEqual(result, ['bar', 'baz'])
  })
  it('turns an object with space-separated strings into an array of strings', () => {
    const result = process({
      foo: 'bar wombat',
      biz: 'baz llama',
    })
    assert.deepEqual(result, ['bar', 'wombat', 'baz', 'llama'])
  })
  it('turns a nested-object with space-separated strings into an array of strings', () => {
    const result = process({
      foo: {
        kombat: { bar: 'wombat' },
        nested: 'value',
      },
      biz: {
        llama: { baz: 'alpaca' },
      },
    })
    assert.deepEqual(result, ['wombat', 'value', 'alpaca'])
  })
})
