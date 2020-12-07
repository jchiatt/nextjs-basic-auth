# NextJS Basic Auth

This package makes it simple to add Basic HTTP Auth to your Next.js application. Note that it **requires** you to opt out of static generation for any routes you want to protect, due to the fact that it needs to be called inside `getServerSideProps`.

## Installation

```
yarn add nextjs-basic-auth
```

## Setup

Initialize by importing and passing an object containing an array of users (use `user` and `password` as your object keys):

```
import initializeBasicAuth from 'nextjs-basic-auth'
const users = [
  { user: 'user1', password: 'toocool' },
  { user: 'admin', password: 'password' },
]
const basicAuthCheck = initializeBasicAuth({
  users: users
})
```

This will return a function to you that you can call with two arguments: `req` and `res`.

## Usage

Provided you have initialized the package already, you can await the returned function inside `getServerSideProps` of any route(s).

```
// some-route.js
export async function getServerSideProps(ctx) {
  const {req, res} = ctx

  await basicAuthCheck(req, res)

  return {
    props: {}
  }
}
```

If the user input cannot be authenticated, the user will receive a 401 and a prompt to re-enter credentials.
