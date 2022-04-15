import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <Result
    status="404"
    title="404"
    subTitle="متاسفانه این صفحه یافت نشد."
    extra={<Link to='/'><Button type="primary">بازگشت به خانه</Button></Link>}
  />
  )
}