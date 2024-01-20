import { Grid } from "@mui/material";
import { Container } from "semantic-ui-react";
import Myannonce from "../annonce/Myannonce";
import './profil.css'

const Allannonce: React.FC = () => {

    const idallannnonce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (


        <Grid container spacing={4}>
            {idallannnonce.map((id) => (
                <Myannonce key={id} index={id}></Myannonce>
            ))}
        </Grid>


    );

};
export default Allannonce;



