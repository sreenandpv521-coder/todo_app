import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Counter from "../pages/counter/counter";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/counter',
            element: <Counter />
        }]
    }
])

export default router