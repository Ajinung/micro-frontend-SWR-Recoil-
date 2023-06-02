import { createBrowserRouter } from "react-router-dom"
import DataFetching from "../pages/ReadFiles"
import Layout from "../components/common/Layout"
import UseEffect from "../pages/UseEffect"
import TanStack from "../pages/TanStack"
import SWR from "../pages/SWR"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DataFetching>
                    <UseEffect />
                </DataFetching>
            },
            {

                path: "tanstack",
                element: <DataFetching>
                    <TanStack />
                </DataFetching>
            },
            {

                path: "swr",
                element: <DataFetching>
                    <SWR />
                </DataFetching>
            },
        ]
    },

])