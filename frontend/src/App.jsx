// import DonateHome from "./Donation/DonateHome";
// import DonateMoney from "./Donation/DonateMoney";
// import DonateItem from "./Donation/DonateItem";
// import Login from "./Auth/AuthPage";
// import Dashboard from "./Auth/Dashboard";
// import Navbar from "./Component/Navbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Volunteer from "./Pages/Volunteer";
// import PrivateRoute from "./Component/PrivateRoute";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Ask from "./Pages/Ask";

// const App = () => {
//   return (
//     <BrowserRouter>
      
//       {/* ✅ Navbar har page me automatically show hoga */}
//       <Navbar />

//       {/* ✅ Page content change hoga */}
//       <div className="pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//            <Route path="/login" element={<Login />} />
//           {/* <Route path="/dashboard" element={<Dashboard/>} />
//            <Route path="/donate-money" element={<DonateMoney />} />
//           <Route path="/donate-items" element={<DonateItem />} /> */}
//           <Route path="/donate" element={<DonateHome />} />

//           <Route path="/volunteer" element={<Volunteer />} />

//           <Route path="/dashboard" element={
//   <PrivateRoute>
//     <Dashboard />
//   </PrivateRoute>
// } />

// <Route path="/donate-money" element={
//   <PrivateRoute>
//     <DonateMoney />
//   </PrivateRoute>
// } />

// <Route path="/donate-items" element={
//   <PrivateRoute>
//     <DonateItem />
//   </PrivateRoute>
// } />
//         </Routes>
//       </div>

//     </BrowserRouter>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import Donate from "./Pages/Donate";
import Volunteer from "./Pages/Volunteer";
import DonateHome from "./Donation/DonateHome";
import DonateMoney from "./Donation/DonateMoney";
import DonateItem from "./Donation/DonateItem";
import Login from "./Auth/AuthPage";
import Dashboard from "./Auth/Dashboard";
import PrivateRoute from "./Component/PrivateRoute";
// import Ask from "./Pages/Ask";

const App = () => {
  return (
    <BrowserRouter>
      
      {/* ✅ Navbar har page me automatically show hoga */}
      <Navbar />

      {/* ✅ Page content change hoga */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/donate-money" element={<DonateMoney />} />
          <Route path="/donate-items" element={<DonateItem />} /> */}
          <Route path="/donate" element={<DonateHome />} />

          <Route path="/volunteer" element={<Volunteer />} />

          <Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />

<Route path="/donate-money" element={
  <PrivateRoute>
    <DonateMoney />
  </PrivateRoute>
} />

<Route path="/donate-items" element={
  <PrivateRoute>
    <DonateItem />
  </PrivateRoute>
} />
        </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;
