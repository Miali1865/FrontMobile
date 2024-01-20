import React from 'react';
import classNames from 'classnames';
import { Button, Icon, Input } from 'semantic-ui-react';
import styles from './login.module.scss';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Grid, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';

export interface InscriptionProps {
    className?: string;
}

const Inscription: React.FC<InscriptionProps> = ({ className }: InscriptionProps) => {
    return (
        <IonPage>
            <IonContent fullscreen>

                <div className={classNames(styles.root, className)}>
                    <h1 className={styles.title}>Inscription</h1>

                    <form action='http://localhost:8080/mialivola' method='post'>
                        <Grid container spacing={1} rowSpacing={3}>

                            <Grid item xs={12} md={12}>

                                <label>Nom :</label><br />

                                <Input iconPosition='left' required className='nom'>
                                    <Icon name='user' />
                                    <input type='text' name='nom' />

                                </Input><br />
                            </Grid>


                            <Grid item xs={12} md={12}>
                                <label>Prenoms :</label><br />

                                <Input iconPosition='left' required className='prenoms'>
                                    <Icon name='user' />
                                    <input type='text' name='prenoms' />

                                </Input><br />
                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Date de naissance :</label><br />

                                <Input iconPosition='left' required className='date'>
                                    <Icon name='user' />
                                    <input type='date' name='date' />
                                </Input><br />

                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Telephone :</label><br />

                                <Input iconPosition='left' required className='telephone'>
                                    <Icon name='phone' />
                                    <input type='text' name='telephone' />
                                </Input><br />

                            </Grid>


                            <Grid item xs={12} md={12}>


                                <label>Email :</label><br />

                                <Input iconPosition='left' required placeholder='example@gmail.com' className='email'>
                                    <Icon name='at' />
                                    <input type='mail' name='email' />
                                </Input><br />

                            </Grid>
                            <Grid item xs={12} md={12}>

                                <label>Mot de passe :</label><br />
                                <Input
                                    label={{ icon: 'asterisk' }}
                                    labelPosition='left corner'
                                    type='password'
                                    required
                                    name='mdp1'
                                /> <br />
                            </Grid>


                            <Grid item xs={12} md={12}>

                                <label>Verification de mot de passe :</label><br />
                                <Input
                                    label={{ icon: 'asterisk' }}
                                    labelPosition='left corner'
                                    type='password'
                                    name='mdp2'
                                    required
                                /> <br />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <Button inverted color='blue' type='submit'>
                                    S'inscrire
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </IonContent>

        </IonPage >

    );
}

export default Inscription;
