import './App.css';
import Main from './components/Main'
import { CityProvider } from './context/CityContext';
import { WeaterProvider } from './context/WeaterContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>  
    <CityProvider>
      <WeaterProvider>                 
          <Main/>       
      </WeaterProvider>  
    </CityProvider>       
    </>
  );
}

export default App;
