import DefaultLayout from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';
import "./App.css"

function App() {
    return ( < div className = "App" > { /*<Entry/>*/ } 
    <DefaultLayout>
        Send page component
    </DefaultLayout>
        </div>
    );
}

export default App;