import {Route, Switch} from "react-router-dom";
import './App.css';
import {appRoutes} from '../routes/index'
import SignIn from "../pages/sign_in/SignIn";
import SignUp from "../pages/sign_up/SignUp";

function Forms() {
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <div className='form_img'></div>
                <Switch>
                    {appRoutes.map(route =>(
                        <Route key={route.path} {...route}/>
                    ))}
                    <Route path="*">
                        <h1 className="noPage">No found page </h1>
                    </Route>
                </Switch>
                <div className = "form_copyright">Copyright &#169; Your Website 2021</div>
            </div>
        </div>
    );
}

export default Forms;