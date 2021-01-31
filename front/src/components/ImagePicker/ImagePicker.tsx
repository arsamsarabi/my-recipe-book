import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {AppImage} from '../AppImage'
type ImagePickerProps = {
  onChange: (e: any) => void
  onBlur: (e: any) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ImagePicker = ({ onChange , onBlur}: ImagePickerProps) => {
  const [image, setImage] = useState<string | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    onChange(e)
  }

  return (
    <>
      <Typography >Pick an Image</Typography>
      {image ? (
        <AppImage name='imagePicker' path={image} />
      ) : (
        <div>
          <p>No image selected!</p>
        </div>
      )}
    </>
  )
}
