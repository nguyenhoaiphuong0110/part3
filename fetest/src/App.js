import { BrowserRouter, Route,Routes } from "react-router-dom";
import Page404 from "./components/Page404";
import HomeForm from "./components/Home";
import LoginForm from "./components/Loginform";
import ProfilePage from "./components/Profile";
import HomenotsigninForm from "./components/Homenotsignin";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element={<HomenotsigninForm />}/>
    <Route path = "/login" element={<LoginForm />}/>
    <Route path = "/home" element={<HomeForm />}/>
    <Route path = "/profile" element={<ProfilePage />}/>
    <Route path = "/404" element={<Page404 />}/>
  </Routes>
  </BrowserRouter>
  );
  
}

export default App;
