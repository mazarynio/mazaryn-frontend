import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Loader } from './components/Loaders/Loader'
import ShowToasts from './components/showTosts';
// import ProtectedRoutes from './guards/ProtectedRoutes';
//import './App.css';
import View from './views/view';

const LoginScreen = React.lazy(() => import('./views/Auth/Login'))
const SignUpScreen = React.lazy(() => import('./views/Auth/SignUp'))
const ForgotPasswordScreen = React.lazy(() => import('./views/Auth/ForgotPassword'))
const InterestScreen = React.lazy(() => import('./views/Auth/Interest'))


const App = (props) => {

  return (
    <div className="App font-nunito">
      <ShowToasts />
      <Suspense fallback={<Loader fullscreen />}>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/signup' component={SignUpScreen} />
            <Route exact path='/forgotpassword' component={ForgotPasswordScreen} />
            <Route exact path='/interest' component={InterestScreen} />
            <Route component={View} />
            {/* <View /> */}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default connect(null, null)(App);