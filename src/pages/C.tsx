import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { ThoughtChain } from '@ant-design/x';
import type { ThoughtChainProps } from '@ant-design/x';

const ThoughtChainDemo = () => {
  const [steps, setSteps] = useState<ThoughtChainProps['items']>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001/stream'); // 🔁 替换成你的后端 WebSocket 地址

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data); // 假设每条数据是一个 JSON 对象
        const newStep = {
          title: data.title,
          description: data.description,
          extra: <Button type="text" icon={<MoreOutlined style={{ color: 'green' }} />} />,
        };
        setSteps((prev) => [...prev, newStep]);
      } catch (err) {
        console.error('数据解析失败', err);
      }
    };

    ws.onerror = (err) => {
      console.error('WebSocket 连接出错', err);
    };

    ws.onclose = () => {
      console.log('WebSocket 连接已关闭');
    };

    return () => {
      ws.close(); // 🔐 清理连接
    };
  }, []);

  return (
    <Card title="🧠 实时 AI 思考过程" style={{ width: 600, margin: '0 auto' }}>
      <ThoughtChain items={steps} />
    </Card>
  );
};

export default ThoughtChainDemo;

