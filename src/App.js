import Header from './containers/header';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, Redirect} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';

import './App.css';

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
            <Switch>
              <Route path="/" exact component={ Home }  />
              <Route path="/about" component={About}/>
              <Route path="/home" component={ Home }  />
              <Route path="/contact" component={Contact}/>
              <Redirect from="/*" to="/home" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
