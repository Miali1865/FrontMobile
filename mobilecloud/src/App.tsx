import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, square, chatbubbleEllipsesOutline, home, addCircleOutline, settingsOutline, arrowBackCircle, arrowBackOutline, notificationsCircle, notificationsCircleOutline, notifications, logOutOutline } from 'ionicons/icons';
import { Login } from './components/login/login';
import Inscription from './components/login/inscription';
import Ajoutannonce from './components/annonce/ajoutannonce';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
import './theme/floating-tab-bar.css';
import Profil from './components/profil/Profil';
import Detailannonce from './components/annonce/Detailannonce';
import Modifierannonce from './components/annonce/modifierannonce';
import Reglage from './components/reglage/Reglage';
import userpic from './assets/cover.png'
import Notification from './pages/Notification';
import Statusannonce from './components/annonce/Statusannonce';

setupIonicReact();

const App: React.FC = () => (
  <IonApp className="custom-background">
    <IonReactRouter>

      {/* <IonToolbar className="center-buttons">
      {/* <IonToolbar className="center-buttons">
    <IonIcon aria-hidden="true" icon={arrowBackOutline} />
    <IonButtons slot="start">
    <IonBackButton></IonBackButton>
    </IonButtons>
    <IonTitle><img src={userpic} /></IonTitle>
    <IonButtons slot="end">
      <IonButton> <IonIcon aria-hidden="true" icon={logOutOutline} style={{ color: '#a45dff'}} /> </IonButton>
    </IonButtons>
  </IonToolbar> */}

      <IonToolbar className="center-buttons">
        <IonButtons slot="start">
          <IonButton>Start</IonButton>
        </IonButtons>
        <IonTitle><img src={userpic} /></IonTitle>
        <IonButtons slot="end">
          <IonButton>End</IonButton>
        </IonButtons>
      </IonToolbar>


      <IonRouterOutlet>
        {/* <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/inscription">
            <Inscription />
          </Route>

          <Route exact path="/ajoutannonce">
            <Ajoutannonce />
          </Route>

          <Route exact path="/profil">
            <Profil />
          </Route>

          <Route exact path="/detailannonce">
            <Detailannonce />
          </Route>

          <Route exact path="/modifierannonce">
            <Modifierannonce />
          </Route>

          <Route exact path="/reglage">
            <Reglage />
          </Route>


 */}

        <Route exact path="/" component={Login} ></Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/profil">
          <Profil />
        </Route>

        <Route exact path="/ajoutannonce">
          <Ajoutannonce />
        </Route>

        <Route exact path="/inscription">
          <Inscription />
        </Route>

        <Route exact path="/detailannonce">
          <Detailannonce />
        </Route>

        <Route exact path="/modifierannonce">
          <Modifierannonce />
        </Route>

        <Route exact path="/Notification">
          <Notification />
        </Route>



        <Route exact path="/statusannonce">
          <Statusannonce />
        </Route>


      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;