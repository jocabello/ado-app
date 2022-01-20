import React, { useState } from 'react'

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { startAddSite } from '../../state/actions/sitesActions';

export const SitesModal = () => {

    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
  
    const onCreate = (values) => {
    //   console.log('Received values of form: ', values);
      dispatch(startAddSite(values));
      setVisible(false);
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
                Crear Obra
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
      </div>
    )
}

const { Option } = Select;
const regionData = ['Santiago', 'Valparaiso'];
const comunaData = {
    Santiago: ['San Bernardo', 'Providencia', 'Santiago'],
    Valparaiso: ['Algarrobo', 'Viña del Mar', 'Curauma'],
};

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

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
        title="Crear nueva Obra"
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
                    name="name"
                    label="Nombre"
                    rules={[{required: true, message: 'El nombre es obligatorio'}]}
                >
                    <Input placeholder="Nombre"/>
                </Form.Item>

                <Form.Item
                    name="streetName"
                    label="Dirección"
                    rules={[{required: true, message: 'La dirección es obligatoria'}]}
                >
                    <Input placeholder="Ejemplo: Avenida Las Torres 431 depto 505-A"/>
                </Form.Item>
                

                {/* <Form.Item 
                    label="Región / Comuna"
                    >
                        <Input.Group compact>
                            <Form.Item
                                rules={[{required: true,message: 'Región y comuna son obligatorios',},]}
                                // // name="regionComuna"
                            >
                                <Select 
                                    name="region"
                                    defaultValue={regionData[0]}
                                    style={{ width: 120 }}
                                    onChange={handleProvinceChange}
                                    // placeholder="Región"
                                >
                                    {regionData.map(province => (
                                    <Option key={province}>{province}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                                <Select 
                                    name="comuna"
                                    style={{ width: 120 }}
                                    value={secondCity}
                                    onChange={onSecondCityChange}
                                    // placeholder="Comuna"
                                >
                                    {cities.map(city => (
                                    <Option key={city}>{city}</Option>
                                    ))}
                                </Select>
                            <Form.Item>

                            </Form.Item>
                        </Input.Group>
                </Form.Item> */}

                <Form.Item label="Región / Comuna">
                    <Input.Group compact>
                    <Form.Item
                        name="region"
                        noStyle
                        rules={[{ required: true, message: 'La región es requerida' }]}
                    >
                        <Select 
                            
                            // defaultValue={regionData[0]}
                            style={{ width: 120 }}
                            onChange={handleProvinceChange}
                            placeholder="Región"
                        >
                            {regionData.map(province => (
                            <Option key={province}>{province}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="comuna"
                        noStyle
                        rules={[{ required: true, message: 'La comuna es obligatoria' }]}
                    >
                        <Select 
                                    
                                    style={{ width: 120 }}
                                    value={secondCity}
                                    onChange={onSecondCityChange}
                                    placeholder="Comuna"
                                >
                                    {cities.map(city => (
                                    <Option key={city}>{city}</Option>
                                    ))}
                                </Select>
                    </Form.Item>
                    </Input.Group>
                </Form.Item>


                <Form.Item
                    name="description"
                    label="Descripción"
                >
                    <Input placeholder="Descripción de la obra"/>
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