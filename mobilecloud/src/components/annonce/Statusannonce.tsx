import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonLabel, IonNote, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton } from "@ionic/react";
import TabBar from "../template/TabBar";
import { Grid } from "@mui/material";
import './button.css'


const Statusannonce: React.FC = () => {

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

            <IonPage className="custom-background">

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
                            <br />
                            <center><IonCardTitle className="post-title"><h3> {post.title}</h3></IonCardTitle></center>
                            <br />
                        </IonCardHeader>





                        <Grid container spacing={1} rowSpacing={0.1} alignContent={"center"}>

                            <Grid item xs={12} md={12}>

                                <center><button className="bn632-hover bn26" >Valider vente</button>
                                </center>
                            </Grid>


                        </Grid>

                    </IonCard>

                </IonContent >


                <TabBar></TabBar>



            </IonPage >
        </>
    );
}
export default Statusannonce;
