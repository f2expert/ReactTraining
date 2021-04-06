import NavComponent from '../components/navbar/nav.component'
import Nav from '../components/navbar/nav.component'
function Footer() {
    const navLists = [{title:'about', links:'adfsfdfdsfds'}];
    return (
        <div>
            this is my footer
            <NavComponent cssClassName="abc"  navList={navLists}/>
        </div>
    )
}

export default Footer
