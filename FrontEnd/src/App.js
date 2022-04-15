import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeComponent from './components/component/WelcomeComponent';
import LoginComponent from './components/component/LoginComponent';
import ErrorComponent from './components/component/ErrorComponent';
//import ListToDosComponent from './components/no_use/ListToDosComponent';
import LogOutComponent from './components/component/LogOutComponent';
import AuthenticatedRoute from './components/component/AuthenticatedRoute';
//import ToDoComponent from './components/todo/ToDoComponent';
import FirstPage from './components/component/FirstPage';
import AuthenticatedAdminRoute from './components/component/AuthenticatedAdminRoute';
import WelcomeAdminComponent from './components/component/WelcomeAdminComponent';
import RegisterComponent from './components/component/RegisterComponent';
import ListProperty from './components/component/ListProperty';
import AddPropertyForm from './components/AddPropertyForm(2)';
import {PaginationTable}  from './components/table/PaginationTable';
import Dashboard from "./components/component/Dashboard"
import AboutUs from "./components/component/AboutUs";
import Contact from "./components/component/Contact";
import FooterNew from "./components/component/FooterNew"
import HeaderComponent from './components/component/HeaderComponent';

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent/>
        <Switch>
        <Route exact path='/' component={FirstPage} />
          <Route exact path='/login' component={LoginComponent} />
          <AuthenticatedRoute
            exact
            path='/welcome/:name'
            component={WelcomeComponent}
          />
          <AuthenticatedRoute
            exact
            path='/dashboard/:name'
            component={Dashboard}
          />

          <Route exact path='/login' component={LoginComponent} />
         
          <AuthenticatedRoute
            exact
            path='/logout'
            component={LogOutComponent}
          />
           <Route
            exact
            path='/register'
            component={RegisterComponent}
          />
           <AuthenticatedRoute
            exact
            path='/addProperty'
            component={AddPropertyForm}
          />

          <AuthenticatedRoute
            exact
            path='/aboutUs'
            component={AboutUs}
          />

          <AuthenticatedRoute
            exact
            path='/listProperties'
            component={ListProperty}
          />
              <AuthenticatedAdminRoute
            exact
            path='/welcomeAdmin'
            component={WelcomeAdminComponent}
          />
          <AuthenticatedRoute
            exact
            path='/search'
            component={ListProperty}
          />
           <AuthenticatedRoute
            exact
            path='/table'
            component={PaginationTable}
          />
          {/*<Route exact path="/about" component={AboutUS}></Route>*/}
          <Route exact path="/contact" component={Contact}></Route>
          <Route component={ErrorComponent}></Route>
        </Switch>
     
      </Router>
      <div><br/>
      </div>
      <FooterNew/>
      
    </div>
  );
}

export default App;
