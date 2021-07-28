import { Profiler } from "react";
import Accessories from "./views/accessories/accessories.view";
import Phones from "./views/phones/phones.views";
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
    },
    {
        name:"accessories", 
        component:Accessories,
        path:"/accessories"
    }, 
    {
        name:"phones", 
        component:Phones,
        path:"/phones"
    }
]
export default routes;