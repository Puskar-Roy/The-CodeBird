import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import CrewPage from './components/Crew/CrewPage'
import DownPage from "./components/common/404Page";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/crew"
            element={<CrewPage />}
          />
          <Route
            path="/contact"
            element={<ContactUs />}
          />
          <Route
            path="*"
            element={<DownPage />}
          />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;





// <BrowserRouter>
//   <Routes>
//     <Route
//       path="/"
//       element={state.user ? <Home /> : <Navigate to="/login" />}
//     />
//     <Route
//       path="/login"
//       element={!state.user ? <Login /> : <Navigate to="/" />}
//     />
//     <Route
//       path="/register"
//       element={!state.user ? <Register /> : <Navigate to="/" />}
//     />
//     <Route
//       path="/forgotPassword"
//       element={state.user ? <ForgotPassword /> : <Navigate to="/" />}
//     />
//     <Route
//       path="/verifyPassword"
//       element={state.user ? <VerifyPassword /> : <VerifyPassword />}
//     />
//     <Route
//       path="/uploadPic"
//       element={state.user ? <UploadPic /> : <Navigate to="/" />}
//     />
//     <Route
//       path="/editor/:roomId/:clientName"
//       element={<EditorPage />}
//     />
//   </Routes>
// </BrowserRouter>