import React, { useState } from 'react';
import { Radio, Divider, Input } from 'antd';

interface Props {
  title: React.ReactNode;
  onChange: (values: {
    selectedValue: string; // 单选框选中值
    inputs: Record<string, string>; // 输入内容
  }) => void;
}

const DynamicFormSection: React.FC<Props> = ({ title, onChange }) => {
  // 拆分状态：单选值 + 输入内容
  const [selectedValue, setSelectedValue] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [formInputs, setFormInputs] = useState<Record<string, string>>({});

  // 统一处理状态变化和回调
  const handleChange = (type: 'select' | 'input', value?: any, key?: string) => {
    if (type === 'select') {
// 为了解决类型不匹配问题，将 value 断言为 'A' | 'B' | 'C' | 'D' 类型
setSelectedValue(value as 'A' | 'B' | 'C' | 'D');
      // 切换选项时清空非当前类型的输入（可选逻辑）
      setFormInputs({});
    } else if (type === 'input' && key) {
      setFormInputs(prev => ({ ...prev, [key]: value || '' }));
    }
    
    // 组合并传递最新值
    onChange({
      selectedValue,
      inputs: formInputs
    });
  };

  const renderComponent = () => {
    const InputRow = (label: string, key: string) => (
      <div style={{ marginTop: '10px' }}>
        <span style={{ width: '60px', display: 'inline-block', textAlign: 'right' }}>{label}:</span>
        <Input
          style={{ marginLeft: '10px', width: '400px' }}
          value={formInputs[key] || ''}
          onChange={(e) => handleChange('input', e.target.value, key)}
        />
      </div>
    );

    switch (selectedValue) {
      case 'B':
      case 'C': // B和C使用相同表单
        return (
          <>
            {InputRow('agent ID', 'agentId')}
            {InputRow('令牌id', 'tokenId')}
          </>
        );
      case 'D':
        return (
          <>
            {InputRow('agent ID', 'agentId')}
            {InputRow('Key', 'key')}
          </>
        );
      case 'A':
      default:
        return <div style={{ padding: 16 }}></div>;
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      <Radio.Group 
        onChange={(e) => handleChange('select', e.target.value)} 
        value={selectedValue}
      >
        <Radio value="A">无</Radio>
        <Radio value="B">LabelGBT</Radio>
        <Radio value="C">coze</Radio>
        <Radio value="D">千问</Radio>
      </Radio.Group>
      <Divider />
      {renderComponent()}
    </div>
  );
};

export default DynamicFormSection;