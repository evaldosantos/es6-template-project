import assert from 'assert';
import main from '../src/index';

describe('test suit', () => {
  it('asserts true', () => {
    console.log(process.env.DB_HOST);
    assert(main());
  });
});
