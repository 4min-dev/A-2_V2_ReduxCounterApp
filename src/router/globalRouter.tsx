import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";

export const globalRouter = createBrowserRouter([
    {
        path:'',
        element:<HomePage/>,
        errorElement:<h1>No page found</h1>
    }
])