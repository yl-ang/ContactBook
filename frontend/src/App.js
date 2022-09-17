import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsPage from "./components/ContactsPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ContactsPage />} />
          <Route path="/ContactsPage" element={<ContactsPage />} />
          <Route path="/*" element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
