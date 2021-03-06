
import { Entry } from "./pages/entry/Entry.page";
import {PasswordOtpForm} from './pages/password-reset/PasswordOtpForm.page'
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.page";
import AddTicket from "./pages/new-ticket/AddTicket.page";
import TicketLists from "./pages/ticket-list/TicketLists.page";
import Ticket from "./pages/ticket/Ticket.page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";
import {Registration} from "./pages/registration/Registration.page";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route path="/" exact>
            <Entry />
          </Route>
          <Route path="/registration" exact>
            <Registration/>
          </Route>
          <Route path="/password-reset" exact>
            <PasswordOtpForm />
          </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
