import { IncomingMessage, ServerResponse } from 'http'
import { User } from './types'
import authHeaderToBase64 from './utils/authHeaderToBase64'
import findAndCheckUser from './utils/findAndCheckUser'

async function checkBasicAuth(req: IncomingMessage, res: ServerResponse, users: User[]) {
  
  if (!req.headers.authorization) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Protected"')
    res.statusCode = 401
  } else {
    const [user, password] = authHeaderToBase64(req.headers.authorization)

    if (!findAndCheckUser(user, password, users)) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Protected"')
      res.statusCode = 401
    }
  }
}

export default checkBasicAuth
