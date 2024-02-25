import './App.css';
import { Route, Routes } from 'react-router-dom';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import AddressDetails from './Components/AddressDetails/AddressDetails';
import UsersList from './Components/UsersList/UsersList';

function App() {
  return (
    <>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<PersonalDetails />}></Route>
            <Route exact path="/address-details" element={<AddressDetails />}></Route>
            <Route exact path="/users-list" element={<UsersList />}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
