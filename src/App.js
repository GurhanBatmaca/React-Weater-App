import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CityProvider } from './context/CityContext';
import { WeaterProvider } from './context/WeaterContext';

import Main from './components/Main'
import Hours from './components/Hours';

function App() {
  return (
    <> 
        <CityProvider>
          <WeaterProvider>
            <Routes>
              <Route path='/' element={ <Main/>}>
                <Route path=':index' element={<Hours />} />
              </Route>
            </Routes>               
          </WeaterProvider>  
        </CityProvider>       
    </>
  );
};

export default App;
