import { Link } from 'react-router-dom';
import './nav.css'

function NavComponent({navList}) {
    
    const renderNavList = () => {
        return navList.map((item, i) => <Link key={i} to={item.links}>{item.title}</Link>)
    }

    return (
        <>
            {navList ? renderNavList() : null}
        </>
    )    
}

export default NavComponent;