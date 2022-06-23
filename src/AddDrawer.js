import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { toggleDrawer } from './controller/features/Drawer/DrawerSlice';
import { useSelector, useDispatch } from 'react-redux';
const { Option } = Select;

const AddDrawer = () => {
//   const [visible, setVisible] = useState(false);

    const { visible } = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  const onClose = ()=>   dispatch(toggleDrawer())


  return (
    <>
      <Drawer
        title="Create a new account"
        width={400}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={() =>
            {
              return (
                dispatch(toggleDrawer())
          
              )
            }}>Cancel</Button>
            <Button  onClick={()=> dispatch(toggleDrawer())} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter first name',
                  },
                ]}
              >
                <Input placeholder="Please enter first name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input placeholder="Please enter last name" />
              </Form.Item>
       
              <Form.Item
                name="portfolioUrl"
                label="Portfolio Link"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  // addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
         
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
              </Form.Item>
         
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default AddDrawer;