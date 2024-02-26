'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const buttonStyle = cva('py-2 px-4 rounded active:translate-y-0.5', {
  variants: {
    intent: {
      primary: 'bg-generous-600 text-white font-medium flex-grow',
      secondary: 'bg-generous-200',
      clear: 'bg-transparent',
      loading:
        'bg-gray-200 animate-pulse cursor-not-allowed active:transform-none',
      disabled: 'bg-gray-200 cursor-not-allowed active:transform-none'
    }
  }
})

type PossibelVariants = VariantProps<typeof buttonStyle>
type IntentProps = NonNullable<PossibelVariants['intent']>

interface ButtonProps {
  intent: IntentProps
  action: () => void
  additionalClassName?: HTMLAttributes<HTMLButtonElement>['className']
}

export default function Button({
  children,
  intent,
  action,
  additionalClassName
}: React.PropsWithChildren<ButtonProps>) {
  if (!intent) return null

  const disabled = intent === 'loading' || intent === 'disabled'
  const buttonClassName = buttonStyle({
    intent,
    className: additionalClassName
  })

  return (
    <button className={buttonClassName} disabled={disabled} onClick={action}>
      {children}
    </button>
  )
}
