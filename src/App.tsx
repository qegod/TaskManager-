import {Routes, Route} from "react-router";
import ROUTES from "./routes.ts";

function App() {
  return (
        <Routes>
            {ROUTES.map((obj) => (
                <Route key={obj.path} path={obj.path} element={obj.element}/>
            ))}
        </Routes>
  )
}

export default App
