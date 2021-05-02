import Header from './containers/header';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import AppRouter from './app.router';

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
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
