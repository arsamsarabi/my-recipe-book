/* eslint-disable no-unused-vars */
import React, { ReactElement, FC } from 'react'

import { LottieAnimation } from '../LottieAnimation'
import { LoadingWrapper } from './styles'
import animationData from '../../resources/animations/loading.json'

export const Loading: FC = (): ReactElement => {
  return (
    <LoadingWrapper>
      <LottieAnimation lottie={animationData} />
    </LoadingWrapper>
  )
}
