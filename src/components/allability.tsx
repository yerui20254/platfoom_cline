import styled from 'styled-components';
import React, { useState } from 'react';
import { Input,Card, Row, Col } from 'antd';
import type { GetProps } from 'antd';
import {useNavigate} from 'react-router-dom'
type SearchProps = GetProps<typeof Input.Search>;



const Container = styled.div`
   display: flex;
  flex: 1;
  min-height: 100%;
`;

const Sidebar = styled.div`
  width: 600px;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  & .ant-input-group {
    width: 30%;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
   & .ant-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    min-width: 300px;
  }
`;
//input相关
const { Search } = Input;
//搜索触发的函数
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const AllAbility = () => {  
  return(
     <Container>
      <Sidebar>
      <Section>
        <ToggleButtonGroup />
      </Section>
      </Sidebar>
      <Content>
        <h3>筛选结果</h3>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <CapabilityCards />
      </Content>

    </Container>
  )
    }
  
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
                    marginBottom: '10px',
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
    const capabilities = [
        {
          description: 'xxxxxxxxxxxxx',
          toolType: '插件',
          taskType: '文本',
          capabilityDirection: '文本理解',
          businessDirection: '电商',
          providerNote: '指的是能力提供方，若要使用该能力可以咨询找到的司学',
          link:["xxx",'zzz']
        },
        {
          description: 'xxxxxxxxxxxxx',
          toolType: '模板',
          taskType: '图片',
          capabilityDirection: '图像识别',
          businessDirection: '安全',
          providerNote: '指的是能力提供方，若要使用该能力可以咨询找到的司学',
          link:["xxx",'zzz']
        },
        {
          description: 'xxxxxxxxxxxxx',
          toolType: '模板',
          taskType: '图片',
          capabilityDirection: '图像识别',
          businessDirection: '安全',
          providerNote: '指的是能力提供方，若要使用该能力可以咨询找到的司学',
          link:["xxx",'zzz']
        }
        ,
        {
          description: 'xxxxxxxxxxxxx',
          toolType: '模板',
          taskType: '图片',
          capabilityDirection: '图像识别',
          businessDirection: '安全',
          providerNote: '指的是能力提供方，若要使用该能力可以咨询找到的司学',
          link:["xxx",'zzz']
        }
        // 可继续添加更多项...
      ];
      const CapabilityCards: React.FC = () => {
        const navigate = useNavigate()
       const handleCardClick = (item: any) => {
        // 这里可以根据item的属性构造跳转路径
        navigate('/ability', { state: {  link: item.link } });
        };
        return (
          <Row gutter={[16, 16]}>
            {capabilities.map((item, index) => (
              <Col span={8} key={index}>
                <Card title={`能力 ${index + 1}`} bordered={true}   onClick={() => handleCardClick(item)}>
                  <p><strong>能力简介:</strong> {item.description}</p>
                  <p><strong>工具类型:</strong> {item.toolType}</p>
                  <p><strong>任务类型:</strong> {item.taskType}</p>
                  <p><strong>能力方向:</strong> {item.capabilityDirection}</p>
                  <p><strong>业务方向:</strong> {item.businessDirection}</p>
                  <p><strong>能力提供:</strong> {item.providerNote}</p>
                </Card>
              </Col>
            ))}
          </Row>
        );
      };
export default AllAbility 