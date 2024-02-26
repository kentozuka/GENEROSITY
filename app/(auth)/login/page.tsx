import Logo from '@/components/atoms/Logo'
import UnnecessaryTorusKnot from '@/components/atoms/UnnecessaryTorusKnot'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login() {
  return (
    <main className="grid grid-cols-12 h-screen w-screen overflow-hidden">
      <div className="col-span-5 p-12 flex flex-col justify-between">
        <Logo />
        <form className="max-w-80 py-8 self-center">
          <div className="pb-8">
            <p className="font-bold text-xl text-generous-600 pb-1">
              授業管理にログイン
            </p>
            <p className="text-generous-500">
              発行されたアカウントをご使用ください。
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Input type="email" placeholder="メールアドレス" />
            <Input type="password" placeholder="パスワード" />
          </div>

          <div className="flex pt-8">
            <Button className="flex-grow bg-generous-600">ログイン</Button>
          </div>
        </form>

        <p className="text-generous-500 text-sm text-center py-6">
          利用規約・プライバシーポリシー
        </p>
      </div>

      <div className="bg-generous-600 col-span-7">
        <UnnecessaryTorusKnot />
      </div>
    </main>
  )
}
