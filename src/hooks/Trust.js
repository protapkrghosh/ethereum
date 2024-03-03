import { useState, useEffect } from "react";

const useTrust = () => {
   const [trustCurrentIndex, setTrustCurrentIndex] = useState(0);
   const [trustButtonClicked, setTrustButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (trustButtonClicked) {
         const timer = setTimeout(
            () => {
               setTrustCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % totalItems
               );
            },
            trustCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [trustCurrentIndex, trustButtonClicked, totalItems]);

   const handleTrustButton = () => {
      setTrustButtonClicked(true);
   };

   const handleTrustPrevious = () => {
      if (trustCurrentIndex >= 1) {
         setTrustCurrentIndex(trustCurrentIndex - 1);
      }
   };

   const handleTrustNext = () => {
      setTrustCurrentIndex(trustCurrentIndex + 1);
   };

   return {
      trustCurrentIndex,
      handleTrustButton,
      handleTrustPrevious,
      handleTrustNext,
   };
};

export default useTrust;
