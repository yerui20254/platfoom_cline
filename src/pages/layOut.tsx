import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/Sidebar.tsx'


const Wrapper=styled.div`
   border: 1px solid #432243;
   height: 100vh;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   & aside{width: 10vw;border: 1px solid red}
  
 `
const Wrapper2=styled.div`
 display: flex;
  flex: 1;
  min-height: 0; /* 添加这一行解决flex容器溢出问题 */
 & main{ 
   border: 1px solid blue;
   width: calc(100% - 200px); 
   margin: 20px;
   overflow-y: auto;
   overflow-x: hidden; /* 只允许垂直滚动 */
 }
`
const TopNav=styled.div`
width: 100%;
height: 80px;
top: 0;
border: 1px solid red`


const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
      <Wrapper>
        <TopNav></TopNav>
        <Wrapper2>
        <aside>
          <Sidebar />
        </aside>
        <main>
        { children }
        </main>
        </Wrapper2>
      </Wrapper>
  )
}

export default LayOut