import DefaultLayout from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import "./App.css"
import Dashboard from './pages/dashboard/Dashboard.page';

function App() {
    return ( < div className = "App" > { /*<Entry/>*/ } 
    <DefaultLayout>
        <Dashboard/>
    </DefaultLayout>
        </div>
    );
}

export default App;