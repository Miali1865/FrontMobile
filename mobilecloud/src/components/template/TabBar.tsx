import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { Fab } from "@mui/material";
import { addCircleOutline, cogOutline, notificationsCircleOutline, notificationsOutline, person, personOutline } from "ionicons/icons";
import './tabbar.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';


const TabBar: React.FC = () => {
    return (
        <>
            {/* <IonTabBar slot="bottom" >
                <IonTabButton className="tab-button" tab="profil" href="/profil">
                    <IonIcon aria-hidden="true" icon={person} />
                    <IonLabel>Profil</IonLabel>
                </IonTabButton>
                <IonTabButton className="tab-button" tab="ajoutannonce" href="/ajoutannonce">
                    <IonIcon aria-hidden="true" icon={addCircleOutline} />
                    <IonLabel>Ajout</IonLabel>
                </IonTabButton>
                <IonTabButton className="tab-button" tab="tab3" href="/Notification">
                    <IonIcon aria-hidden="true" icon={notificationsCircleOutline} />
                    <IonLabel>Notification</IonLabel>
                </IonTabButton>
            </IonTabBar>
 */}

            <nav className="menu">
                <a className="nav-item" href="#"><IonIcon aria-hidden="true" icon={personOutline} size="large" /></a>

                <input type="checkbox" name="" className="checkbox" />
                {/* <div className="checkbox-list">
                    <a className="nav-item" href="#"><i className="icon-magnifier icons"></i><span className="tab-title">Search</span></a>
                    <a className="nav-item" href="#"><i className="icon-bell icons"></i><span className="tab-title">Notifications</span></a>
                    <a className="nav-item" href="#"><i className="icon-heart icons"></i><span className="tab-title">Favorites</span></a>
                </div> */}

                <a className="nav-item" href="Notification"><IonIcon aria-hidden="true" icon={notificationsOutline} size="large" /></a>
            </nav>



        </>
    );
};
export default TabBar;