import { useRoutes } from "react-router-dom";

//
import Login from "../modules/auth/pages/login/Main";
import Main from "../modules/frontOffice/home/Main"
import Search  from "../modules/frontOffice/search/Main";
import AddExpression from "../modules/frontOffice/addExpression/Main";
// import Register from "../modules/auth/pages/register/register";
// import Register from "../modules/auth/pages/register/Main";
import ErrorPage from "../modules/auth/pages/error-page/Main";
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
            path: '/expressions',
            element: <Search />
        },
        {
            path: '/new_expression',
            element: <AddExpression />
        },
        {
            path: '*',
            element: <ErrorPage />
        },
    ]

    return useRoutes(routes);
}

export default Router