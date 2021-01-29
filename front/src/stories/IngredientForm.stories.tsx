import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { AddIngredientForm } from '../screens/Ingredient/AddIngredientForm'

export default {
  title: 'Example/AddIngredientForm',
  component: AddIngredientForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (props) => <AddIngredientForm {...props} />

export const Form = Template.bind({})
Form.args = {}
