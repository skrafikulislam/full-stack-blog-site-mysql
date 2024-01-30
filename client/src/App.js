import "./style.scss";
// eslint-disable-next-line
import { RouterProvider, Route } from "react-router-dom";
import RoutePath from "./utils/RoutePath";

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={RoutePath} />
      </div>
    </div>
  );
}
   
export default App;
