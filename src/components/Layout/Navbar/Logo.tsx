import { motion, MotionStyle, useTransform } from "framer-motion";
import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties | MotionStyle;
}

export const Logo = (props: Props) => {
  return (
    <motion.svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 73.56 135.69"
      className="dark:fill-white fill-primaryColorGray"
    >
      <g id="XML-ID_87_">
        <path
          id="XML-ID_102_"
          d="M43.89,93.89l14.04-54.95l0,0l9.03-35.36L51.82,0L0,102.97l1.88,3.53l17.9-12.38l9.54,41.57l3.92-0.12
		L43.89,93.89L43.89,93.89z M30.91,125.27l-7.62-33.58l12.22-8.45l1.92-11.49L21.74,84.84l0,0l-3.43,2.86l0,0l-9.6,8.01l36.87-58.3
		l-4.22,25.27h0l-3.21,19.22L30.91,125.27z"
        />
        <polygon
          id="XML-ID_103_"
          points="52.66,71.38 73.56,56.92 68.34,45.96 56.67,55.7 	"
        />
      </g>
    </motion.svg>
  );
};
