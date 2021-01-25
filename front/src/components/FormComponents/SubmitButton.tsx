import React, { FC, ReactElement } from 'react'
import { useFormikContext } from 'formik'

import { Button } from '../Button/Button'

interface SubmitButtonProps {
  children: ReactElement
  disabled?: boolean
  loading?: boolean
  title: string
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  title,
}): ReactElement => {
  const { handleSubmit, isValid } = useFormikContext()

  const isDisabled = !isValid || disabled || loading

  return (
    <Button title={title} onClick={() => handleSubmit()} disabled={isDisabled}>
      {children}
    </Button>
  )
}
