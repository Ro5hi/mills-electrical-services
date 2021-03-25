import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles.css'

function App() {
    
  const Home = React.lazy(() => import('./components/Home'))
  const About = React.lazy(() => import('./components/About'))
  const Contact = React.lazy(() => import('./components/Contact'))
  
  return (
    <>
      <div className="">
        <Suspense fallback={""}>
        <BrowserRouter>
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' exact />
            <Route component={Contact} path='/contact' exact />
          </Switch>
        </BrowserRouter>
        </Suspense>
      </div>
    </>
  );
};

export default App;