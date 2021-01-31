import React from 'react'

import { IMAGES_BASE_URL } from '../../config/assetUrls'

import {useStyles} from './styles'

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

  const classes = useStyles()

  if (backgroundImage) {
    return <div style={{backgroundImage:`${IMAGES_BASE_URL}${path}`}} className={classes.backgroundImage}  />
  }

  return (
    <img src={`${IMAGES_BASE_URL}${path}`} alt={`ingredient ${name} image`} />
  )
}
