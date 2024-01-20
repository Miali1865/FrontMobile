import { IonButton, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton } from "@ionic/react";

// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IonIcon } from "@ionic/react";
import { callOutline, mailOpen } from 'ionicons/icons';
import { createTheme } from '@mui/material/styles';
import './profil.css'
import userpic from '../../assets/utilisateur.png'

import { useState } from 'react';

import Myannonce from "../annonce/Myannonce";
import Allannonce from "./Allannonce";
import TabBar from "../template/TabBar";
import Venduannonce from "./Venduannonce";



const Profil: React.FC = () => {

    const [selectedSegment, setSelectedSegment] = useState('all');

    const handleSegmentChange = (e: CustomEvent) => {
        setSelectedSegment(e.detail.value);
    };


    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };


    // TODO remove, this demo shouldn't need to reset the theme.
    const defaultTheme = createTheme();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (

        <IonPage className="custom-background">

            <IonContent fullscreen>

                <IonRefresher slot="fixed" onIonRefresh={refresh}>

                    <IonRefresherContent></IonRefresherContent>

                </IonRefresher>

                <main>

                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 2,
                            pb: 1,
                        }}
                    >
                        <center>
                            <img src={userpic} alt="User" style={{ width: '70px' }} />
                        </center>
                        <Container maxWidth="sm">
                            <Typography
                                component="h6"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Album layout
                            </Typography>

                            <center>
                                <a href="tel:+261328645925">
                                    <IonButton size="small" style={{ marginRight: '5px', '--ion-color-primary': '#a45dff' }}>
                                        <IonIcon icon={callOutline} />
                                        +261328645925
                                    </IonButton>
                                </a>

                                <a href="mailto:example@gmail.com">

                                    <IonButton size="small" style={{ '--ion-color-primary': '#a45dff' }}>
                                        <IonIcon icon={mailOpen} />
                                        example@gmail.com
                                    </IonButton>
                                </a>

                            </center>

                        </Container>
                        <IonSegment value={selectedSegment} onIonChange={handleSegmentChange} color="light">
                            <IonSegmentButton value="all" color={selectedSegment === 'all' ? 'white' : 'light'} style={{ border: selectedSegment === 'all' ? '1px solid blue' : '1px solid #9bc8ea' }}>
                                <IonLabel style={{ color: selectedSegment === 'all' ? 'blue' : '#9bc8ea' }}>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="disponible" color={selectedSegment === 'disponible' ? 'white' : 'light'} style={{ border: selectedSegment === 'disponible' ? '1px solid blue' : '1px solid #9bc8ea' }}>
                                <IonLabel style={{ color: selectedSegment === 'disponible' ? 'blue' : '#9bc8ea' }}>Disponible</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="vendues" color={selectedSegment === 'vendues' ? 'white' : 'light'} style={{ border: selectedSegment === 'vendues' ? '1px solid blue' : '1px solid #9bc8ea' }}>
                                <IonLabel style={{ color: selectedSegment === 'vendues' ? 'blue' : '#9bc8ea' }}>Vendues</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>

                    </Box >

                    {/*  */}



                    {selectedSegment === 'all' && <div>
                        <Container sx={{ py: 2 }} maxWidth="md">
                            {/* <Allannonce></Allannonce> */}
                            {/* <Myannonce></Myannonce> */}
                        </Container>

                    </div>}
                    {selectedSegment === 'disponible' && <div>
                        <Container sx={{ py: 2 }} maxWidth="md">
                            <Allannonce></Allannonce>
                        </Container>

                    </div>}
                    {selectedSegment === 'vendues' && <div>
                        <Container sx={{ py: 2 }} maxWidth="md">
                            {/* <Venduannonce></Venduannonce> */}
                        </Container>
                    </div>}





                </main >
            </IonContent >

            <TabBar></TabBar>



        </IonPage >
    );
};

export default Profil;


