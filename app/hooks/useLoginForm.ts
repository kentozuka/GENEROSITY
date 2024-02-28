import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react' // serverside auth does not work so ill opt for clientside

export const useLoginForm = (callbackUrl?: string) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    setLoading(true) // redirect automatically renew the page so no need to reset the loading state
    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: true,
      callbackUrl: callbackUrl || '/registered'
    })
  }

  return {
    loading,
    handleSubmit
  }
}
