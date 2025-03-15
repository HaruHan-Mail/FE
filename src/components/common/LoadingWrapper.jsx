import Lottie from "lottie-react"
import LoadingAni from '../../assets/lottiefiles/loadingAni.json'
import './css/LoadingWrapper.css'

const LoadingWrapper = () => {
  return (
    <div className="loading-wrapper">
      <Lottie animationData={LoadingAni} />
    </div>
  )
}

export default LoadingWrapper