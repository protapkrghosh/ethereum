import { useState, useEffect } from "react";

const useTrezor = () => {
   const [trezorCurrentIndex, setTrezorCurrentIndex] = useState(0);
   const [trezorButtonClicked, setTrezorButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (trezorButtonClicked) {
         const timer = setTimeout(
            () => {
               setTrezorCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % totalItems
               );
            },
            trezorCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [trezorCurrentIndex, trezorButtonClicked, totalItems]);

   const handleTrezorButton = () => {
      setTrezorButtonClicked(true);
   };

   const handleTrezorPrevious = () => {
      if (trezorCurrentIndex >= 1) {
         setTrezorCurrentIndex(trezorCurrentIndex - 1);
      }
   };

   const handleTrezorNext = () => {
      setTrezorCurrentIndex(trezorCurrentIndex + 1);
   };

   return {
      trezorCurrentIndex,
      handleTrezorButton,
      handleTrezorPrevious,
      handleTrezorNext,
   };
};

export default useTrezor;
