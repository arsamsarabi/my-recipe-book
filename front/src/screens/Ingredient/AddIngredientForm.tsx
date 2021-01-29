import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

interface InitialFormValues {
  name: string
  image: string
}

export const AddIngredientForm = () => {
  const handleOnSubmit = (
    values: InitialFormValues,
    { setSubmitting }: FormikHelpers<InitialFormValues>,
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
      }}
      onSubmit={handleOnSubmit}
    >
      <Form>
        <label htmlFor="name">Ingredient name</label>
        <Field id="name" name="name" placeholder="Ingredient name" />

        <label htmlFor="image">Ingredient image</label>
        <Field id="image" name="image" type="file" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
