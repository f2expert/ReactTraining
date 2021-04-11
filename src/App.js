import Header from './containers/header';
import Footer from './containers/footer';

import { Container, Row, Col } from 'reactstrap';
import LoginComponent from './components/login.component';

import './App.css';
import RefComponent from './components/ref.component';

function App() {
  const navLists = [{ title: 'dfdsfdfdsfd', links: 'adfsfdfdsfds' }];
  return (
    <>
      <Container fluid className="bg-primary">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col>
            <RefComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
