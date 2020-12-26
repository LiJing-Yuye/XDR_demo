<template>
  <a-table :columns="columns" :data-source="data" :row-selection="rowSelection">
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'Endpoint Name',
    dataIndex: 'endpointName',
    key: 'endpointName'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'IP Address',
    dataIndex: 'deviceIP',
    key: 'deviceIP'
  },
  {
    title: 'Operation System',
    dataIndex: 'os',
    key: 'os'
  }
]

const data = [
  {
    key: '1',
    endpointName: 'nj-zhonglin-mac',
    status: 'Available',
    deviceIP: '10.64.163.204',
    os: 'macOS Catalina 10.15'
  },
  {
    key: '2',
    endpointName: 'nj-neil-shao-mac',
    status: 'Available',
    deviceIP: '10.64.163.205',
    os: 'macOS Catalina 10.15'
  },
  {
    key: '3',
    endpointName: 'nj-xiangrong-mac',
    status: 'Available',
    deviceIP: '10.64.163.206',
    os: 'macOS Catalina 10.15'
  },
  {
    key: '4',
    endpointName: 'nj-elsa-mac',
    status: 'Available',
    deviceIP: '10.64.163.207',
    os: 'macOS Catalina 10.16'
  },
  {
    key: '5',
    endpointName: 'nj-leo-mac',
    status: 'Available',
    deviceIP: '10.64.163.208',
    os: 'macOS Catalina 10.16'
  }
]

export default {
  name: 'EndpointList',
  data () {
    return {
      data,
      columns,
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          window.localStorage.setItem('selectedRows', JSON.stringify(selectedRows))
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows)
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows)
        }
      }
    }
  },
  activated () {
    console.log('activated')
  }
}
</script>
