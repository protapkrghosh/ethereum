import { useState, useEffect } from "react";

const useLedger = () => {
   const [ledgerCurrentIndex, setLedgerCurrentIndex] = useState(0);
   const [ledgerButtonClicked, setLedgerButtonClicked] = useState(false);
   const totalItems = 4;

   useEffect(() => {
      if (ledgerButtonClicked) {
         const timer = setTimeout(
            () => {
               setLedgerCurrentIndex(
                  (prevIndex) => (prevIndex + 1) % totalItems
               );
            },
            ledgerCurrentIndex === 0 ? 3000 : 300000
         );

         return () => clearTimeout(timer);
      }
   }, [ledgerCurrentIndex, ledgerButtonClicked, totalItems]);

   const handleLedgerButton = () => {
      setLedgerButtonClicked(true);
   };

   const handleLedgerPrevious = () => {
      if (ledgerCurrentIndex >= 1) {
         setLedgerCurrentIndex(ledgerCurrentIndex - 1);
      }
   };

   const handleLedgerNext = () => {
      setLedgerCurrentIndex(ledgerCurrentIndex + 1);
   };

   return {
      ledgerCurrentIndex,
      handleLedgerButton,
      handleLedgerPrevious,
      handleLedgerNext,
   };
};

export default useLedger;
