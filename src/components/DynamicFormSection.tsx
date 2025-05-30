import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react';
import { Radio, Divider, Input } from 'antd';

interface Props {
  title: React.ReactNode;
  onChange?: (values: {
    selectedValue: string;
    inputs: Record<string, string>;
  }) => void;
}

export interface DynamicFormSectionRef {
  getValue: () => {
    selectedValue: string;
    inputs: Record<string, string>;
  };
}

const DynamicFormSection = forwardRef<DynamicFormSectionRef, Props>((props, ref) => {
  const { title, onChange } = props;
  const [selectedValue, setSelectedValue] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [formInputs, setFormInputs] = useState<Record<string, string>>({});

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    getValue: () => ({
      selectedValue,
      inputs: formInputs
    })
  }));

  useEffect(() => {
    onChange?.({ selectedValue, inputs: formInputs });
  }, [selectedValue, formInputs]);

  const handleChange = (
    type: 'select' | 'input',
    value?: any,
    key?: string
  ) => {
    if (type === 'select') {
      setSelectedValue(value as 'A' | 'B' | 'C' | 'D');
      setFormInputs({});
    } else if (type === 'input' && key) {
      setFormInputs((prev) => ({ ...prev, [key]: value || '' }));
    }
  };

  const renderComponent = () => {
    const InputRow = (label: string, key: string) => (
      <div style={{ marginTop: '10px' }}>
        <span
          style={{
            width: '60px',
            display: 'inline-block',
            textAlign: 'right'
          }}
        >
          {label}:
        </span>
        <Input
          style={{ marginLeft: '10px', width: '300px' }}
          value={formInputs[key] || ''}
          onChange={(e) => handleChange('input', e.target.value, key)}
        />
      </div>
    );

    switch (selectedValue) {
      case 'B':
      case 'C':
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
        return <div style={{ padding: 16 }}>无配置</div>;
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
});

export default DynamicFormSection;
