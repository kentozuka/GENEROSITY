import { useState } from 'react'

export const useClientSearch = () => {
  const [faculty, setFaculty] = useState('')
  const [term, setTerm] = useState('')
  const [weekday, setWeekday] = useState('')
  const [period, setPeriod] = useState('')

  const params = new URLSearchParams({
    ...(faculty && { faculty }),
    ...(term && { term }),
    ...(weekday && { weekday }),
    ...(period && { period })
  }).toString()
  const href = params ? `/result?${params}` : '/result'

  return {
    href,
    facultySet: {
      value: faculty,
      onValueChange: setFaculty
    },
    termSet: {
      value: term,
      onValueChange: setTerm
    },
    weekdaySet: {
      value: weekday,
      onValueChange: setWeekday
    },
    periodSet: {
      value: period,
      onValueChange: setPeriod
    }
  }
}
