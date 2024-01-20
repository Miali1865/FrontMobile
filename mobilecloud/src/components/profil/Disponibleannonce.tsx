import { Grid } from "semantic-ui-react";
import Myannonce from "../annonce/Myannonce";


const Disponibleannonce: React.FC = () => {

    const idallannnonce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <Grid container spacing={4}>
                {idallannnonce.map((id) => (
                    <Myannonce></Myannonce>
                ))}
            </Grid>

        </>
    );

};
export default Disponibleannonce;
