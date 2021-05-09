import { Container, Row, Col } from 'reactstrap';
import NavComponent from '../components/navbar/nav.component';
function Header() {
    const navLists = [
        { title: 'Home', links: '/home' },
        { title: 'About', links: '/about' },
        { title: 'Contact', links: '/contact' },
        { title: 'Stateful', links: '/stateful' }
    ];
    return (
        <Container>
            <Row>
                <Col className="col-md-2">
                    <a className="navbar-brand">List Based</a>
                </Col>
                <Col className="col-md-10">
                    <NavComponent navList={navLists} />
                </Col>
            </Row>
        </Container>
    )
}

export default Header