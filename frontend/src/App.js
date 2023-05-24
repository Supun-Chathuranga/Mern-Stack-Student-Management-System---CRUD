import Home from "./components/Home";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Update from "./components/Update";
import AddStudent from "./components/AddStudent";


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/add' exact Component={AddStudent} />
          <Route path='/update/:id' exact Component={Update} />
        </Routes>
    </Router>
  );
}

export default App;
