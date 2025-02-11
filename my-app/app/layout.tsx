
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
   <html>
     <body>
       <Navbar />
       <h1>Hello from Layout</h1>
       {children}
     </body>
   </html>
  )
}

export default layout