import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: object; 
  width?: string; 
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, width = '' }) => {
  return (
    <div className={`animation-container ${width}`}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;

