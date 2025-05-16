import  { useState } from 'react';
import { Button, Input, Table,  Flex,  Space,Modal, message ,Radio,  Divider} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableColumnsType, TableProps } from 'antd';
import DynamicFormSection from '../components/DynamicFormSection'


type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];
//需要等待接口确定了来定义数据类型和数据结构
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}



const KnowledgeSearch=()=>{
    const handleImportClick = () => {
      console.log('导入队列按钮被点击');
      // 这里可以添加实际的导入逻辑
      setDataSource([])
    };
    //表格相关
    const columns: TableColumnsType<DataType> = [
      { title: '队列ID', dataIndex: 'name' },
      { title: '队列名称', dataIndex: 'address' },
      { title: '知识库', dataIndex: 'address' },
      { title: '联网总结', dataIndex: 'address' },
      { title: '创建人', dataIndex: 'address' },
      { title: '创建时间', dataIndex: 'address' },
      { title: '修改人', dataIndex: 'address' },
      { title: '修改时间', dataIndex: 'address' },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
             <a onClick={() => handleEdit(record)}>修改</a>
            <a onClick={() => handleDelete(record)}>删除</a>
          </Space>
        ),
      },
      
    ];
    const handleEdit=(record: DataType) =>{
      setModal2Open(true)
    }
    const handleDelete = (record: DataType) => {
      Modal.confirm({
          title: `确定删除 ${record.key} 吗？`,
          onOk: () => {
            setDataSource(prev => prev.filter(item => item.key !== record.key));
            message.success('删除成功');
          },
        });
    };
    //修改弹窗数据

    const KonwInputValuesChange = (values: Record<string, string>) => {
      console.log('知识插件输入内容变化:', values);
    };
    const internetInputValuesChange = (values: Record<string, string>) => {
      console.log('物联网输入内容变化:', values);
    }
    const [modal2Open, setModal2Open] = useState(false);
    
    const [dataSource, setDataSource] = useState<DataType[]>(
      Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      }))
    );
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
      setLoading(true);
      // ajax request after empty completing
      setTimeout(() => {
        setSelectedRowKeys([]);
        setLoading(false);
      }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
  
    const rowSelection: TableRowSelection<DataType> = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return(
        <div style={{ padding: 24 }}>
        {/* 第一行 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>能力配置</h2>
          <Button type="primary" onClick={handleImportClick}>导入队列</Button>
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

        <Flex gap="middle" vertical>
        <Flex align="center" gap="middle">
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </Flex>
      <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    </Flex>
    <Modal
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
      transitionName="" // 去除进入动画
      maskTransitionName="" // 去除遮罩动画
      modalRender={(modal) => (
        <div style={{ position: 'fixed', right: 0, bottom: 0,  width: 800,  }}>
          {modal}
        </div>
      )}
    >
      <div style={{height:'800px'}}>
      <h2>插件编辑</h2>
      <p style={{color:'red'}}>已选XXXX个队列</p>
      <p style={{color:'red'}}>本次编辑默认覆盖之前的配置，请谨慎配置</p>

      <DynamicFormSection 
  title="知识库来源"
  onChange={(values) => {
    console.log('选中值:', values.selectedValue);
    console.log('输入内容:', values.inputs);
  }}
/>
<DynamicFormSection 
  title="联网总结来源"
  onChange={(values) => {
    console.log('选中值:', values.selectedValue);
    console.log('输入内容:', values.inputs);
  }}
/>


      </div>
  
   </Modal>
      </div>
    )
}
export default KnowledgeSearch