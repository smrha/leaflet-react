import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

export default class PersonList extends Component {
  state = {
    persons: [],
    loading: true
  }

  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        this.setState({ persons: response.data })
      )
      .finally(() => this.setState({ loading: false }))
  }

  columns = [
    { title: 'شناسه', dataIndex: 'id', key: 'id' },
    { title: 'نام', dataIndex: 'name', key: 'name' },
    {
      title: 'آدرس', dataIndex: 'address', key: 'address', render: (field, record, index) => {
        return `${field.city} ${field.street} ${record.phone}`
      }
    },
    {
      key: 'actions',
      render: (f, r) => <Link to={`/person/${r.id}`}><EyeOutlined/></Link>
    }
  ]
  render() {
    return (
      <div>
        <Table dataSource={this.state.persons} columns={this.columns} loading={this.state.loading} />
      </div>
    )
  }
}
