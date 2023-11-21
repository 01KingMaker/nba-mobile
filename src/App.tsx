import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import StatisticByTeam from './pages/StatisticByTeam'; // Import your StatisticByTeam component

/* ... (existing imports and setup) */

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Route for the home page */}
        <Route exact path="/teams">
          <Home />
        </Route>

        {/* Route for team statistics with dynamic ID */}
        <Route exact path="/teams/:id/stats">
          <StatisticByTeam />
        </Route>

        {/* Redirect the root path to "/home" */}
        <Route exact path="/">
          <Redirect to="/teams" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
