import React, { useState } from 'react'

import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startAddContract } from '../../state/actions/contractsActions';


export const ContractModal = () => {

    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
  
    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      dispatch(startAddContract(values));
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
                Crear Contrato
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
// const regionData = ['Santiago', 'Valparaiso'];
// const comunaData = {
//     Santiago: ['San Bernardo', 'Providencia', 'Santiago'],
//     Valparaiso: ['Algarrobo', 'Viña del Mar', 'Curauma'],
// };

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const [form] = Form.useForm();

    const [...companies] = useSelector(state => state.companies);
    const [...sites] = useSelector(state => state.sites);
    const [...employees] = useSelector(state => state.employees);

    const companiesSelectOptions = companies.map(company => (
        <Option key={company.uid}>{company.name}</Option>
    ));

    const sitesSelectOptions = sites.map(site => (
        <Option key={site.uid}>{site.name}</Option>
    ));

    const employeesSelectOptions = employees.map(employee => (
        <Option key={employee.uid}>{employee.names + ' ' + employee.lastNames}</Option>
    ));

    return (
        <Modal
        visible={visible}
        title="Crear nuevo Contrato"
        okText="Crear"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
            form
            .validateFields()
            .then((values) => {
                if(values.commuteCoverage == null){
                    values.commuteCoverage = '0'
                }
                if(values.lunchCoverage == null){
                    values.lunchCoverage = '0'
                }
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
                    name="selectedCompany"
                    label="Empresa"
                    rules={[{required: true,message: 'La Empresa es obligatoria',},]}
                >
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Seleccionar Empresa"
                    >
                        {companiesSelectOptions}
                    </Select>
                </Form.Item>
                
                <Form.Item
                    name="selectedSite"
                    label="Obra"
                    rules={[{required: true,message: 'La Obra es obligatoria',},]}
                >
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Seleccionar Obra"
                    >
                        {sitesSelectOptions}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="selectedEmployee"
                    label="Trabajador"
                    rules={[{required: true,message: 'El Trabajador es obligatorio',},]}
                >
                    <Select
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Seleccionar Trabajador"
                    >
                        {employeesSelectOptions}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="jobTitle"
                    label="Cargo"
                    rules={[{required: true,message: 'El cargo es obligatorio',},]}
                >
                    <Input placeholder="Ejemplo: Maestro Primera"/>
                </Form.Item>
                
                <Form.Item
                    name="netIncome"
                    label="Sueldo bruto"
                    rules={[{required: true,message: 'El sueldo bruto es obligatorio',},]}
                >
                    <Input placeholder="Sueldo bruto"/>
                </Form.Item>
                
                <Form.Item 
                    label="Fecha inicial del Contrato"
                    name="initialDate"
                    rules={[{required: true,message: 'La fecha inicial es obligatoria',},]}
                >
                    <DatePicker
                        format={dateFormatList} 
                        placeholder="Seleccionar fecha inical"
                        style={{ width: '50%' }}
                    />
                </Form.Item>

                <Form.Item
                    name="commuteCoverage"
                    label="Bono mobilización"
                >
                    <Input placeholder="0" style={{ width: '50%' }}/>
                </Form.Item>
                
                <Form.Item
                    name="lunchCoverage"
                    label="Bono colación"
                >
                    <Input placeholder="0" style={{ width: '50%' }}/>
                </Form.Item>

            </Form>
        </Modal>
    );
};