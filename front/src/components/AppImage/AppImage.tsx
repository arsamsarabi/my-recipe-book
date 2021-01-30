import React from 'react'

import { IMAGES_BASE_URL } from '../../config/assetUrls'

interface AppImageProps {
  name: string
  path: string
}

export const AppImage = ({ name, path }: AppImageProps) => {
  return (
    <img src={`${IMAGES_BASE_URL}${path}`} alt={`ingredient ${name} image`} />
  )
}
