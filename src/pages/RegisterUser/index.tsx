import AuthPageLayout from '@/components/containers/AuthPageLayout/AuthPageLayout'
import RegisterUserPage from './components/RegisterUserPage'

const RegisterUser = () => {
  return (
    <AuthPageLayout>
      <RegisterUserPage />
    </AuthPageLayout>
  )
}

export default RegisterUser