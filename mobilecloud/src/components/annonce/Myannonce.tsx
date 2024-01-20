import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonSearchbar, IonTabButton, IonTitle, IonToolbar, useIonActionSheet } from "@ionic/react";

import detail2 from '../../assets/detail2.png'
import modify2 from '../../assets/modify2.png'
import sale2 from '../../assets/sale2.png'
import Validation from "./Validation";



const annonce = { key: '1 ', marque: 'Audi ', modele: 'RS3 ', description: "qwsedrfghjedfghb sdfvgbhdfghdrfghrftg edgfbgnegrhtgrht dgfbgnhhgnh" };


const Myannonce: React.FC<{ index: number }> = ({ index }) => {


    function dismiss() {
        modal.current?.dismiss();
    }


    function canDismiss() {
        return new Promise<boolean>((resolve, reject) => {
            present({
                header: 'Annuler la vente',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'confirm',
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                    },
                ],
                onWillDismiss: (ev) => {
                    if (ev.detail.role === 'confirm') {
                        resolve(true);
                    } else {
                        reject();
                    }
                },
            });
        });
    }

    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);

    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const [present] = useIonActionSheet();

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);


    useEffect(() => {
        fetch("http://localhost:8100/detailannonce")
            .then(response => response.json())
            .then(data => { console.log(data); })
        // Appeler la fonction fetchData
    }, []); // Le tableau vide en tant que dépendance signifie que cela ne s'exécute qu'une seule fois après le montage du composant

    const idallannnonce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // ----------------------------------------------------------------
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}

                >
                    <CardMedia
                        component="div"
                        sx={{
                            // 16:9
                            pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random?wallpapers"
                    />
                    {/* <CardContent sx={{ flexGrow: 1 }} > */}
                    {/* <Typography gutterBottom variant="h5" component="h2">
                            <strong>{annonce.marque} {annonce.modele}</strong>
                        </Typography>
                        <Typography>
                            {annonce.description}
                        </Typography>
                    </CardContent> */}
                    <CardActions>

                        <Grid item xs={4} md={4}>
                            <Link to="/detailannonce">
                                <IonTabButton className="tab-button" href="/detailannonce">
                                    <img src={detail2} width={'48px'} ></img>
                                    <IonLabel>Detail</IonLabel>
                                </IonTabButton>
                            </Link>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            {/* <Link to="/modifierannonce"> */}
                            {/* <Button inverted color='yellow'>Modifier</Button> */}
                            <IonButton id={`open-modal-${index}`} expand="block">
                                Open
                            </IonButton>
                            <IonModal ref={modal} trigger={`open-modal-${index}`} canDismiss={canDismiss} presentingElement={presentingElement!}>
                                <IonHeader>
                                    <IonToolbar>
                                        <IonTitle>Vente du {annonce.modele}</IonTitle>
                                        <IonButtons slot="end">
                                            <IonButton onClick={() => dismiss()}>Annuler</IonButton>
                                        </IonButtons>
                                    </IonToolbar>
                                </IonHeader>
                                <IonContent className="ion-padding">
                                    <p>Selectionnez l'utilisateur avec qui vous avez trouver un accord</p>
                                    <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search user"></IonSearchbar>
                                    <IonList>
                                        {idallannnonce.map((id) => (


                                            <><IonItem onClick={() => setIsOpen(true)}>
                                                <IonAvatar slot="start">
                                                    <IonImg src="https://i.pravatar.cc/300?u=b" />
                                                </IonAvatar>
                                                <IonLabel>
                                                    <h2>Connor Smith</h2>
                                                    <p>Sales Rep</p>
                                                </IonLabel>
                                            </IonItem>
                                                <Validation isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
                                            </>
                                        ))};

                                    </IonList>

                                </IonContent>
                            </IonModal>
                            {/* </Link> */}

                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Link to="/statusannonce">
                                <Button inverted color='pink'>Etat</Button>
                            </Link>

                        </Grid>

                    </CardActions>
                </Card>
            </Grid >
        </>

    );
}
export default Myannonce;

