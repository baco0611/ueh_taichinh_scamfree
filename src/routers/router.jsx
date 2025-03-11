import { createBrowserRouter } from "react-router-dom";
import Default from "../components/Default/Default";
import Error from "../components/Error/Error";
import Home from "../view/Home/Home";
import Handbook from "../view/Handbook/Handbook";
import Game from "../view/Game/Game";
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
                path:"/game",
                element: <Game/>
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
    },
    {
        path: "/error",
        element: <Error/>
    },
    {
        path: "*",
        element: <Error/>
    }
])

export default router