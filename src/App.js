import './App.css';
import { SplashScreen } from './pages/splashScreen/splashScreen.tsx';
import { HomeScreen } from './pages/homeScreen/homescreen.tsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>,
  },
  {
    path: "home",
    elment: <HomeScreen/>
  }
]); 

function App() {

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setShowSplashScreen(false);
    }, 4000)
  })

  return showSplashScreen? (
    
    <SplashScreen/>

  ) : (
    
    <div style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
      <RouterProvider router={router}/>
    </div>
  
  );
}

export default App;
