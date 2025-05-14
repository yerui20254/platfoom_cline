import React, { useState } from 'react';
import { Button, Input, Table, Row, Col, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
  }
  
  const data: DataType[] = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London' },
    { key: '3', name: 'Joe Black', age: 28, address: 'Sidney' },
  ];
  
  const columns: ColumnsType<DataType> = [
    { title: '队列ID', dataIndex: 'name', key: 'name' },
    { title: '队列名称', dataIndex: 'name', key: 'name' },

    { title: '知识库', dataIndex: 'age', key: 'age' },
    { title: '联网总结', dataIndex: 'address', key: 'address' },
    { title: '创建人', dataIndex: 'address', key: 'address' },
    { title: '创建时间', dataIndex: 'address', key: 'address' },
    { title: '修改人', dataIndex: 'address', key: 'address' },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a onClick={() => handleEdit(record)}>修改</a>
            <a onClick={() => handleDelete(record)}>删除</a>
          </Space>
        ),
      },
  ];
  const handleEdit = ()=>{}
  const handleDelete = ()=>{}
const KnowledgeSearch=()=>{

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const rowSelection = {
      selectedRowKeys,
      onChange: (newSelectedKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedKeys);
      },
    };
  
    return(
        <div style={{ padding: 24 }}>
        {/* 第一行 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>能力配置</h2>
          <Button type="primary">导入队列</Button>
          </div>
        {/* 第二行 */}    
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>队列名称：</span>
          <Input placeholder="输入框1" style={{ width: '200px' }} />
          <span>队列Id</span>
          <Input placeholder="输入框2" style={{ width: '200px' }} />           
          <Button type="primary">选择</Button>
          <Button>一键筛选配置</Button>
         </div>
  
        {/* 第三行：表格 */}

       
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    )
}
export default KnowledgeSearch