import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/simpletodolist5";
import CreateTask from "./components/createtask3";
import EditTask from "./components/edittask1";


// import Junk from "./components/junk";

export default function App3() {
  return (
    <>

    <HashRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
      {/* </div> */}
      </Routes>
    </HashRouter>
    </>
  );
}
