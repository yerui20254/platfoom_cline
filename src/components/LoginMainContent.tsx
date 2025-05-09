import styled from "styled-components";
import React, { useState } from 'react';

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
const optionsData = [
    {
      title: '工具类型',
      options: ['插件', 'agent', '模板', '代码接口'],
    },
    {
      title: '任务类型',
      options: ['文本', '图片', '视频', '音频'],
    },
    {
      title: '能力方向',
      options: [
        '文本理解', '图片理解', '视频理解', '知识库', '意图识别',
        '信息提取', '属性判断', '错别字识别', '其他',
      ],
    },
    {
      title: '业务方向',
      options: ['不限', '直播', '电商', '生服', '安全', '搜索', '抖音生态', '地理位置', '垂直'],
    },
  ];
const ToggleButtonGroup = () => {
    // 用于记录每一组的当前选中项（key 为 title，值为选中项或 null）
    const [selectedValues, setSelectedValues] = useState<Record<string, string | null>>({});
  
    const handleToggle = (groupTitle: string, value: string) => {
      setSelectedValues((prev) => ({
        ...prev,
        [groupTitle]: prev[groupTitle] === value ? null : value,
      }));
      //筛选函数的传参a
       const a=JSON.stringify(selectedValues, null, 2)
       console.log(a)
    };
  
   
  
    return (
      <div>
      {optionsData.map((group) => (
        <div key={group.title} style={{ marginBottom: '20px' }}>
          <h4>{group.title}</h4>
          {group.options.map((option) => {
            const isSelected = selectedValues[group.title] === option;
            return (
              <button
                key={option}
                style={{
                  marginRight: '10px',
                  padding: '8px 16px',
                  backgroundColor: isSelected ? '#1890ff' : '#f0f0f0',
                  color: isSelected ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => handleToggle(group.title, option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      ))}
      <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
    </div>
    );
  };

export default LoginMainContent;