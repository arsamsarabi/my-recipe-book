import styled, { css } from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)(() => {
  return css`
    display: flex;
    flex-direction: column;
  `
})

export const FormWrapper = styled.div(() => {
  return css`
    width: 600px;
  `
})
