import withAuth from 'next-auth/middleware'

export const config = {
  matcher: ['/registered', '/favorite']
}

export default withAuth({
  pages: {
    signIn: '/login'
  }
})
