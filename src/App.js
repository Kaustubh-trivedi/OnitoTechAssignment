import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import AddressDetails from './Components/AddressDetails/AddressDetails';
import UsersList from './Components/UsersList/UsersList';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/personal-details" element={<PersonalDetails />}></Route>
          <Route exact path="/address-details" element={<AddressDetails />}></Route>
          <Route exact path="/" element={<UsersList />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
