import { useEffect, useState } from "react";
import codellins from "codellins";


// stylesheet
import "./App.css";

// react routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignInContext } from "./Contexts/SignInContext";

// components
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import SearchPage from "./pages/SearchPage/SearchPage";
import SchoolProfile from "./pages/SchoolProfile/SchoolProfile";
import SchoolDashboardLayout from "./pages/SchoolDashboardLayout/SchoolDashboardLayout";
import SchoolProfileDash from "./pages/SchoolDashboardLayout/pages/SchoolProfileDash";
import SchoolStatistics from "./pages/SchoolDashboardLayout/pages/SchoolStatistics";
import SchoolSettings from "./pages/SchoolDashboardLayout/pages/SchoolSettings";
import AdminDashboardLayout from "./pages/AdminDashboardLayout/AdminDashboardLayout";
import RegisteredSchools from "./pages/AdminDashboardLayout/pages/RegisteredSchools";
import DocumentVerification from "./pages/AdminDashboardLayout/pages/DocumentVerification";
import AdminProfile from "./pages/AdminDashboardLayout/pages/AdminProfile";

function App() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [school, setSchool] = useState(null)

  useEffect(() => {
 
    setSchool(codellins.Cookies.get("jwt"))


  }, [])
  

  return (

    <main>
      <SignInContext.Provider
        value={{ openSignIn, setOpenSignIn, openSignUp, setOpenSignUp }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile/:schoolId" element={<SchoolProfile/>}/>
            <Route element={school ? <SchoolDashboardLayout/> : ""}>
              <Route path="/dashboard/school_profile" element={school ? <SchoolProfileDash/> : <Register />}/>
              <Route path="/dashboard/statistics" element={school ? <SchoolStatistics/> : <Register />}/>
              <Route path="/dashboard/settings" element={school ?  <SchoolSettings/> : <Register />}/>
            </Route>
            <Route element={<AdminDashboardLayout/>}>
              <Route path="/admin/registered_schools" element={<RegisteredSchools/>}/>
              <Route path="/admin/document_verification" element={<DocumentVerification/>}/>
              <Route path="/admin/admin_profile" element={<AdminProfile/>}/>
            </Route>
         </Routes>
        </BrowserRouter>
      </SignInContext.Provider>
    </main>
  );
}

export default App;
