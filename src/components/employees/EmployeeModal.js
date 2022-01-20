import React, { useState } from 'react'

import { Button, Modal, Form, Input, Select, DatePicker, Row, Col } from 'antd';
import { startAddEmployee } from '../../state/actions/employeesActions';
import { useDispatch, useSelector } from 'react-redux';

export const EmployeeModal = () => {
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
  
    const onCreate = (values) => {
    //   console.log('Received values of form: ', values);
      dispatch(startAddEmployee(values));
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

    const [...name] = useSelector(state => state.sites)
    const arrNames = name.map(site => site.name);
    const sitesNames = arrNames.map(name => (<Option key={name}>{name}</Option>));
    
    return (
        <Modal
        visible={visible}
        title="Crear nuevo Trabajador"
        okText="Crear"
        width={1000}
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
                <Row gutter={[16, 16]}>
                    <Col span={12} >
                        <Form.Item
                            name="names"
                            label="Nombres"
                            rules={[{required: true, message: 'Al menos un nombre es obligatorio'}]}
                        >
                            <Input placeholder="Nombres"/>
                        </Form.Item>

                        <Form.Item
                            name="lastNames"
                            label="Apellidos"
                            rules={[{required: true,message: 'Al menos un apellido es obligatorio',},]}
                        >
                            <Input placeholder="Apellidos"/>
                        </Form.Item>

                        <Form.Item
                            name="rutId"
                            label="RUT"
                            rules={[{required: true,message: 'El RUT es obligatorio',},]}
                        >
                            <Input placeholder="ej: 12345678-9"/>
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
                            <Select
                                placeholder="Seleccionar estado civil"
                            >
                            <Select.Option value="Soltero">Soltero(a)</Select.Option>
                            <Select.Option value="Casado">Casado(a)</Select.Option>
                            <Select.Option value="Divorciado">Divociado(a)</Select.Option>
                            <Select.Option value="Viudo">Viudo(a)</Select.Option>
                            </Select>
                        </Form.Item>



                        <Form.Item
                            name="streetName"
                            label="Dirección"
                            rules={[{required: true, message: 'La dirección es obligatoria'}]}
                        >
                            <Input placeholder="Ejemplo: Avenida Las Torres 431 depto 505-A"/>
                        </Form.Item>







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



















                    </Col>

                    <Col span={12} >
                        <Form.Item
                            name="nationality"
                            label="Nacionalidad"
                            rules={[{required: true,message: 'La nacionalidad es obligatoria',},]}
                        >
                            <Select
                                showSearch
                                placeholder="Seleccionar nacionalidad"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                            <Select.Option value="Chilena">Chilena</Select.Option>
                            <Select.Option value="Peruana">Peruana</Select.Option>
                            <Select.Option value="Colombiana">Colombiana</Select.Option>
                            <Select.Option value="Venezolana">Venezolana</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="heathCoverage"
                            label="Sistema de salud"
                            rules={[{required: true,message: 'El sistema de salud es obligatorio',},]}
                        >
                            <Select
                                showSearch
                                placeholder="Seleccionar sistema de salud"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                            <Select.Option value="Fonasa">Fonasa</Select.Option>
                            <Select.Option value="Isapre">Isapre</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="pensionSystem"
                            label="Sistema previsional"
                            rules={[{required: true,message: 'El sistema previsional es obligatorio',},]}
                        >
                            <Select
                                showSearch
                                placeholder="Seleccionar sistema previsional"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                            <Select.Option value="Capital">Capital</Select.Option>
                            <Select.Option value="Cuprum">Cuprum</Select.Option>
                            <Select.Option value="Habitat">Habitat</Select.Option>
                            <Select.Option value="Modelo">Modelo</Select.Option>
                            <Select.Option value="Planvital">Planvital</Select.Option>
                            <Select.Option value="Provida">Provida</Select.Option>
                            <Select.Option value="Uno">Uno</Select.Option>
                            <Select.Option value="IPS">IPS</Select.Option>
                            <Select.Option value="DIPRECA">DIPRECA</Select.Option>
                            <Select.Option value="CAPREDENA">CAPREDENA</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="personalContact"
                            label="Número de teléfono personal"
                        >
                            <Input style={{ width: '50%' }} placeholder="Número" addonBefore="+569" />
                        </Form.Item>
                        
                        <Form.Item
                            name="emergencyContact"
                            label="Número de contacto en emergencia"
                        >
                            <Input style={{ width: '50%' }} placeholder="Número" addonBefore="+569" />
                        </Form.Item>

                        <Form.Item
                            name="siteTag"
                            label="Obras relacionadas"
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                            >
                                {sitesNames}
                            </Select>
                        </Form.Item>
                    </Col>
                    
                </Row>

            </Form>
        </Modal>
    );
};

