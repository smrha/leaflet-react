import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header: AntHeader } = Layout

export default function Header() {
  return (
    <AntHeader style={{ positiion: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="map">
          <Link to='/'>نقشه</Link>
        </Menu.Item>
        <Menu.Item key="report">
          <Link to='report'>گزارشات</Link>
        </Menu.Item>
        <Menu.Item key="user">
          <Link to='person'>کاربران</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  )
}