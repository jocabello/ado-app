import React from 'react'

import { Table, Tag, Statistic, Row, Col  } from 'antd';
import { useSelector } from 'react-redux';

import { EmployeeModal } from './EmployeeModal';

export const EmployeeList = () => {

    const { Column } = Table;

    const employees = useSelector(state => state.employees)
    
    return (

        <div>
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
                <Column title="Nombres" dataIndex="names" key="names" />
                <Column title="Apelllidos" dataIndex="lastNames" key="lastNames" />
                <Column 
                    title="Edad"
                    dataIndex="dob"
                    key="dob"

                />
                <Column title="RUT" dataIndex="rutId" key="rutId" />
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
            </Table>

        </div>
    )
}
