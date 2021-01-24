import React, { FC, ReactElement } from 'react'
import Lottie from 'react-lottie'

interface LottieAnimation {
  lottie: any
  width?: number
  height?: number
}

export const LottieAnimation: FC<LottieAnimation> = ({
  lottie,
  width = 400,
  height = 400,
}): ReactElement => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie options={defaultOptions} height={height} width={width} />
}
