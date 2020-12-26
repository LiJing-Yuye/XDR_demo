<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="text, record">
        <a @click="toDetail(record.id)">Detail</a>
      </span>
    </a-table>

    <a-table :columns="columns" :data-source="data">
      <span slot="action" slot-scope="text, record">
        <a @click="toDetail(record.id)">Detail</a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Port Number',
    dataIndex: 'portNumber',
    key: 'portNumber'
  },
  {
    title: 'Protocol',
    dataIndex: 'protocol',
    key: 'protocol'
  },
  {
    title: 'Is Safe',
    dataIndex: 'isSafe',
    key: 'isSafe'
  }
]

const data = [
  {
    key: '1',
    portNumber: '22',
    protocol: 'SSH',
    isSafe: 'uncheck'
  },
  {
    key: '2',
    portNumber: '22',
    protocol: 'FTP',
    isSafe: 'uncheck'
  },
  {
    key: '3',
    portNumber: '22',
    protocol: 'Telnet',
    isSafe: 'uncheck'
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
      this.$emit('toDetail', { a: 'b' })
    }
  }
}
</script>
