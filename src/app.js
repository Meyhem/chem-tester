import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { Setup } from './pages/setup'
import { Quiz } from './pages/quiz'
import { Summary } from './pages/summary'
import { Evaluation } from './pages/evaluation'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Setup} />
        <Route exact path="/quiz/:order" component={Quiz} />
        <Route exact path="/prehlad" component={Summary} />
        <Route exact path="/hodnotenie" component={Evaluation} />
        <Route component={Setup} />
      </Switch>
    </Router>
  )
}
