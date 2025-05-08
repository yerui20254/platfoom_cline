import React from 'react'
import styled from "styled-components";
import Sidebar from '../components/Sidebar.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from "react-router";
import { Layout } from 'antd'

const Wrapper=styled.main`
   width: 100vw;
   height: 100vh;
   border: 1px solid red;
   & aside{width: 10vw;border: 1px solid red}
   & main{border: 1px solid red,}
 `
const Wrapper2=styled.div`
display: flex;
  flex: 1;
`
const TopNav=styled.div`
width: 100vw;
height: 80px;
border: 1px solid red`

const Page = ({ text }: { text: string }) => <h1>{text}</h1>

const Page2: React.FC = () => {
  return (
      <Wrapper>
        <TopNav></TopNav>
        <Wrapper2>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Layout.Content style={{ padding: '20px', minHeight: '100vh' }}>
            <Routes>
              <Route path="/group1/item1" element={<Page text="模块一 - 子菜单1" />} />
              <Route path="/group2/item1" element={<Page text="模块二 - 子菜单1" />} />
              <Route path="/group2/item2" element={<Page text="模块二 - 子菜单2" />} />
              <Route path="/group3/item1" element={<Page text="模块三 - 子菜单1" />} />
              <Route path="/group3/item2" element={<Page text="模块三 - 子菜单2" />} />
              <Route path="/group3/item3" element={<Page text="模块三 - 子菜单3" />} />
              <Route path="/group3/item4" element={<Page text="模块三 - 子菜单4" />} />
            </Routes>
          </Layout.Content>
          <Outlet />
        </main>
        </Wrapper2>
      </Wrapper>
  )
}

export default Page2