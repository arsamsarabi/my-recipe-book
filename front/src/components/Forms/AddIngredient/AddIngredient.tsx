import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { addIngredient } from '../../../api'
import { StyledForm } from './styles'

const FILE_SIZE = 8192 * 8192
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  image: Yup.mixed()
    .required('A file is required')
    .test(
      'fileSize',
      'File too large',
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
})

interface InitialFormValues {
  name: string
  image: string
}

export const AddIngredientForm = () => {
  const handleNameChange = (
    e: any,
    // eslint-disable-next-line no-unused-vars
    setFieldValue: (field: string, value: any) => void
  ) => setFieldValue('name', e.target.value)

  const handleImageChange = (
    e: any,
    // eslint-disable-next-line no-unused-vars
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue('image', e.target.files[0])
  }

  const handleOnSubmit = async (
    values: InitialFormValues,
    { setSubmitting }: FormikHelpers<InitialFormValues>
  ) => {
    setSubmitting(true)

    try {
      const response = await addIngredient(values, handleProgress)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    setSubmitting(false)
  }

  const handleProgress = (progressEvent: any): void => {
    console.log(progressEvent)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
      }}
      onSubmit={handleOnSubmit}
      validateOnBlur
      validationSchema={validationSchema}
    >
      {({
        isValid,
        errors,
        touched,
        values,
        setFieldTouched,
        setFieldValue,
      }) => {
        return (
          <StyledForm>
            <label htmlFor="name">Ingredient name</label>
            <TextField
              id="name"
              name="name"
              value={values.name}
              placeholder="Ingredient name"
              onBlur={() => setFieldTouched('name')}
              onChange={(e) => handleNameChange(e, setFieldValue)}
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}

            <label htmlFor="image">Ingredient image</label>
            <TextField
              id="image"
              name="image"
              type="file"
              onBlur={() => setFieldTouched('image')}
              onChange={(e) => handleImageChange(e, setFieldValue)}
            />
            {errors.image && touched.image ? <p>{errors.image}</p> : null}

            <Button
              type="submit"
              disabled={!isValid}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </StyledForm>
        )
      }}
    </Formik>
  )
}
