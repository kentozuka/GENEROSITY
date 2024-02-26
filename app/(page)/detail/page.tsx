'use client'

import Credit from '@/components/atoms/Credit'
import Icon from '@/components/atoms/Icon'
import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import NonFunctionalTabs from '@/components/atoms/NonFunctionalTabs'
import Unenrollconfirmation from '@/components/organisms/UnenrollConfirmation'

export default function Detail() {
  return (
    <section className="">
      <Button variant="secondary">戻る</Button>

      <div className="py-8">
        <h1 className="text-xl">Seminar on Communication 07</h1>
        <p className="text-generous-500 text-sm">国際教養学部</p>
        <ProfileDisplay src="" alt="" name="近藤　眞理子" />

        <div className="flex gap-4 pt-2">
          <Credit count={2} />
          <Badge variant="outline" className="font-normal">
            春学期
          </Badge>
          <TimeDisplay dayIndex={2} period={2} />
        </div>

        <div className="py-6 flex gap-2 max-w-sm">
          <Button className="flex-grow">登録申請</Button>
          <Button variant="secondary">
            <Icon type="heart" />
          </Button>
        </div>

        <div className="max-w-lg">
          <NonFunctionalTabs />

          <div className="py-8">
            <div className="pb-4">
              <h2 className="text-lg">授業概要</h2>
              <p className="py-2 text-generous-600">
                本講義は、コミュニケーションの基本的な理論を学び、実際のコミュニケーションの場面での実践的なスキルを身につけることを目的とする。
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-lg">授業概要</h2>
              <p className="py-2 text-generous-600">
                本講義は、コミュニケーションの基本的な理論を学び、実際のコミュニケーションの場面での実践的なスキルを身につけることを目的とする。
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-lg">授業概要</h2>
              <p className="py-2 text-generous-600">
                本講義は、コミュニケーションの基本的な理論を学び、実際のコミュニケーションの場面での実践的なスキルを身につけることを目的とする。
              </p>
            </div>
          </div>
        </div>

        <Unenrollconfirmation />
      </div>
    </section>
  )
}
