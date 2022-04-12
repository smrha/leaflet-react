import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import Map from './Map';

const { Content: AntContent } = Layout

export default function Content() {
  return (
    <AntContent className="site-layout" style={{ padding: '0 50px', marginTop: 18 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Map />
      </div>

    </AntContent>
  )
}
