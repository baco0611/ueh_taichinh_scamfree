import { createBrowserRouter } from "react-router-dom";
import Default from "../components/Default/Default";
import Error from "../components/Error/Error";
import Home from "../view/Home/Home";
import Handbook from "../view/Handbook/Handbook";
import Feedback from "../view/Feedback/Feedback";
import GameHome from "../view/Game/GameHome/GameHome";
import GameLayout from "../components/GameLayout/GameLayout";
import GameIntro from "../view/Game/GameIntro/GameIntro";
import GameTutorial from "../view/Game/GameTutorial/GameTutorial";

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
            },
            {
                path: "/game",
                element: <GameLayout/>,
                children: [
                    {
                        path: "",
                        element: <GameHome/>
                    },
                    {
                        path: "/game/intro",
                        element: <GameIntro/>
                    },
                    {
                        path: "/game/tutorial",
                        element: <GameTutorial/>
                    }
                ]
            },
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