import { User } from "../types"

type findAndCheckUserReturn = User | false

const findAndCheckUser = (
  user: string,
  password: string,
  users: User[]
): findAndCheckUserReturn => {
  const foundUser = users.find(
    acct => acct.user === user && acct.password === password
  )
  if (!foundUser) return false
  return foundUser
}

export default findAndCheckUser
