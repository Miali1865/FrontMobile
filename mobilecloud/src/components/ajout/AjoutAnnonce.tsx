import { IonContent, IonPage, IonRefresher, IonRefresherContent } from "@ionic/react";

const AjoutAnnonce: React.FC = () => {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage className="custom-background">
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
            </IonContent >
        </IonPage >
    );
};

export default AjoutAnnonce;