
import './App.css';

import { BrowserRouter as Router , NavLink, Route , Switch } from 'react-router-dom'
import Accounts from './component/pages/Manage-Account/Accounts';

import Statements from './component/pages/Settings/Statements';

import Login from './component/Login/Login';
import Signup from './component/Signup/Signup'
import Dashboard from './component/pages/Dashboard/Dashboard';
import Clients from './component/pages/Manage-Account/Clients';
import ImportExport from './component/pages/Manage-Account/ImportExport';
import Report from './component/pages/Reports/Report';

import AssessmentTest from './component/pages/Assessment/Assessment-Test/MainAssesment/AssessmentTest';
import TermsConditions from './component/pages/Assessment/Assessment-Test/Terms & Condions/Terms_Conditions';
import AdminStatement from './component/pages/Assessment/Admin-Statement/AdminStatement';
import TestResult from './component/pages/Assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult';
import CertificationPage from './component/pages/Assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage';

function App() {

  

  return (
    <Router>

      <div class="wrapper">

          {/* <Home/> */}

          

        <Switch>
            
        <Route exact path="/">
            <Login />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/accounts">
            <Accounts />
          </Route>

          <Route path="/assessment-test">
            <AssessmentTest/>
          </Route>

          
          <Route path="/terms_conditions">
            <TermsConditions/>
          </Route>

          <Route path="/test-result">
            <TestResult/>
          </Route>
           
          <Route path="/admin-statement">
            <AdminStatement/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route path="/statements">
            <Statements />
          </Route>
              
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/clients">
            <Clients />
          </Route>

          <Route path="/import-export">
            <ImportExport />
          </Route>

          <Route path="/reports">
            <Report/>
          </Route>

          <Route path="/test-results">
            <TestResult/>
          </Route>

          <Route path="/certification-page">
            <CertificationPage/>
          </Route>

        

    </Switch>

        {/* <Dashboard/>
        <Footer/> */}

      </div>
    </Router>
  );
}

export default App;
