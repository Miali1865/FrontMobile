import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import './button.css'
import NumberWithSpaces from "./NumberWithSpaces";
interface MyModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const Validation: React.FC<MyModalProps> = ({ isOpen, setIsOpen }) => {

    return (
        <>
            <IonModal isOpen={isOpen} initialBreakpoint={1} breakpoints={[0, 1]}>

                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Validation de Vente</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setIsOpen(false)}>Annuler</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>
                        Vous etes sur le point de valider votre vente de <strong> 12116516 Ar</strong> pour (Mr/Mme) ()
                    </p>
                    <p>
                    </p>
                    <p>
                        {/* <center>
                            <a href="/buttons/62" className="bn62">
                                <strong> 12116516 Ar</strong>
                            </a>
                        </center> */}
                        <NumberWithSpaces number={1211651464645466}></NumberWithSpaces>
                    </p>
                </IonContent>
            </IonModal >
        </>
    );
}

export default Validation;
