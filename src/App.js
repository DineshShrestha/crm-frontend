import DefaultLayout from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import "./App.css"
import Dashboard from './pages/dashboard/Dashboard.page';
import AddTicket from './pages/new-ticket/AddTicket.page';
import TicketLists from './pages/ticket-list/TicketLists.page'
function App() {
    return ( < div className = "App" > { /*<Entry/>*/ } 
    <DefaultLayout>
        {/*<Dashboard/>*/}
        {/*<AddTicket/>*/}
        <TicketLists/>
    </DefaultLayout>
        </div>
    );
}

export default App;