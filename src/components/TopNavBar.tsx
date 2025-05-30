import styled from "styled-components";
import * as React from "react";
// 顶部容器
const TopNav = styled.header`
    padding-top: 0;
    height: 200px;
    display: flex;
    align-items: center;
    border-bottom:1px solid grey;

`;

// logo 样式
const Logo = styled.img`
  height: 75px;
    margin-left: 50px;
`;

// 标题样式
const Title = styled.h1`
    font-size: 40px;
    color: #40424b;
    margin-left: 17px;
    font-weight: bold;
    padding-left:10px;
    border-left: 2px solid #000; /* 或者 border-right */
    
`;

const TopNavBar: React.FC = () => {
    return (
        <TopNav>
            <Logo src="./log.png" alt="Logo" />
            <Title>AI数据服务处理平台</Title>
        </TopNav>
    );
};

export default TopNavBar;