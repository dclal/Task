import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/simpletodolist4";
import CreateTask from "./components/createtask2";

// import Junk from "./components/junk";

export default function App() {
  return (
    <>

    <HashRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
      {/* </div> */}
      </Routes>
    </HashRouter>
    </>
  );
}
