import { submitSearch } from '@/actions/submitSearch'
import { Button } from '@/components/ui/button'
import Icon from '@/components/atoms/Icon'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

export default async function SearchForm() {
  return (
    <div className="pb-8">
      <p className="pb-2 text-lg">授業を検索</p>
      <form className="flex gap-2" action={submitSearch}>
        <Select name="faculty">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="学部を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="国際教養学部">国際教養学部</SelectItem>
            <SelectItem value="政治経済学部">政治経済学部</SelectItem>
          </SelectContent>
        </Select>
        <Select name="term">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="学期を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="春学期">春学期</SelectItem>
            <SelectItem value="秋学期">秋学期</SelectItem>
          </SelectContent>
        </Select>
        <Select name="weekday">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="曜日を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">日曜日</SelectItem>
            <SelectItem value="1">月曜日</SelectItem>
            <SelectItem value="2">火曜日</SelectItem>
            <SelectItem value="3">水曜日</SelectItem>
            <SelectItem value="4">木曜日</SelectItem>
            <SelectItem value="5">金曜日</SelectItem>
            <SelectItem value="6">土曜日</SelectItem>
          </SelectContent>
        </Select>

        <Select name="period">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="時限を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1限目</SelectItem>
            <SelectItem value="2">2限目</SelectItem>
            <SelectItem value="3">3限目</SelectItem>
            <SelectItem value="4">4限目</SelectItem>
            <SelectItem value="5">5限目</SelectItem>
            <SelectItem value="6">6限目</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">
          <Icon type="search" />
        </Button>
      </form>
    </div>
  )
}
