import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
