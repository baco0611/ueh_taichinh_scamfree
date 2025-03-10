import { createBrowserRouter } from "react-router-dom";
import Default from "../components/Default/Default";
import Home from "../view/Home/Home";
import Handbook from "../view/Handbook/Handbook";
import Game from "../view/Game/Game";
import Activities from "../view/Activities/Activities";
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
                path:"/activities",
                element: <Activities/>
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