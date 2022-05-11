import React from "react";

import { Table,  Space } from 'antd';

const columns = [
  {
    title: 'User',
    dataIndex: 'User',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'Username',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  
  {
    title: 'Email',
    dataIndex: 'Emailaddress',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Joined At',
    dataIndex: 'JoinedAt',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  
  
];

const data = [
  {
    
    key: '1',
    User:'imran',
    Username: 'John Brown',
    Emailaddress:'imran@gmail.com',
    phone:'025245245',
    JoinedAt:'654',
    age: 32,
    address: 'New York No. 1 Lake Park',
   
  },
  {
    key: '2',
    User:'imran',
    Username: 'John Brown',
    Emailaddress:'imran@gmail.com',
    phone:'025245245',
    JoinedAt:'654',
    age: 32,
    address: 'New York No. 1 Lake Park',
   
   
  },
  {
    key: '3',
    User:'imran',
    Username: 'John Brown',
    Emailaddress:'imran@gmail.com',
    phone:'025245245',
    JoinedAt:'654',
    age: 32,
    address: 'New York No. 1 Lake Park',
   

  },
];

export default () => <Table columns={columns} dataSource={data} />;


//export default ActiveUsers;
