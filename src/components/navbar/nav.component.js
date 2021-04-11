import { Nav, NavItem, NavLink } from 'reactstrap';
import './nav.css'

function NavComponent({navList}) {
    
    const renderNavList = () => {
        return navList.map((item, i) => <NavItem key={i}><NavLink href={item.links}>{item.title}</NavLink></NavItem>)
    }

    return (
        <Nav>
            {navList ? renderNavList() : null}
        </Nav>
    )    
}

export default NavComponent;