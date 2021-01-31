import React from 'react'

import { IMAGES_BASE_URL } from '../../config/assetUrls'
import { BackgroundImage } from './styles'
interface AppImageProps {
  name: string
  path?: string
  backgroundImage?: boolean
}

export const AppImage = ({
  name,
  path,
  backgroundImage = false,
}: AppImageProps) => {
  if (backgroundImage) {
    return <BackgroundImage url={`${IMAGES_BASE_URL}${path}`} />
  }
  return (
    <img src={`${IMAGES_BASE_URL}${path}`} alt={`ingredient ${name} image`} />
  )
}
