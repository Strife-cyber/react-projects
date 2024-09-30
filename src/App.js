import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarComponent from './components/navbar/navbar';
import FooterComponent from './components/footer/footer';
import MainComponent from './components/main/main';

function App() {
  return (
    <>
    <NavbarComponent/>
    <MainComponent/>
    <FooterComponent/>
    </>
  );
}

export default App;
