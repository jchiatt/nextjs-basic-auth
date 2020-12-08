import { IncomingMessage, ServerResponse } from "http"
import { User } from "./types"
import checkBasicAuth from "./checkBasicAuth"

interface Options {
  users?: User[]
}

function init(options: Options = {}) {
  const { users } = options
  if (!users) {
    throw new Error(
      "You must supply an array of user/password combinations in the config."
    )
  }

  return (req: IncomingMessage, res: ServerResponse) => {
    checkBasicAuth(req, res, users)
  }
}

export default init
