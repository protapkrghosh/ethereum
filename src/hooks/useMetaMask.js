import { useState, useEffect } from "react";

const useMetaMask = () => {
   const [metaCurrentIndex, setMetaCurrentIndex] = useState(0);
   const [metaButtonClicked, setMetaButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (metaButtonClicked) {
         const timer = setTimeout(
            () => {
               setMetaCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
            },
            metaCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [metaCurrentIndex, metaButtonClicked, totalItems]);

   const handleMetaMaskButton = () => {
      setMetaButtonClicked(true);
   };

   const handleMetaMaskPrevious = () => {
      if (metaCurrentIndex >= 1) {
         setMetaCurrentIndex(metaCurrentIndex - 1);
      }
   };

   const handleMetaMaskNext = () => {
      setMetaCurrentIndex(metaCurrentIndex + 1);
   };

   return {
      metaCurrentIndex,
      handleMetaMaskButton,
      handleMetaMaskPrevious,
      handleMetaMaskNext,
   };
};

export default useMetaMask;
