import React, { useState } from 'react'

import { TextField, Picker, Image, NoImage } from './styles'

type ImagePickerProps = {
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: any) => void
}

export const ImagePicker = ({ name, onBlur, onChange }: ImagePickerProps) => {
  const [image, setImage] = useState<string | null>(null)

  const handleChange = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    onChange && onChange(e)
  }

  return (
    <>
      <TextField
        id={name}
        name={name}
        type="file"
        onBlur={onBlur}
        onChange={handleChange}
      />
      <Picker htmlFor={name}>Pick an Image</Picker>
      {image ? (
        <Image url={image} />
      ) : (
        <NoImage>
          <p>No image selected!</p>
        </NoImage>
      )}
    </>
  )
}
