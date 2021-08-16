import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import BlogsPage from './Pages/BlogsPage'
import ContactPage from './Pages/ContactPage'
import PortfoliosPage from './Pages/PortfoliosPage'
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled>
          <Switch>
            <Route path='/' exact>
              <HomePage/>
            </Route>
            <Route path='/about' exact>
              <AboutPage/>
            </Route>
            <Route path='/project' exact>
              <ProjectPage/>
            </Route>
            <Route path='/resume' exact>
              <ResumePage/>
            </Route>
            <Route path='/portfolios' exact>
              <PortfoliosPage/>
            </Route>
            <Route path='/blogs' exact>
              <BlogsPage/>
            </Route>
            <Route path='/contact' exact>
              <ContactPage/>
            </Route>

          </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main `
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

`

export default App;
