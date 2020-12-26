<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="action" slot-scope="text, record">
      <a @click="toDetail(record.id)">Detail</a>
    </span>
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'Device Name',
    dataIndex: 'deviceName',
    key: 'deviceName'
  },
  {
    title: 'Brand',
    dataIndex: 'deviceBrand',
    key: 'deviceBrand'
  },
  {
    title: 'Model',
    dataIndex: 'deviceModel',
    key: 'deviceModel'
  },
  {
    title: 'IP Address',
    dataIndex: 'deviceIP',
    key: 'deviceIP'
  },
  {
    title: 'Operation System',
    dataIndex: 'deviceOS',
    key: 'deviceOS'
  },
  {
    title: 'Is Safe',
    dataIndex: 'isSafe',
    key: 'isSafe'
  },
  {
    title: 'Last Scan',
    dataIndex: 'LastScan',
    key: 'LastScan'
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    deviceName: 'Cathy-Xus-MacBook-Pro',
    deviceBrand: 'Apple',
    deviceModel: 'MacBook Pro',
    deviceIP: '10.64.163.204',
    deviceOS: 'macOS',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '2',
    deviceName: 'benbens-Mac-mini',
    deviceBrand: 'Apple',
    deviceModel: 'Mac Mini',
    deviceIP: '10.64.167.174',
    deviceOS: 'macOS',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '3',
    deviceName: 'nj-jerry-ou-mac',
    deviceBrand: 'Apple',
    deviceModel: 'iMac',
    deviceIP: '10.64.166.82',
    deviceOS: 'macOS',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '4',
    deviceName: 'nj-jerry-ou-mac',
    deviceBrand: 'Apple',
    deviceModel: 'iMac',
    deviceIP: '10.64.166.82',
    deviceOS: 'macOS',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '5',
    deviceName: 'Asus Router',
    deviceBrand: 'Asus',
    deviceModel: 'RT-AC86U',
    deviceIP: '10.64.166.1',
    deviceOS: 'linux',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '6',
    deviceName: 'Netgear Router',
    deviceBrand: 'Netgear',
    deviceModel: 'R7000',
    deviceIP: '10.64.166.231',
    deviceOS: 'linux',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  },
  {
    key: '7',
    deviceName: 'Xerox Printer',
    deviceBrand: 'Xerox',
    deviceModel: '',
    deviceIP: '10.64.166.54',
    deviceOS: 'linux',
    isSafe: 'Uncheck',
    LastScan: '2020-12-21T10:35:31.000Z'
  }
]

export default {
  name: 'DeviceList',
  data () {
    return {
      data,
      columns
    }
  },
  methods: {
    toDetail () {
      this.$emit('toDetail', { 'a': 'b' })
    }
  }
}
</script>
