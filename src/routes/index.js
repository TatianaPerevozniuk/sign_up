import SignIn from "../pages/sign_in/SignIn";
import SignUp from "../pages/sign_up/SignUp";


export const appRoutes = [
    {
        path: '/sign_up/',
        exact: true,
        component: SignIn
    },
    {
        path: '/sign_up/sign_in',
        component: SignIn
    },
    {
        path: '/sign_up/sign_up',
        component: SignUp
    },
];