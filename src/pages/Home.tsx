import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNavBar from '../components/TopNavBar'
import styled from "styled-components";

const Main = styled.main`
display: flex;
height: 70vh;
    justify-content: space-between;
   

    .left, .right {
        flex: 1;
        display: flex;
    }
    .left{
        width:60%;
        align-items: center;
        margin-left: 120px;
        & img{
            width:400px
        }
        & span{
            font-weight: bold;
            font-size: 4rem;
        }
    }
    .right {
        width:35%;
        flex-direction: column;   /* 垂直排列子元素 */
        justify-content: space-around; /* 横向分布 */
       & span{
           font-size: 36px;
       }
        & font{
            font-size: 28px;
            color: azure;
        }
        .rightcontent{
            margin-left: 50px;
            
        }
    }
`

const Home: React.FC = () => {
  const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/page2')
    }
  return (
    <div>
      <div><TopNavBar /></div>
      <Main>
        <div className="left">
            <img src='./log.png' alt='图片'/>
            <span>AI数据服务处理平台</span>
        </div>
        <div className="right">
            <div className="rightcontent">
                <span>统一登陆</span>
                <div className="font">选择登录的方式</div>
                <button onClick={handleNavigate}>字节sso</button>
            </div>

        </div>
      </Main>
      
    </div>
  )
}

export default Home