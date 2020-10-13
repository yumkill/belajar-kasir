import React from 'react';

//material ui
import Button from '@material-ui/core/Button';

//import style
import useStyles from './style';

function Registrasi(){
    
    const classes = useStyles();

    return <>
    <h1 className={classes.blue}>Halaman Registrasi</h1>
    <Button color="primary" variant="contained" >Klik Disini</Button>
    </>
}

export default Registrasi;