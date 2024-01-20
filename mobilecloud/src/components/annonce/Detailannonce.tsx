import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonNote, IonPage, IonRefresher, IonRefresherContent, IonRow } from "@ionic/react";
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { bookmarkOutline, shareOutline } from "ionicons/icons";

import carburant from "../../assets/gasoil2.png"
import volant from "../../assets/volant2.png"
import transmission from "../../assets/transmission.png"
import color from "../../assets/color.png"
import region from "../../assets/region.png"

import TabBar from "../template/TabBar";

const Detailannonce: React.FC = () => {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const post = {
        id: 1,
        image: "https://source.unsplash.com/random?wallpapers",
        author: "(nom utilisateur)",
        date: "12-01-2024",
        title: "Audi RS4",
        content: "lorem Ips",
        authorImage: "https://source.unsplash.com/random?wallpapers"
    }


    return (
        <>
            <IonPage>
                <IonContent fullscreen>
                    <IonRefresher slot="fixed" onIonRefresh={refresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>

                    <IonCard>
                        <img src={post.image} alt="main post" className="post-image" />

                        <IonCardHeader>
                            <IonRow className="ion-align-items-center ion-justify-content-between">

                                <IonRow className="ion-align-items-center ion-justify-content-between">
                                    <IonCardSubtitle className="ion-no-margin ion-no-padding ion-margin-start">
                                        {post.author}
                                    </IonCardSubtitle>
                                </IonRow>
                                <IonNote>{post.date}</IonNote>
                            </IonRow>
                            <IonCardTitle className="post-title">{post.title}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography variant="subtitle1" paragraph>
                                            <strong> Matricule : </strong> 2022
                                            <br /><strong> Annee : </strong> 2022
                                            <br /><strong> Moteur : </strong> 2022
                                            <br /><strong> Kilometrage : </strong> 2022
                                            <br /><strong> Climatisation : </strong> 2022
                                            <br /><strong> Moteur : </strong> 2022
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white   ' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={carburant} alt="Carburant" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Carburant" secondary="gasoil" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={volant} alt="volant" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Volant" secondary="Droite" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={transmission} alt="transmission" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Transmission" secondary="July 20, 2014" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={color} alt="transmission" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Couleur" secondary="Jan 9, 2014" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img src={region} alt="region" style={{ width: '28px', height: '28px' }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Region" secondary="Jan 7, 2014" />
                                </ListItem>
                                <ListItem>
                                    <Button variant="contained" color="success" style={{ width: '90%', height: '50px' }}>
                                        <strong> 154115 Ar </strong>
                                    </Button>
                                </ListItem>

                            </List>


                        </IonCardContent>
                    </IonCard>


                </IonContent >
                <TabBar></TabBar>

            </IonPage >

        </>
    );
}
export default Detailannonce;

