import { Nav, NavItem, NavLink } from 'reactstrap';
import './nav.css'

function NavComponent({navList, cssClassName}) {

    const renderNavList = () => {
        return navList.map(item => <NavItem><NavLink href={item.links}>{item.title}</NavLink></NavItem>)
    }

    return (
        <Nav className={cssClassName}>
            {navList ? renderNavList() : null}
        </Nav>
    )    
}

export default NavComponent;