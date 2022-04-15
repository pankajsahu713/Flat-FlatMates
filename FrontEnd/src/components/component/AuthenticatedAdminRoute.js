import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';

export default function AuthenticatedAdminRoute(props) {

  if (AuthenticationService.getRole() === "[Role(userRole=ROLE_ADMIN)]" ) {
    console.log("in if");
    return <Route {...props} />;
  } else {
    console.log("in else");
    return <Redirect to='/search' />;
  }
}
