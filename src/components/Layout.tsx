import {Outlet} from "react-router-dom";
import {CustomLink} from "./CustomLink";
import React from "react";

export const Layout = () => {
    return (
        <div className='main-container'>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>2023</footer>
        </div>

    )
}
