'use client'

import useStore from "@/utils/store";
import {Fragment, useEffect} from "react";

const Toast = ({ message, bgColor = 'red', textColor = 'white', waitTime = 1400 }: ToastType) => {
  const showToast = useStore((state) => state.showToast);
  const toggleToast = useStore((state) => state.toggleToast);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggleToast(false);
    }, waitTime);
    return () => clearTimeout(timeoutId);
  });

  if (!showToast) return <Fragment />
  return (
     <div className="container mx-auto fixed bottom-0 left-0 sm:w-full lg:w-1/2 p-4 z-20">
      <div className={`bg-${bgColor}-500 text-${textColor} px-4 py-2 rounded-lg shadow-lg`}>
        {message}
      </div>
    </div>
  );
};

export default Toast;
