import { IonButton, IonContent, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import styles from '../login/login.module.scss'
import classNames from 'classnames';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, InputAdornment } from '@mui/material';
import TabBar from "../template/TabBar";


import './button.css'
import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
export interface AjoutannonceProps {
    className?: string;
}


const MarqueOptions = [
    { key: 'Mercedes-Benz', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
    { key: 'Ferrari', text: 'Ferrari', value: 'Ferrari' },
    { key: 'Audi', text: 'Audi', value: 'Audi' }
]

const ModeleOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]

const CarburantOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const VolantOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const CouleurOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const RegionOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]
const TransmissionOptions = [
    { key: 'Mustang ', text: 'Mustang ', value: 'Mustang ' },
    { key: 'Golf ', text: 'Golf ', value: 'Golf ' },
    { key: 'Rogue  ', text: 'Rogue  ', value: 'Rogue  ' },
]



const Ajoutannonce: React.FC<AjoutannonceProps> = ({ className }: AjoutannonceProps) => {
    const [marque, setmarque] = React.useState('');
    const [modele, setmodele] = React.useState('');
    const [carburant, setcarburant] = React.useState('');
    const [volant, setvolant] = React.useState('');
    const [couleur, setcouleur] = React.useState('');
    const [region, setregion] = React.useState('');
    const [transmission, settransmission] = React.useState('');


    const handleChangesetmarque = (event: SelectChangeEvent) => {
        setmarque(event.target.value);
    };
    const handleChangesetModele = (event: SelectChangeEvent) => {
        setmodele(event.target.value);
    };
    const handleChangesetcarburant = (event: SelectChangeEvent) => {
        setcarburant(event.target.value);
    };
    const handleChangesetvolant = (event: SelectChangeEvent) => {
        setvolant(event.target.value);
    };
    const handleChangesetcouleur = (event: SelectChangeEvent) => {
        setcouleur(event.target.value);
    };
    const handleChangesetregion = (event: SelectChangeEvent) => {
        setregion(event.target.value);
    };
    const handleChangesettransmission = (event: SelectChangeEvent) => {
        settransmission(event.target.value);
    };


    // const [imagesources, setImagesources] = useState<string | undefined>(undefined);


    // const takePicture = async () => {
    //     try {

    //         const image = await Camera.getPhoto({
    //             quality: 90,
    //             allowEditing: false,
    //             resultType: CameraResultType.Base64,
    //             source: CameraSource.Prompt
    //         });

    //         const imagePrefix = `data:image/${image.format};base64,`; // Utilisez image.format pour obtenir le format réel (png, jpeg, etc.)
    //         setImagesources(`${imagePrefix}${image.base64String}`);
    //         console.log(imagesources);
    //     } catch (error) {
    //         console.error("Erreur lors de la capture de l'image :", error);
    //     }
    // };

    const [imagesources, setImagesources] = useState<string[]>([]);
    const takePictures = async () => {
        try {
            const photos = await Camera.pickImages({
                width: 800,
                height: 600,
                limit: 3,
            });

            // Mettez à jour l'état avec les nouvelles images
            setImagesources(photos.photos.map((photo) => photo.webPath));
        } catch (error) {
            console.error("Erreur lors de la capture de l'image :", error);
        }
    };


    return (
        <IonPage>
            <IonContent fullscreen>
                <form action="" method="post">
                    <div className={classNames(styles.root, className)}>
                        <h1 className={styles.title}>Ajoutez votre nouvelle annonce : </h1>

                        <Grid container spacing={1} rowSpacing={0.1}>

                            <Grid item xs={12} md={12}>

                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Marque</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={marque}
                                        onChange={handleChangesetmarque}
                                        autoWidth
                                        label="Marque"
                                    >

                                        {MarqueOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Modele</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={modele}
                                        onChange={handleChangesetModele}
                                        autoWidth
                                        label="Modele"
                                    >

                                        {ModeleOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>


                            <Grid item xs={12} md={12}>
                                <TextField sx={{ m: 1, minWidth: 300 }}
                                    required
                                    id="outlined-required"
                                    label="Matricule"
                                    type='text'
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField sx={{ m: 1, minWidth: 300 }}
                                    required
                                    id="outlined-required"
                                    label="Annee"
                                    type='number'
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField sx={{ m: 1, minWidth: 300 }}
                                    required
                                    id="outlined-required"
                                    label="kilometrage (km)"
                                    type='number'
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Carburant</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={carburant}
                                        onChange={handleChangesetcarburant}
                                        autoWidth
                                        label="Carburant"
                                    >

                                        {CarburantOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Volant</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={volant}
                                        onChange={handleChangesetvolant}
                                        autoWidth
                                        label="Volant"
                                    >

                                        {VolantOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Couleur</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={couleur}
                                        onChange={handleChangesetcouleur}
                                        autoWidth
                                        label="Couleur"
                                    >

                                        {CouleurOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Transmission</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={transmission}
                                        onChange={handleChangesettransmission}
                                        autoWidth
                                        label="Transmission"
                                    >

                                        {TransmissionOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Region</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={region}
                                        onChange={handleChangesetregion}
                                        autoWidth
                                        label="Region"
                                    >

                                        {RegionOptions.map((option) => (
                                            <MenuItem key={option.key} value={option.value}>
                                                {option.text}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {/* Description : */}
                                <TextField sx={{ m: 1, minWidth: 300 }}
                                    id="outlined-textarea"
                                    label="Description"
                                    placeholder="Aucun devoirs , spacieuse ..."
                                    multiline
                                />
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {/* Prix */}
                                <TextField sx={{ m: 1, minWidth: 300 }}
                                    required
                                    label="Prix"
                                    id="outlined-start-adornment"
                                    type='number'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <i>Ar</i>
                                        </InputAdornment>,
                                    }}
                                />
                            </Grid>

                            {/* Photo */}
                            <Grid item xs={12} md={12}>
                                {/* <IonButton onClick={takePicture}>Camera</IonButton>
                            {imagesources && <img src={imagesources} alt="Captured Image" />} */}

                                <h5>Ajouter image (max : 5)</h5>

                                {imagesources.map((src, index) => (
                                    <img key={index} src={src} alt={`Captured Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                                ))}
                                <IonButton onClick={takePictures}>+</IonButton>


                            </Grid>

                            <Grid item xs={12} md={12}>

                                <button className="bn632-hover bn26" >Envoyer</button>

                            </Grid>


                        </Grid>
                    </div>
                </form>
            </IonContent>
            <TabBar></TabBar>

        </IonPage>

    );
};

export default Ajoutannonce;







