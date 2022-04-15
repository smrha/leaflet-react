// import Content from './generic/Content';
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './generic/Header';
import Footer from './generic/Footer';

import Map from './generic/Map';
import PersonList from './person/List';
import PersonFull from './person/Full'
import Report from './report/Report';
import Page404 from './generic/Page404';

const { Content } = Layout

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content className="site-layout">
      <div className="site-layout-background" >
        <Routes>
          <Route path='/' element={<Map />}/>
          <Route path='/report' element={<Report />}/>
          <Route path='/person' element={<PersonList />}/>
          <Route path='/person/:id' element={<PersonFull />}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </div>
      </Content>
      
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
