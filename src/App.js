import './App.css';
import Home from "./home";
import About from "./about";
import { createBrowserRouter,RouterProvider} from "react-router-dom";

const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);

function App() {
  const getUser = async ()=>{
    let res = await fetch("https://reqres.in/api/users");
    let server = await res.json();
    console.log(server['data']);
  }
  return (
    <div>
      {/* <RouterProvider config={config}/> */}
      <button onClick={getUser}> Mens are Brave</button>
      <About/>
      <Home/>
    </div>
   
  );
}

export default App;
