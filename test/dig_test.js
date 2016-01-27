import dig from '../src/index';
import assert from 'power-assert';

describe('dig', () => {
  let target = {};
  context('target is empty object.', () => {
    it('get undefined', () => {
      assert.equal(dig(target, 'unknownProp'), undefined);
    });
  });

  context('find unknown key  on the way of digging.', () => {
    before(() => {
      target = { a: { b: { c: 'c' } } };
    });
    it('get undefined', () => {
      assert.equal(dig(target, 'a', 'unknownProp', 'b'), undefined);
    });
  });

  context('find value matching keys.', () => {
    before(() => {
      target = { a: { b: { c: 'c' } } };
    });
    context('one argument.', () => {
      it('get value', () => {
        assert.equal(dig(target, 'a'), target.a);
      });
    });

    context('two arguments.', () => {
      it('get value', () => {
        assert.equal(dig(target, 'a', 'b'), target.a.b);
      });
    });

    context('three arguments.', () => {
      it('get value', () => {
        assert.equal(dig(target, 'a', 'b', 'c'), target.a.b.c);
      });
    });
  });
});
