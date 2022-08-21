import {HashRouter as Router, Routes, Route} from "react-router-dom";

import MainRoute from "../src/Routes/MainRoute";

const App = () => {
  return <Router>
      <Routes>
        <Route path="/" element={<MainRoute />} />
      </Routes>
  </Router>
};

export default App;