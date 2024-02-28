import { useEffect, useState } from "react";

const useTheme = () => {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);

   const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
   };

   return { theme, handleThemeSwitch };
};

export default useTheme;
