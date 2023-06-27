import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import App from "../App";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import FormAddPost from "../components/FormAddPost/FormAddPost";

const router = createBrowserRouter([
    {
        path: routes.HOME.path,
        element: <App />,
        children: [
            {
                path: routes.LOGIN.path,
                element: <Login />
            },
            {
                path: routes.DASHBOARD.path,

                element: (
                    <UserProtect>
                        <Dashboard />
                    </UserProtect>
                ),
            },
            {
                path: routes.ADDPOST.path,
                element: (
                    <UserProtect>
                        <FormAddPost />
                    </UserProtect>
                )
            },
        ]
    }
]);

function UserProtect({ children }) {
    if (localStorage.hasOwnProperty("user")) {
        return children;
    }
    return <Navigate to="/login" />;
}
export default router;