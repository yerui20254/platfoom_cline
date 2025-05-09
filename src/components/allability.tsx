import React, { useState } from 'react';
import styled from 'styled-components';
import {  Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import type { RadioChangeEvent } from 'antd';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 600px;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
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
const data = [
    { id: 1, category: '插件', type: 'X', level: '1', name: 'Item 1' ,yewu:'ssa'},
    { id: 2, category: 'B', type: 'Y', level: '2', name: 'Item 2' ,yewu:'ssa'},
    { id: 3, category: 'A', type: 'Y', level: '2', name: 'Item 3' ,yewu:'ssa'},
    { id: 4, category: 'agent', type: 'X', level: '3', name: 'Item 4' ,yewu:'ssa'},
  ];
  const options: CheckboxGroupProps<string>['options'] = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: '插件', value: '插件' },
    { label: '模板', value: '模板' },
    { label: '代码接口', value: '代码接口' },
    { label: 'agent', value: 'agent' },
  ];
  const options2 = [
    { label: '工具 A', value: 'A' },
    { label: '工具 B', value: 'B' },
    { label: '工具 C', value: 'C' },
  ];
const AllAbility = () => {
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [yewu, setYewu]=useState('')
  
    const filtered = data.filter(item => {
      return (
        (!category || item.category === category) &&
        (!type || item.type === type) &&
        (!level || item.level === level)
      );
    });
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const handleChange = (e: RadioChangeEvent) => {
        const newValue = e.target.value;
        setSelected(prev => (prev === newValue ? undefined : newValue));
      };

      
  return(
     <Container>
      <Sidebar>
        <Section>
          <h4>工具类型</h4>
          {['插件', 'agent', '模板','代码接口'].map(c => (
            <label key={c}>
              <input
                type="radio"
                name="category"
                value={c}
                checked={category === c}
                onChange={() => setCategory(c)}
              />
              {c}
            </label>
          ))}
        </Section>

        <Section>
          <h4>任务类型</h4>
          {['文本', '图片','音频','视频'].map(t => (
            <label key={t}>
              <input
                type="radio"
                name="type"
                value={t}
                checked={type === t}
                onChange={() => setType(t)}
              />
              {t}
            </label>
          ))}
        </Section>

        <Section>
          <h4>能力方向</h4>
          {['文本理解', '图片理解', '视频理解','知识库','意图识别','信息提取','属性判断','错别字识别','其他'].map(l => (
            <label key={l}>
              <input
                type="radio"
                name="level"
                value={l}
                checked={level === l}
                onChange={() => setLevel(l)}
              />
              {l}
            </label>
          ))}
        </Section>
        <Section>
          <h4>业务方向</h4>
          {['不限', '直播', '电商','生服','安全','搜索','抖音生态','地理位置','垂直'].map(a => (
            <label key={a}>
              <input
                type="radio"
                name="yewu"
                value={a}
                checked={yewu === a}
                onChange={() => setYewu(a)}
              />
              {a}
            </label>
          ))}
        </Section>


       <Section>
        <h4>工具类型</h4>
       <Radio.Group
        className="ant-radio-group"
        options={options}
        defaultValue={undefined}
        optionType="button"
        buttonStyle="solid"
        />
       </Section>

       <Section>
        <h4>工具类型</h4>
       <Radio.Group
        className="ant-radio-group"
        options={options}
        value={selected}
        onChange={handleChange}
        optionType="button"
        buttonStyle="solid"
        />
        <p>当前选中值：{selected ?? '无'}</p>
       </Section>
    
      <Section>
      <h4>工具类型</h4>
      <Radio.Group
        options={options2}
        value={selectedValue}
        onChange={handleRadioChange}
        optionType="button"
        buttonStyle="solid"
      />
      <p>当前选中值：{selectedValue ?? '无'}</p>
      </Section>


      </Sidebar>

      

      <Content>
        <h3>筛选结果</h3>
        {filtered.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
        {filtered.length === 0 && <p>没有符合条件的数据</p>}
      </Content>

    </Container>
  )
    }
  
export default AllAbility 