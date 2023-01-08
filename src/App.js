import './App.css';
import Main from './components/Main';
import Search from './components/Search';

import { CityProvider } from './context/CityContext';

function App() {
  return (
    <div>    
      <CityProvider>  
        <Search />
        <Main />
      </CityProvider>      
    </div>
  );
}

export default App;
