import { useRoutes } from "react-router-dom";

//
import Login from "../modules/auth/pages/login/Main";
import Main from "../modules/frontOffice/home/Main"
import Register from "../modules/auth/pages/register/register";
// import Register from "../modules/auth/pages/register/Main";
// import ErrorPage from "../modules/auth/pages/error-page/Main";
// import More from "../modules/auth/pages/more/More";
//

function Router() {
    
    const routes = [
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
    ]

    return useRoutes(routes);
}

export default Router