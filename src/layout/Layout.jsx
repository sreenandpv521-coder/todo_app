import { Link, Outlet } from "react-router";

function Layout() {

    return (
        <>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <Outlet />
            <div>
                
            </div>
        </>
    )
}

export default Layout;