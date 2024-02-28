import ModalWrapper from '@/components/molecures/ModalWrapper'
import LoginForm from '@/components/organisms/LoginForm'
import ModalCloseButton from '@/components/organisms/ModalCloseButton'

export default function Page() {
  return (
    <ModalWrapper>
      <ModalCloseButton />
      <LoginForm />
    </ModalWrapper>
  )
}
