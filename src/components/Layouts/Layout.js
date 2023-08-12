import './Layout.css';
import './SideBar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LeftArrowIcon } from '../Icons';
// import SearchBar from '../../util/SearchBar/SearchBar';

const Layout = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const locationType = location.pathname.split('/')[1];
    return <div className='layout'>
        <header className='layoutHeading'>
            <div>
            { locationType !== "" && <LeftArrowIcon className="layoutHeading-svg" onClick={()=>navigate(-1)} />}
            <h1 className='heading1' onClick={()=>navigate('/')}>Inventory Management</h1>
            </div>
            {/* <SearchBar placeholder="Search by video title." /> */}
        </header>
        <div className='leftSideBar'>
            <ul className='sidebarNavList'>
                <li className='sidebarNavListItem'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListText">Dashboard</span>
                        </span>
                    </NavLink>
                </li>
                <li className='sidebarNavListItem'>
                    <NavLink to="/department" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListText">Departments</span>
                        </span>
                    </NavLink>
                </li>
                <li className='sidebarNavListItem'>
                    <NavLink to="/product" className={({ isActive }) => isActive ? "sidebarNavLink active-page" : "sidebarNavLink"}>
                        <span className='navListContent'>
                            <span className="navListText">Products</span>
                        </span>
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <main>
            {children}
        </main>
    </div>
};

export default Layout;