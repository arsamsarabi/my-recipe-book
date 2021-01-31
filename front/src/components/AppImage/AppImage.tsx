import React from 'react'

import { IMAGES_BASE_URL } from '../../config/assetUrls'

import {useStyles} from './styles'

interface AppImageProps {
  name: string
  path?: string
}

export const AppImage = ({
  name,
  path,
}: AppImageProps) => {

  const classes = useStyles()

  return (
    <img src={`${IMAGES_BASE_URL}${path}`} alt={`ingredient ${name} image`} className={classes.image}  />
  )
}
