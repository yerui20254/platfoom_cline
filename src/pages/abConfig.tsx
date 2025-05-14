import LayOut from "./layOut";
import { Form, Input, Radio, Checkbox, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export interface AbilityInfo {
    abilityName: string;
    abilityDescription: string;
    capabilityProvision: string;
    instructionDocument: string;
    taskType: string;
    abilityDirection: string;
    businessDirection: string;
    functionIntroduction: string;
  }

const toolOptions = ['agent', '代码接口', '插件', '模板'];
const taskOptions = ['文本', '图片', '视频', '音频'];
const abilityOptions = ['文本理解', '视频理解', '图片理解', '知识库', '意图识别', '信息提取', '属性判断', '错别字识别', '其他'];
const businessOptions = ['不限', '直播', '电商', '生服', '安全', '搜索', '抖音生态', '垂直'];

const AbConfig =()=>{
    const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('提交数据:', values);
    message.success('提交成功');
  };
    return (<>
    <LayOut>
        <div style={{ marginLeft: '30px' }}><h2>能力配置</h2></div>
        <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{ maxWidth: 800, marginLeft: '40px', padding: 24, background: '#fff', borderRadius: 8 }}
    >
      {/* 工具类型 */}
      <Form.Item label="工具类型" name="toolType" rules={[{ required: true, message: '请选择工具类型' }]}>
        <Radio.Group>
          {toolOptions.map((option) => (
            <Radio key={option} value={option}>{option}</Radio>
          ))}
        </Radio.Group>
      </Form.Item>

      {/* 能力名称 */}
      <Form.Item label="能力名称" name="abilityName" rules={[{ required: true, message: '请输入能力名称' }]}>
        <Input placeholder="请输入能力名称" />
      </Form.Item>

      {/* 能力描述 */}
      <Form.Item label="能力描述" name="abilityDescription" rules={[{ required: true, message: '请输入能力描述' }]}>
        <TextArea placeholder="请输入能力描述" rows={3} />
      </Form.Item>

      {/* 能力提供 */}
      <Form.Item label="能力提供" name="capabilityProvision" rules={[{ required: true, message: '请输入能力提供方' }]}>
        <Input placeholder="请输入能力提供方" />
      </Form.Item>

      {/* 说明文档（选填） */}
      <Form.Item label="说明文档（选填）" name="instructionDocument">
        <Input placeholder="请输入说明文档链接或内容" />
      </Form.Item>

      {/* 任务类型 */}
      <Form.Item label="任务类型" name="taskType" rules={[{ required: true, message: '请选择任务类型' }]}>
        <Checkbox.Group options={taskOptions} />
      </Form.Item>

      {/* 能力方向 */}
      <Form.Item label="能力方向" name="abilityDirection" rules={[{ required: true, message: '请选择能力方向' }]}>
        <Checkbox.Group options={abilityOptions} />
      </Form.Item>

      {/* 业务方向 */}
      <Form.Item label="业务方向" name="businessDirection" rules={[{ required: true, message: '请选择业务方向' }]}>
        <Checkbox.Group options={businessOptions} />
      </Form.Item>

      {/* 上传 */}
      <Form.Item label="业务介绍：上传图片/视频/音频" name="upload">
        <Upload beforeUpload={() => false} multiple>
          <Button icon={<UploadOutlined />}>点击上传</Button>
        </Upload>
      </Form.Item>

      {/* 操作按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>提交</Button>
        <Button onClick={() => form.resetFields()}>重置</Button>
      </Form.Item>
       </Form>
    </LayOut>
    </>)
}
export default AbConfig 

