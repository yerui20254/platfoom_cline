import React, { useState } from 'react';
import LayOut from "./layOut"
import { Button,Input,Select,Space, Table,Modal, message ,  } from 'antd';
import {SearchOutlined} from  '@ant-design/icons'
import type { SelectProps ,TableProps,PopconfirmProps } from 'antd';
import { useNavigate } from 'react-router-dom';



const AbilityConfig=()=>{
    //名称类型的处理
    const options: SelectProps['options'] = [];
    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
      };
      const shujuleixing=['文本','图片','音频','视频']
        for (let i = 0; i < 4; i++) {
        options.push({
            value: shujuleixing[i] ,
            label: shujuleixing[i] ,
        });
        }
    //表格结果的处理
   
    interface DataType {
        key:string;
        能力名称: string;
        工具类型: string;
        能力测试: string;
        创建人: string;
        创建时间: string;
        修改人: string;
        修改时间: string;
      }
      
      const columns: TableProps<DataType>['columns'] = [
        {
          title: '能力名称',
          dataIndex: '能力名称',
          key: '能力名称',
        },
        {
          title: '工具类型',
          dataIndex: '工具类型',
          key: '工具类型',
        },
        {
          title: '能力测试',
          dataIndex: '能力测试',
          key: '能力测试',
        },
        {
          title: '创建人',
          dataIndex: '创建人',
          key: '创建人',
        },
        {
          title: '创建时间',
          dataIndex: '创建时间',
          key: '创建时间',
        },
        {
          title: '修改人',
          dataIndex: '修改人',
          key: '修改人',
        },
        {
          title: '修改时间',
          dataIndex: '修改时间',
          key: '修改时间',
        },
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
      
      const[data, setData]  = useState<DataType[]>([
        { key:'1',
          能力名称: '能力 A',
          工具类型: '插件',
          能力测试: '通过',
          创建人: '张三',
          创建时间: '2024-05-01',
          修改人: '李四',
          修改时间: '2024-05-06',
        },
        {  key:'2',
          能力名称: '能力 B',
          工具类型: '模板',
          能力测试: '未测试',
          创建人: '王五',
          创建时间: '2024-04-21',
          修改人: '王五',
          修改时间: '2024-05-02',
        },
      ]);
    
      const handleDelete = (record: DataType) => {
        console.log('sanchu')
        console.log(record)
        Modal.confirm({
            title: `确定删除 ${record.key} 吗？`,
            onOk: () => {
              setData(prev => prev.filter(item => item.key !== record.key));
              message.success('删除成功');
            },
          });
      };
    
      const handleEdit = (record: DataType) => {
        console.log('xiugai')
        console.log(record)
       // message.info(`点击了修改：${record.能力名称}`);
        message.success(`点击了修改：${record.能力名称}`, 3); 
        // 可在这里打开 Modal 并传入 record 进行编辑
      };
 // 新增能力
 const navigate = useNavigate();
 const handleCreate = () => {
  navigate('/abconfig');
};

    return(
    <LayOut>
        <div>
            <div style={{ padding: '10px' }}>
            能力配置
            <Button type="primary" style={{ marginLeft: '10px' }} onClick={handleCreate}>创建能力</Button>
            </div>
            <div style={{ padding: '10px' }}>
            能力名称：<Input prefix={<SearchOutlined />} style={{ width: '20%',  marginLeft: '20px' ,marginRight: '20px' ,}}suffix="" />
            能力类型
        <Select
          defaultValue="文本"
          onChange={handleChange}
          style={{ width: 200 ,marginLeft: '20px' }}
          options={options}
        />
         <Button type="primary" style={{ marginLeft: '30px' }}>查询</Button>
            </div>
            <div>
            <Table<DataType> columns={columns} dataSource={data} />;
            </div>
        </div>
    </LayOut>
    )
}

export default AbilityConfig