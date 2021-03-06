import React from 'react'

import { Table, Tag } from 'antd';
import { SitesModal } from './SitesModal'
import { useSelector } from 'react-redux';

export const SitesList = () => {

    // const { Column } = Table;

    const sites = useSelector(state => state.sites);
    // console.log(sites);
    
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Empresa',
            dataIndex: 'companyTag',
            key: 'companyTag',
            render: (companyTag) => (
                <>
                {
                    companyTag.map(tag => (
                        <Tag color="blue" key={tag}>
                            {tag}
                        </Tag>
                    ))
                }
                </>
            )
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
            key: "uid",
            render: (address) => <span>{address.streetName + ", " + address.comuna + ", " + address.region}</span>
        },
    ];

    return (
        <div>
            <SitesModal />
            <Table columns={columns} dataSource={sites} rowKey="uid"/>
            {/* <Table
                dataSource={sites}
                columns={columns}
                >
                 <Column title="Nombre" dataIndex="name" key="name" />
                 <Column 
                    title="Dirección"
                    key="address.streetName"
                    render={
                        site => (
                            <>
                                {
                                    sites.address.streetName + ", " + 
                                    sites.address.comuna + ", " +
                                    sites.address.region
                                }
                            </>
                        )
                    } 
                />
            </Table> */}    
        </div>
    )
}
