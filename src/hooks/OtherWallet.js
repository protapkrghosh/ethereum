import { useState, useEffect } from "react";

const useOtherWallet = () => {
   const [otherWalletCurrentIndex, setOtherWalletCurrentIndex] = useState(0);
   const [otherWalletButtonClicked, setOtherWalletButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (otherWalletButtonClicked) {
         const timer = setTimeout(
            () => {
               setOtherWalletCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % totalItems
               );
            },
            otherWalletCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [otherWalletCurrentIndex, otherWalletButtonClicked, totalItems]);

   const handleOtherWalletButton = () => {
      setOtherWalletButtonClicked(true);
   };

   const handleOtherWalletPrevious = () => {
      if (otherWalletCurrentIndex >= 1) {
         setOtherWalletCurrentIndex(otherWalletCurrentIndex - 1);
      }
   };

   const handleOtherWalletNext = () => {
      setOtherWalletCurrentIndex(otherWalletCurrentIndex + 1);
   };

   return {
      otherWalletCurrentIndex,
      handleOtherWalletButton,
      handleOtherWalletPrevious,
      handleOtherWalletNext,
   };
};

export default useOtherWallet;
