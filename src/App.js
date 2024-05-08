import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { GlobalProvider } from './context/GlobalState';
import AddTransaction from './js_files/AddTransaction';
import './App.css';
import List from './js_files/List'
const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    </Route>

                    <Route path="/history" element={<List />}>
                    </Route>

                    <Route path="/addtrans" element={<AddTransaction />}>
                    </Route>
                </Routes>
            </Router>
        </GlobalProvider>
    );
};
export default App;