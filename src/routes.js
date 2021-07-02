import { Profiler } from "react";
import Posts from "./views/posts/posts-component";
import Signin from "./views/signin/singnin-view";
import Signup from "./views/signup/signup-view";

const routes = [
    {
        name: "posts",
        component: Posts,
        path: "/",
    },
    {
        name: "sign-in",
        component: Signin,
        path: "/sign-in"
    },
    {
        name: "sign-up",
        component: Signup,
        path: "/sign-up"
    },
    {
        name: "profile",
        component: Profiler,
        path: "/profiele"
    }
]
export default routes;