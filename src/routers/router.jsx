import { createBrowserRouter, Navigate } from "react-router-dom";
import Default from "../components/Default/Default";
import Error from "../components/Error/Error";
import Home from "../view/Home/Home";
import Handbook from "../view/Handbook/Handbook";
import Feedback from "../view/Feedback/Feedback";
import GameHome from "../view/Game/GameHome/GameHome";
import GameLayout from "../components/GameLayout/GameLayout";
import GameIntro from "../view/Game/GameIntro/GameIntro";
import GameTutorial from "../view/Game/GameTutorial/GameTutorial";
import GamePlay from "../view/Game/GamePlay/GamePlay";
import GameMain from "../view/Game/GameMain/GameMain";
import GameLegend from "../view/Game/GameLegend/GameLegend";
import GameEnd from "../view/Game/GameEnd/GameEnd";

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
                        path: "intro",
                        element: <GameIntro/>
                    },
                    {
                        path: "tutorial",
                        element: <GameTutorial/>
                    },
                    {
                        path: "play",
                        element: <GamePlay/>
                    },
                    {
                        path: "main",
                        element: <Navigate to={"/game/main/1"}/>
                    },
                    {
                        path: "main/:id",
                        element: <GameMain/>
                    },
                    {
                        path: "legend",
                        element: <GameLegend/>
                    },
                    {
                        path: "end",
                        element: <GameEnd/>
                    },
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