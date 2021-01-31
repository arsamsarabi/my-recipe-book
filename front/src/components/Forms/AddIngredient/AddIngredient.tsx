import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { addIngredient } from '../../../api'
import { useStyles} from './styles'

const validationSchema = Yup.object().shape({
  name: Yup.string().label('Ingredient name').required(),
  image: Yup.mixed(),
})

interface InitialFormValues {
  name: string
  image: string
}

export const AddIngredientForm = () => {

  const classes =useStyles()

  const handleNameChange = (
    e: any,
    // eslint-disable-next-line no-unused-vars
    setFieldValue: (field: string, value: any) => void
  ) => setFieldValue('name', e.target.value)

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
    <div className={classes.formWrapper}>
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
            <div className={classes.form}>
              <TextField
                id="name"
                name="name"
                value={values.name}
                placeholder="Ingredient name"
                onBlur={() => setFieldTouched('name')}
                onChange={(e) => handleNameChange(e, setFieldValue)}
              />
              {errors.name && touched.name ? <p>{errors.name}</p> : null}


              {errors.image && touched.image ? <p>{errors.image}</p> : null}

              <Button
                type="submit"
                disabled={!isValid}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

/*

import { ImagePicker } from '../../ImagePicker'
  const handleImageChange = (
    e: any,
    // eslint-disable-next-line no-unused-vars
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue('image', e.target.files[0])
  }
 <ImagePicker
                name="image"
                onBlur={() => setFieldTouched('image')}
                onChange={(e) => handleImageChange(e, setFieldValue)}
              />
 */