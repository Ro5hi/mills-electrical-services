import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles.css'

function App() {

  const Home = React.lazy(() => import('./components/Home'))

  return (
    <div className="">
      <Suspense fallback={""}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
        </Switch>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;