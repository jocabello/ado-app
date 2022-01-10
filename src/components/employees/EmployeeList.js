import React from 'react'

import { Table, Tag, Statistic, Row, Col  } from 'antd';
import { EmployeeModal } from './EmployeeModal';

export const EmployeeList = () => {

    const { Column } = Table;

    const employees = [
        {
            key: '342f323f3fn5ing0f',
            uid: '3af23f23ffn5ing0f',
            names: 'Andrián Roberto',
            lastNames: 'Martinex Lara',
            rutId: '22.334.334-1',
            dob: '5 dic, 1978',
            address: {
                streetName: 'Av. Mata 8733',
                comuna: 'Santiago',
                region: 'Santiago'
            },
            maritalStatus: 'Casado',
            heathCoverage: 'Fonasa',
            pensionSystem: 'Modelo',
            nationality: 'Chilena',
            personalContact: '85729456',
            emergencyContact: '93847134',
            siteTag: ['Cine Mall Plaza Oeste']
        },
        {
            key: '343wkmf3i3fn5ing0f',
            uid: '343wkmf3i3fn5ing0f',
            names: 'Le Pipo',
            lastNames: 'Ramirez Figueroa',
            rutId: '12.345.678-9',
            dob: '11 sept, 1980',
            address: {
                streetName: 'Pje Las Calilas 123-A',
                comuna: 'San Bernardo',
                region: 'Santiago'
            },
            maritalStatus: 'Soltero',
            heathCoverage: 'Fonasa',
            pensionSystem: 'Plan Vital',
            nationality: 'Chilena',
            personalContact: '85452558',
            emergencyContact: '85371515',
            siteTag: ['Cine Mall Plaza Oeste', 'Adicionales Lo Vial 2']
        },
    ];

    return (

        <div>
            {/* <Button style={{"marginBottom": "10px"}} type="primary">Agregar Trabajador</Button> */}
            <EmployeeModal />
            <Table 
                dataSource={employees}
                expandable={{
                    expandedRowRender: record => (
                        <>
                            <Row gutter={[8, 8]}>
                                <Col span={4}>
                                <Statistic title="Nacionalidad" value={record.nationality} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Estado civil" value={record.maritalStatus} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Fecha nacimiento" value={record.dob} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Comuna" value={record.address.comuna} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Region" value={record.address.region} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Sistema Salud" value={record.heathCoverage} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Previsión" value={record.pensionSystem} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Fono personal" value={record.personalContact} />
                                </Col>
                                <Col span={4}>
                                <Statistic title="Fono emergencia" value={record.emergencyContact} />
                                </Col>



                            </Row>

















                        </>
                    )
                  }}
            >
                {/* <ColumnGroup>
                </ColumnGroup> */}
                <Column title="Nombres" dataIndex="names" key="names" />
                <Column title="Apelllidos" dataIndex="lastNames" key="lastNames" />
                <Column title="Edad" dataIndex="dob" key="dob" />
                <Column title="RUT" dataIndex="rutId" key="rutId" />
                {/* <Column title="Dirección" dataIndex="address.streetName" key="lastName" /> */}
                <Column
                    title="Obras"
                    dataIndex="siteTag"
                    key="siteTag"
                    render={siteTag => (
                        <>
                        {
                            siteTag.map(tag => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))
                        }
                        </>
                    )}
                />
                {/* <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                        <a href='/'>Invite {record.lastName}</a>
                        <a href='/'>Delete</a>
                        </Space>
                    )}
                /> */}
            </Table>

        </div>
    )
}
