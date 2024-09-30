import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home.jsx'; // Assuming you have a HomePage component
import FavoritePage from './pages/favorite.jsx';
import ManagePage from './pages/manage.jsx';
import RegistrationPage from './pages/registration.jsx';
import ContactPage from './pages/contact.jsx';
import ConnectionPage from './pages/connexion.jsx';

function App() {
  return (
    <Router>
      {/*Route Definitions*/}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favoris' element={<FavoritePage/>}/>
        <Route path='/gestion' element={<ManagePage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/connexion' element={<ConnectionPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
