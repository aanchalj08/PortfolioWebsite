import RootLayout from "./Pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path:"/", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/projects", element: <Projects></Projects>,children:[
        ]},
        { path: "/contact", element: <Contact></Contact> },
        {path:"/project",children:[
          {path:"/project/portfolio",element:<Project1></Project1>},
          {path:"/project/conference",element:<Project2></Project2>},
          {path:"/project/food",element:<Project3></Project3>},

        ]},
        
      ],
    },
    
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
