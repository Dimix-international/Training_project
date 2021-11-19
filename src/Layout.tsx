import { Outlet } from "react-router-dom";
import {Navbar} from "./components/Navbar";


export const Layout = () => {

    const user = true;

    return (
            <div>
                <Navbar user={user}/>
                <Outlet />
            </div>
    );
}