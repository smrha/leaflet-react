import Content from './generic/Content';
import { Layout } from 'antd'
import Header from './generic/Header';
import Footer from './generic/Footer';

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content />
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
