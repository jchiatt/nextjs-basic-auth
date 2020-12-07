import findAndCheckUser from '../src/utils/findAndCheckUser';

const users = [
  { user: 'foo', password: 'bar' },
  { user: 'admin', password: 'password' }
]

describe('authHeaderToBase64', () => {
  it('returns false if no user can be found with supplied credentials', () => {
    expect(findAndCheckUser('doesnot', 'exist', users)).toBe(false)
  });

  it('returns the matched user object if one is found matching supplied credentials', () => {
    const match = findAndCheckUser('admin', 'password', users)
    const expected = { user: 'admin', password: 'password'}
    expect(match).toBeTruthy()
    expect(typeof match).toBe("object")
    expect(match).toStrictEqual(expected)
  })
});
