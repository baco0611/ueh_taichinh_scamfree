import { createBrowserRouter } from "react-router-dom";
import Default from "../components/Default/Default";
import Home from "../view/Home/Home";
import Handbook from "../view/Handbook/Handbook";
import Feedback from "../view/Feedback/Feedback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/handbook",
                element: <Handbook/>
            },
            {
                path:"/feedback",
                element: <Feedback/>
            }
        ]
    }
])

export default router