import React, { useEffect, useState } from 'react'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
