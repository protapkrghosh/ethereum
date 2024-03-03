import { useState, useEffect } from "react";

const useCoinbase = () => {
   const [coinbaseCurrentIndex, setCoinbaseCurrentIndex] = useState(0);
   const [coinbaseButtonClicked, setCoinbaseButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (coinbaseButtonClicked) {
         const timer = setTimeout(
            () => {
               setCoinbaseCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % totalItems
               );
            },
            coinbaseCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [coinbaseCurrentIndex, coinbaseButtonClicked, totalItems]);

   const handleCoinbaseButton = () => {
      setCoinbaseButtonClicked(true);
   };

   const handleCoinbasePrevious = () => {
      if (coinbaseCurrentIndex >= 1) {
         setCoinbaseCurrentIndex(coinbaseCurrentIndex - 1);
      }
   };

   const handleCoinbaseNext = () => {
      setCoinbaseCurrentIndex(coinbaseCurrentIndex + 1);
   };

   return {
      coinbaseCurrentIndex,
      handleCoinbaseButton,
      handleCoinbasePrevious,
      handleCoinbaseNext,
   };
};

export default useCoinbase;
