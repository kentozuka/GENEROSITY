// import { NextResponse } from 'next/server'

// https://github.com/vercel/next.js/issues/48524
// exporting NextResponse results in an error where the serverless function is only run once in the dev mode
// fixed by exporting the object only

// export const badRequest = (message: string) =>
//   NextResponse.json(
//     {
//       error: message
//     },
//     { status: 400 }
//   )

export const BAD_REQUEST = { status: 400 }

export const badRequest = (message: string) => ({ error: message })

export const userNotFound = badRequest(
  'user not found. you need to authenticate first.'
)

export const lackOfRequiredFields = badRequest('lacking required fields')
