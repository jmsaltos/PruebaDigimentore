import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import MenuPerfil from './components/MenuPerfil';

function App() {
  const { Item } = Form;
  const { Password } = Input;
  const [verif, setVerif] = useState(false);
  const [user, setUser] = useState("");

  const formSuccess = (datos) => {
    let nm = datos.username;
    let nme = nm.charAt(0).toUpperCase() + nm.slice(1);
    setUser(nme);
    setVerif(true);
  }
  const formFailed = (error) => {
    console.log("Error: ", error);
  }
  const formItemLayout = {
    labelCol:{
      xs:{
        span:12,
      },
      sm:{
        span:8,
      },
    },
    wrapperCol:{
      xs: {
        span: 4,
      },
      sm: {
        span: 20,
      },
    },
  };

  
  return (
    <div>
      {
        !verif &&
        <div className="containerLogin"> 
          <Row>
            <Col xs={1} sm={2} md={6} lg={7} >
            </Col>
          </Row>
          <Form name="formulario" initialValues={{ recordar: true }}
            onFinish={formSuccess}
            onFinishFailed={formFailed}
            {...formItemLayout}
          >
            <Item label="Usuario"
              name="username"
              rules={[{
                required: true,
                message: "Es necesario el nombre de usuario"
              }]}>
              <Input />
            </Item>
            <Item label="Contraseña"
              name="password"
              rules={[{
                required: true,
                message: "Contraseña Inválida."
              }]}>
              <Password />
            </Item>
            <Item name="recordar" valuePropName="checked">
              <Checkbox>Recordar Usuario</Checkbox>
            </Item>
            <Button type="primary" htmlType="submit" style={{width:"100%"}}>Iniciar Sesión</Button>
          </Form>
        </div>
      }
      {
        <div>
          {
            verif &&
            <div>
              {/* <p>Bienvenido {user}</p> */}
              <MenuPerfil usernm={user}/>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default App;
