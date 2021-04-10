import Header from './containers/header';
import Footer from './containers/footer';

import { Container, Row, Col } from 'reactstrap';
import LoginComponent from './components/login.component';

import './App.css';
import RefComponent from './components/ref.component';

function App() {
  const navLists = [{title:'dfdsfdfdsfd', links:'adfsfdfdsfds'}];
  return (
    
    <Container>
      <Row>
        <Col>
          <Header />
          {/*<LoginComponent />*/}
          <RefComponent />

          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
