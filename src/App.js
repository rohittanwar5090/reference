import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing'
import Services from './pages/Services';
import Demo from './pages/Demo';
import WorkSubmission from './pages/WorkSubmission';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Blogs from './pages/Blogs';
import BlogsContent from './pages/BlogsContent';
import Calendar from './pages/Calendar';
import TermsAndConditions from './pages/TermsAndConditions'
import Eula from './pages/Eula';
import LandingPage from './pages/LandingPage';
import Comparison from './pages/Comparison';
import Refund from './pages/Refund';
import WhyChooseUs from './pages/WhyChooseUs';
import Templates from './pages/Templates';
import NotFound from './pages/NotFound';
import Template1 from './components/Templates/Template1/Template1';
import Template2 from './components/Templates/Template2/Template2';
import Template3 from './components/Templates/Template3/Template3';
import Template4 from './components/Templates/Template4/Template4';
import Template5 from './components/Templates/Template5/Template5';
import Certificate from './pages/Certificate';
import Accelerate from './pages/Accelerate';

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/features' exact={true}>
            <Features />
          </Route>
          <Route path='/pricing' exact={true}>
            <Pricing />
          </Route>
          <Route path='/services' exact={true}>
            <Services />
          </Route>
          <Route path='/demo' exact={true}>
            <Demo />
          </Route>
          <Route path='/work-submission' exact={true}>
            <WorkSubmission />
          </Route>
          <Route path='/about-us' exact={true}>
            <AboutUs />
          </Route>
          <Route path='/eula' exact={true}>
            <Eula />
          </Route>
          <Route path='/privacy-policy' exact={true}>
            <PrivacyPolicy />
          </Route>
          <Route path='/terms-conditions' exact={true}>
            <TermsAndConditions />
          </Route>
          <Route path='/blogs' exact={true}>
            <Blogs />
          </Route>
          <Route path='/blogs/:title' exact={true}>
            <BlogsContent />
          </Route>
          <Route path='/calendar' exact={true}>
            <Calendar />
          </Route>
          <Route path='/ltd' exact={true}>
            <LandingPage />
          </Route>
          <Route path='/ezcolab-vs-c1' exact={true}>
            <Comparison />
          </Route>
          <Route path='/outsources' exact={true}>
            <Features />
          </Route>
          <Route path='/refund-policy' exact={true}>
            <Refund />
          </Route>
          <Route path='/why-choose-us' exact={true}>
            <WhyChooseUs />
          </Route>
          <Route path='/work' exact={true}>
            <Templates />
          </Route>
          <Route path='/work/template1' exact={true}>
            <Template1 />
          </Route>
          <Route path='/work/template2' exact={true}>
            <Template2 />
          </Route>
          <Route path='/work/template3' exact={true}>
            <Template3 />
          </Route>
          <Route path='/work/template4' exact={true}>
            <Template4 />
          </Route>
          <Route path='/work/template5' exact={true}>
            <Template5 />
          </Route>
          <Route path='/c' exact={true}>
            <Certificate />
          </Route>
          <Route path='/d' exact={true}>
            <Accelerate />
          </Route>
          <Route path='/*' >
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
