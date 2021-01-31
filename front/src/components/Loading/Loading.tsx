import React from 'react'

import { LottieAnimation } from '../LottieAnimation'
import { useStyles } from './styles'
import animationData from '../../resources/animations/loading.json'

export const Loading= () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <LottieAnimation lottie={animationData} />
    </div>
  )
}
