
import { Table } from 'antd';
// import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { ContractModal } from "./ContractModal";

export const ContractsList = () => {

    // const API_URL = 'http://localhost:5000';


    // const generatePDF = async () => {
    //     return await axios.get(`${API_URL}/api/generatepdf`, {
    //         responseType: 'arraybuffer',
    //         headers: {
    //           'Accept': 'application/pdf'
    //         }
    //     })
    // }

    // const doTheThing = () => {
    //   generatePDF()

    //   window.open(generatePDF());
    // }

    const contracts = JSON.parse(JSON.stringify(useSelector(state => state.contracts)));
    const employees = useSelector(state => state.employees);
    const sites = useSelector(state => state.sites);
    const companies = useSelector(state => state.companies);

    contracts.forEach(contract => {
        contract.employeeName = employees.find(employee => employee.uid === contract.employeeUid).names + ' ' + employees.find(employee => employee.uid === contract.employeeUid).lastNames
        contract.siteName = sites.find(site => site.uid === contract.siteUid).name
        contract.companyName = companies.find(company => company.uid === contract.companyUid).name
    });

    const columns = [
        {
            title: 'Trabajador',
            dataIndex: 'employeeName',
            key: 'employeeName',
        },
        {
            title: 'Obra',
            dataIndex: 'siteName',
            key: 'siteName',
        },
        {
            title: 'Empresa',
            dataIndex: 'companyName',
            key: 'companyName'
        },
    ];



    return (
      <div>
      <ContractModal />
      <Table columns={columns} dataSource={contracts} rowKey="uid"/>
      </div>
    )
}


