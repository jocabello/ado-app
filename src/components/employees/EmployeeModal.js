import React, { useState } from 'react'

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { startAddEmployee } from '../../state/actions/employeesActions';
import { useDispatch } from 'react-redux';

export const EmployeeModal = () => {
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
  
    const onCreate = (values) => {
    //   console.log('Received values of form: ', values);
      dispatch(startAddEmployee(values));
    //   setVisible(false);
    };
  
    return (
      <div>
        <Button
          type="primary"
          style={{marginBottom: "10px"}}
          onClick={() => {
            setVisible(true);
          }}
        >
          Crear Trabajador
        </Button>
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    );
};

const { Option } = Select;
const regionData = ['Santiago', 'Valparaiso'];
const comunaData = {
    Santiago: ['San Bernardo', 'Providencia', 'Santiago'],
    Valparaiso: ['Algarrobo', 'Viña del Mar', 'Curauma'],
};

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const [form] = Form.useForm();

    const [cities, setCities] = React.useState(comunaData[regionData[0]]);
    const [secondCity, setSecondCity] = React.useState(comunaData[regionData[0]][0]);

    const handleProvinceChange = value => {
        setCities(comunaData[value]);
        setSecondCity(comunaData[value][0]);
    };

    const onSecondCityChange = value => {
        setSecondCity(value);
    };

    return (
        <Modal
        visible={visible}
        title="Crear nuevo Trabajador"
        okText="Crear"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
            form
            .validateFields()
            .then((values) => {
                form.resetFields();
                onCreate(values);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
        }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                modifier: 'public',
                }}
            >
                <Form.Item
                    name="names"
                    label="Nombres"
                    rules={[{required: true, message: 'Al menos un nombre es obligatorio'}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastNames"
                    label="Apellidos"
                    rules={[{required: true,message: 'Al menos un apellido es obligatorio',},]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="rutId"
                    label="RUT"
                    rules={[{required: true,message: 'El RUT es obligatorio',},]}
                >
                    <Input />
                </Form.Item>

                <Form.Item 
                    label="Fecha de nacimiento"
                    name="dob"
                    rules={[{required: true,message: 'La fecha de nacimiento obligatoria',},]}
                >
                    <DatePicker
                        format={dateFormatList} 
                    />
                
                </Form.Item>

                <Form.Item
                    name="maritalStatus"
                    label="Estado civil"
                    rules={[{required: true,message: 'El estado civil obligatorio',},]}
                >
                    <Select>
                    <Select.Option value="single">Soltero(a)</Select.Option>
                    <Select.Option value="married">Casado(a)</Select.Option>
                    <Select.Option value="divorced">Divociado(a)</Select.Option>
                    <Select.Option value="widowed">Viudo(a)</Select.Option>
                    </Select>
                </Form.Item>



                <Form.Item
                    name="streetName"
                    label="Dirección"
                    rules={[{required: true, message: 'La dirección es obligatoria'}]}
                >
                    <Input placeholder="Ejemplo: Avenida Las Torres 431 depto 505-A"/>
                </Form.Item>

                <Form.Item 
                    label="Región / Comuna"
                    // name="regionComuna"
                    rules={[{required: true,message: 'Región y comuna son obligatorios',},]}
                >
                    <Select name="region" defaultValue={regionData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                        {regionData.map(province => (
                        <Option key={province}>{province}</Option>
                        ))}
                    </Select>
                    <Select name="comuna" style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                        {cities.map(city => (
                        <Option key={city}>{city}</Option>
                        ))}
                    </Select>
                </Form.Item>


                {/* <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item> */}

            </Form>
        </Modal>
    );
};

