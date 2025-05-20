
import { Entry } from "./pages/entry/Entry.page";
import {PasswordOtpForm} from './pages/password-reset/PasswordOtpForm.page'
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.page";
import AddTicket from "./pages/new-ticket/AddTicket.page";
import TicketLists from "./pages/ticket-list/TicketLists.page";
import Ticket from "./pages/ticket/Ticket.page";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";
import {Registration} from "./pages/registration/Registration.page";
function App() {
  return (
    <div className="App">
     <Router>
  <Routes>
    <Route path="/" element={<Entry />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/password-reset" element={<PasswordOtpForm />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
    <Route
      path="/add-ticket"
      element={
        <PrivateRoute>
          <AddTicket />
        </PrivateRoute>
      }
    />
    <Route
      path="/tickets"
      element={
        <PrivateRoute>
          <TicketLists />
        </PrivateRoute>
      }
    />
    <Route
      path="/ticket/:tId"
      element={
        <PrivateRoute>
          <Ticket />
        </PrivateRoute>
      }
    />
  </Routes>
</Router>
    </div>
  );
}

export default App;
