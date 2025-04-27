import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../assets/lottiefiles/loadingAni.json'
import './css/LoadingSpinner.css'

/**
 * @param {object} props
 * @param {number} [props.size=150]
 * @param {boolean} [props.fullscreen=false] 
 * @param {string} [props.className] 
 */
const LoadingSpinner = ({
  size = 150,
  fullscreen = false,
  className = '',
}) => {
  return (
    <div
      role="status"
      aria-label="로딩 중입니다"
      className={`loading-spinner ${fullscreen ? 'loading-spinner--fullscreen' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default LoadingSpinner
