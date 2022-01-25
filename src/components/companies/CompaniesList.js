
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { CompanyModal } from "./CompanyModal"


export const CompaniesList = () => {

    const companies = useSelector(state => state.companies);

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'RUT',
            dataIndex: 'rutId',
            key: 'rutId',
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
            key: "uid",
            render: (address) => <span>{address.streetName + ", " + address.comuna + ", " + address.region}</span>
        }
    ];

    return (
        <div>
            <CompanyModal />
            <Table columns={columns} dataSource={companies} rowKey="uid"/>
        </div>
    )
}