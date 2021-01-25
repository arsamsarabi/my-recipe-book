import React, { FC, ReactElement } from 'react'
import { Formik } from 'formik'

interface FormProps {
  initialValues: any
  onSubmit: () => void
  validationSchema: any
  children: ReactElement
}

export const Form: FC<FormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}): ReactElement => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}
