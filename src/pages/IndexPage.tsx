import React from 'react'
import { Outlet } from "react-router";
import LayOut from './layOut.tsx';



const ContentIndexPage: React.FC = () => {
  return (
      <LayOut>
        <Outlet></Outlet>
      </LayOut>
  )
}

export default ContentIndexPage