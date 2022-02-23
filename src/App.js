import "./App.css";
//import BulkPayment from "./components/BulkPayment";
import BulkPayment1 from "./components/BulkPayment1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* <BulkPayment /> */}
      <Routes>
        <Route path="/" element={<BulkPayment1 />} />
      </Routes>
    </Router>
  );
}
