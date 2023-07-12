import React from 'react';
import {Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {HomePage} from "./pages/Homepage";
import {AboutPage} from "./pages/Aboutpage";
import {blogLoader, BlogPage} from "./pages/Blogpage";
import {NotFoundPage} from "./pages/Notfoundpage";
import {postLoader, SinglePage} from "./pages/Singlepage";
import {EditPost} from "./pages/Editpost";
import {LoginPage} from "./pages/Loginpage";
import {PersonalPage} from "./pages/Personalpage";
import {Layout} from './components/Layout';

import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about/*" element={<AboutPage/>}>
            <Route path="contacts" element={<p>Our contacts</p>}/>
            <Route path="team" element={<p>Our team</p>}/>
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="posts" element={<BlogPage/>} loader={blogLoader}/>
        <Route path="posts/:id" element={<SinglePage/>} loader={postLoader}/>
        <Route path="posts/:id/edit" element={<EditPost/>}/>
        <Route path="personal" element={
            <RequireAuth>
                <PersonalPage/>
            </RequireAuth>
        }/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Route>
))


function App() {
    return (
        <AuthProvider>
           <RouterProvider router={router}/>
        </AuthProvider>
    );
}

export default App;
