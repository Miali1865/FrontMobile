import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { green } from '@mui/material/colors';
import { color } from '@mui/system';
import { arrowForwardOutline, callOutline, chatbubbleOutline, personCircleOutline } from 'ionicons/icons';
import styles from "./View.module.scss";
import TruncateText from './TruncateText';
import TabBar from '../components/template/TabBar';

const Notification = () => {

	const polls = [
		{ color: "green", envoyeur: "nom envoyeur", message: "azertyui", date: "2024-01-13", tel: "+261 52 595 14", email: "dsvsd@dffdb" },
		{ color: "green", envoyeur: "nom envoyeur", message: "azertyui", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" },
		{ color: "green", envoyeur: "nom envoyeur", message: "wqedrfghbnfvihbviruehirfiuefiehfiuhweif", date: "2024-01-13" }
	]
	const refresh = (e: CustomEvent) => {
		setTimeout(() => {
			e.detail.complete();
		}, 3000);
	};

	return (
		<IonPage>
			<IonContent fullscreen>
				<IonRefresher slot="fixed" onIonRefresh={refresh}>

					<IonRefresherContent></IonRefresherContent>

				</IonRefresher>


				{polls.map(poll => {

					return (

						<IonCard className={`${styles.pollQuestion} animate__animated animate__fadeIn`} style={{ border: green }} routerDirection="forward">

							<IonRow className="ion-align-items-center">


								<IonCol size="1">
									<IonIcon icon={personCircleOutline} size='large' />
								</IonCol>

								<IonCol size="8">
									<IonCardHeader>
										<p><TruncateText text={poll.message} limit={30} /></p>
										<IonCardSubtitle>{poll.date}</IonCardSubtitle>
										<IonCardTitle>{poll.envoyeur}</IonCardTitle>

									</IonCardHeader>
								</IonCol>
								<IonCol size="1">
									<a href="tel:+261328645925">

										<IonButton style={{ color: green }} size='small'>
											Appeler
											<IonIcon icon={callOutline} />
										</IonButton>
									</a>
									<a href='mailto:'>
										<IonButton style={{ color: green }} size='small'>
											Discuter
											<IonIcon icon={chatbubbleOutline} />
										</IonButton>
									</a>
								</IonCol>
							</IonRow>
						</IonCard>
					);
				})}
			</IonContent>
			<TabBar></TabBar>

		</IonPage>
	);
};

export default Notification;
