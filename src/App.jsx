import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
