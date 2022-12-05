import { Route, Routes } from 'react-router-dom';
import './App.css';

import ListOfName from './ListOfName';
import SplitScreen from './SplitScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<ListOfName />}/>
          <Route path='/chatpage' element={<SplitScreen />}/>
        </Routes>
      
      </header>
    </div>
  );
}

export default App;
