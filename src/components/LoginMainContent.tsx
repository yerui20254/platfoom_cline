import styled from "styled-components";

// 顶部容器
const Main = styled.header`
    padding-top: 0;
    display: flex;
    height: 100vh;
`;
const Left=styled.div`
    flex: 1; /* 平分宽度，也可以设置具体宽度 */
    height: 100%;
    align-items: center;       /* 子元素内部垂直居中 */
    flex-direction: row-reverse; /* 从右到左排列 */
`
const Right = styled.div`
    flex: 1; /* 平分宽度，也可以设置具体宽度 */
    height: 100%; /* 撑满容器高度 */`
// logo 样式
const Logo = styled.img`
    height: 150px;
    margin-left: 50px;
`;

// 标题样式
const Title = styled.h1`
    font-size: 40px;
    color: #40424b;
    margin-left: 17px;
    font-weight: bold;
`;
const Button = styled.button`
    margin-top: 2%;
`
const LoginMainContent: React.FC = () => {
    return (
        <Main>
            <Left>
                <Logo src="./log.png" alt="Logo" />
                <Title>数据与模型插件管理中心</Title>
            </Left>
            <Right>
                <Title>统一登录</Title>
                <div>选择登录方式</div>
                <Button>
                <span>字节sso</span>
                </Button>
            </Right>

        </Main>
    );
};


export default LoginMainContent;