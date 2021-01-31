import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '@material-ui/core/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  children: 'Button',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  children: 'Button',
  size: 'small',
}
