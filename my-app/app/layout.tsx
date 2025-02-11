import React from 'react'
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
   <html>
     <body>
       <h1>Hello from Layout</h1>
       {children}
     </body>
   </html>
  )
}

export default layout