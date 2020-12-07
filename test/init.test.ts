import init from '../src';

describe('init function', () => {
  it('throws if a users array is not supplied', () => {
    expect(() => init()).toThrowError("You must supply an array of user/password combinations in the config.")
  });

  it('returns a function when called', () => {
    const users = [{ user: 'foo', password: 'bar' }]
    const options = {users}
    const fn = init(options)
    expect(typeof fn).toBe("function")
  })
});
