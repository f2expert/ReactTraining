import { Container, Row, Col} from 'reactstrap';
import NavComponent from '../components/navbar/nav.component';
function Header() {
    const navLists = [{title:'Home', links:'homeeeeee'}];
    return (
        <Container>
            <Row>
                <Col>
                    <p>List Based</p>
                    <NavComponent  navList = {navLists} />
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Header