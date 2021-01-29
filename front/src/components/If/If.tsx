import React, { ReactNode } from 'react'

type IfType = {
  condition: boolean
  children: ReactNode
}
export const If = ({ condition, children }: IfType) => {
  if (condition) {
    return <>{children}</>
  }
  return null
}
