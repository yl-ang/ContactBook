import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContactsPage from "./components/ContactsPage.js";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Address Book</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
