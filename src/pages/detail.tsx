import { Card } from 'antd';
import styled from "styled-components"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AllAbility from '../components/allability'

const StyledCard = styled(Card)` 
  height: 240px;
  background:#f5f5f5;
`;
const StyledCard2 = styled(Card)`
  width:400px;
  height: 140px;
  background:#f5f5f5;
 
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TabOne = () => <AllAbility />;
const TabTwo = () => <div>这是 Tab 2 的内容</div>;

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '全部能力',
    children: <TabOne />,
  },
  {
    key: '2',
    label: '我的收藏',
    children: <TabTwo />,
  },
  
];
const onChange = (key: string) => {
  console.log(key);
};
const TabCont: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
const Detail = () => {
  const a=[{title:'热门工具1',content:"xxxxxxxxxxx",link:"/xxx"},{title:'热门工具1',content:"xxxxxxxxxxx",link:"/xxx"},{title:'热门工具1',content:"xxxxxxxxxxx",link:"/xxx"},{title:'热门工具1',content:"xxxxxxxxxxx",link:"/xxx"}]
    return(<div>
        <div>
          <StyledCard title="热门工具" variant="borderless">
          <CardContainer>
            {a.map((item, index) => (
              <StyledCard2 key={index} title={item.title}>
                <p>介绍：{item.content}</p>
              </StyledCard2>
            ))}
          </CardContainer>
          </StyledCard>
        </div>
       <div>
       <TabCont></TabCont>
       </div>

    </div>)
  }

  export default Detail