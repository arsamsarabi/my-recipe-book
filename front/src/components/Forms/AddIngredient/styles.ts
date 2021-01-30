import styled, { css } from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)(() => {
  return css`
    display: flex;
    flex-direction: column;
  `
})
