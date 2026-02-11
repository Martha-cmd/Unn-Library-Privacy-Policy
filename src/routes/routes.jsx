import { Router, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const routes = () => {
  return (
    <Router>
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Router>
  );
};

export default routes;
