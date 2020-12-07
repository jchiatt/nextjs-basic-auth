const headerToBase64 = (header: string) => {
  const b64auth = header.split(" ")[1]
  const [user, password] = Buffer.from(b64auth, "base64")
    .toString()
    .split(":")

  return [user, password]
}

export default headerToBase64
