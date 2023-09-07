import { useRoutes } from "react-router-dom";

//
import Login from "../modules/auth/pages/login/Main";
// import Register from "../modules/auth/pages/register/Main";
// import ErrorPage from "../modules/auth/pages/error-page/Main";
// import More from "../modules/auth/pages/more/More";
//

function Router() {
    
    const routes = [
        {
            path: '/',
            element: <Login />
        },
    ]

    return useRoutes(routes);
}

export default Router