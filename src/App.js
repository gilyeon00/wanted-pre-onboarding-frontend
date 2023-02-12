import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './component/Signin'
import Signup from './component/Signup'
import Todo from './component/Todo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
