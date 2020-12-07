import authHeaderToBase64 from '../src/utils/authHeaderToBase64';

const authHeader = "Basic YWRtaW46cGFzc3dvcmQ="

describe('authHeaderToBase64', () => {
  it('returns a username and password tuple when called with an Authorization header', () => {
    const result = authHeaderToBase64(authHeader)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(2)
    expect(result[0]).toBe('admin')
    expect(result[1]).toBe('password')
  });
});
