import './App.css';
import { Button } from "antd"
import { AppstoreAddOutlined, DeleteFilled } from "@ant-design/icons"
import Sidebar from "./Sidebar"
import { toggleDrawer } from './controller/features/Drawer/DrawerSlice';
import {useSelector, useDispatch} from "react-redux"
import AddDrawer from './AddDrawer';
function App()
{
  const { visible } = useSelector(state => state.drawer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Sidebar>
      { visible && <AddDrawer/> }
      <div className='actions'
        style={{display: 'flex' , width: "100%", margin: "2rem auto"}}>
        <Button
          type='primary'
          icon={<AppstoreAddOutlined />}
            size="large"
            onClick={()=> dispatch(toggleDrawer())}
        >
          Add New Contact
        </Button>
        <Button
          type='primary'
          icon={<DeleteFilled />}
            size="large"
            danger
        >
          Delete All Contacts
        </Button>
      </div>

      
      </Sidebar>
     
       
    </div>
  );
}

export default App;
