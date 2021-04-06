import Header from './containers/header';
import Footer from './containers/footer';

import { Container, Row, Col } from 'reactstrap'
import NavComponent from './components/navbar/nav.component'

import './App.css';

function App() {
  const navLists = [{title:'dfdsfdfdsfd', links:'adfsfdfdsfds'}];
  return (
    
    <Container>
      <Row>
        <Col>
          <Header />
          <Footer />
        </Col>
      </Row>

      <hr />
      <NavComponent navList={navLists} />
    </Container>
  );
}

export default App;
