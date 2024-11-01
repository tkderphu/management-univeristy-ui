import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./layout/Header";
import Login from "./component/authen/login";
import ForgetPassword from "./component/authen/forget.password";
import ChangePassword from "./component/authen/change.password";
import HeaderAdmin from './layout/HeaderAdmin';
import AddCourseComponent from './component/core/course/add.course';
function App() {
  return (
      <BrowserRouter>
          <Routes>
                  <Route path={'/login'} element={<Login/>} />
                  <Route path="/forgot-password" element={<ForgetPassword />} />
                  <Route path="/change-password" element={<ChangePassword />} />
          </Routes>
          <Routes>
            <Route path='/admin' element={<HeaderAdmin/>}/>
                <Route path='/admin/course' index element={<AddCourseComponent/>} />
                <Route path='/admin/major' element={<AddCourseComponent/>} />
                <Route path='/admin/subject' element={<AddCourseComponent/>} />
            {/* </Route> */}
          </Routes>
          <Routes>
              <Route path="/" element={<Header />}>
                  {/*<Route index element={<Home />} />*/}
                  {/*<Route path="blogs" element={<Blogs />} />*/}
                  {/*<Route path="contact" element={<Contact />} />*/}
                  {/*<Route path="*" element={<NoPage />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
