/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about/About';
import Admission from './Admission/Admission';
import Career from './Career/Career';
import Contact_US from './Contact_US/Contact_US';
import Department from './Department/Department';
import Faculties from './Faculties/Faculties';
import Footer from './Footer/Footer';
import Front from './front/Front';
import TopMenu from './Menu/TopMenu';
import Niter_Clubs from './Niter_Clubs/Niter_Clubs';
import Notice from './Notice/Notice';
import Office from './Office/Office';
import Residents from './Residents/Residents';
import Teacher from './Teacher/Teacher';
function Main() {
    return(
        <>
         
           
            <Router>
            <TopMenu />
                 <Routes>
                    <Route path="/" element={<Front />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/faculties" element={<Faculties />}></Route>
                    <Route path="/teacher" element={<Teacher />}></Route>
                    <Route path="/department" element={<Department />}></Route>
                    <Route path="/notice" element={<Notice />}></Route>
                    <Route path="/niterclub" element={<Niter_Clubs />}></Route>
                    <Route path="/admission" element={<Admission/>}></Route>
                   <Route path="/office" element={<Office/>}></Route>
                    <Route path="/residents" element={<Residents/>}></Route>
                    <Route path="/contactus" element={<Contact_US/>}></Route>
                    <Route path="/career" element={<Career />}></Route>
                 </Routes>
             <Footer />
            </Router>


          {/* <Front /> */}
            {/* <About /> */}
            {/* <Faculties /> */}
            {/* <Teacher /> */}
            {/* <Department /> */}
            {/* <Notice /> */}
            {/* <Niter_Clubs /> */}
            {/* <Admission /> */}
            {/* <Office /> */}
            {/* <Residents /> */}
            {/* <Contact_US /> */}
            {/* <Career /> */}
           
        </>
    )
}
export default Main;