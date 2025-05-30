import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/Sidebar.tsx'


const Wrapper=styled.div`
   border: 1px solid #432243;
   height: calc(100vh - 20px);;
  
   display: flex;
   flex-direction: column;
   & aside{width: 10vw;border: 1px solid blue}
  
 `
const Wrapper2=styled.div`
 display: flex;
  flex: 1;
  min-height: 0; /* 添加这一行解决flex容器溢出问题 */
   overflow: hidden;
 & main{ 
   border: 1px solid blue;
   width: calc(100% - 80px); 
   margin: 20px;
   overflow-y: auto;
   overflow-x: hidden; /* 只允许垂直滚动 */
    /* 滚动条隐藏但仍可滚动 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
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