import { IonButton, IonButtons, IonTitle, IonToolbar } from "@ionic/react";
import userpic from '../../assets/cover.png'
import './TooBar.css'

const ToolBar: React.FC = () => {
    return (
        <>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton>Start</IonButton>
                </IonButtons>
                <IonTitle><img src={userpic} /></IonTitle>
                <IonButtons slot="end">
                    <IonButton>End</IonButton>
                </IonButtons>
            </IonToolbar>

        </>
    );
};
export default ToolBar;