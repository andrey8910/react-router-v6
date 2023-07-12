import {Outlet, Link} from "react-router-dom";

export const AboutPage = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is a demo about</p>
            <ul>
                <li>
                    <Link to="contacts">Our Contacts</Link>
                </li>
                <li>
                    <Link to="team">Our Teams</Link>
                </li>
            </ul>


            {/*<Routes>*/}
            {/*    <Route path="contacts" element={<p>Our contacts</p>}/>*/}
            {/*    <Route path="team" element={<p>Our team</p>}/>*/}
            {/*</Routes>*/}
            <Outlet />
        </div>
    )
}
