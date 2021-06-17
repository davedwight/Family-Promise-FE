import React, { useState } from 'react';
import Table from 'antd/lib/table/Table';

function DashboardServiceTable() {
  // const [data, setData] = useState([]);

  const data = [
    {
      service: 'Metrocard',
      cost: 2.0,
      usagerate: '100%',
    },
    {
      service: 'Lunch',
      cost: 5.0,
      usagerate: '10%',
    },
  ];

  const column = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'key',
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'key',
    },
    {
      title: 'Usage Rate',
      dataIndex: 'usagerate',
      key: 'key',
    },
  ];

  return (
    <div>
      <h1>Working</h1>
      <Table dataSource={data} columns={column} />
    </div>
  );
}

export default DashboardServiceTable;
