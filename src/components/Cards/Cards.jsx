import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* Infected Card */}
                <Grid item component={Card}>
                    <CardContent>    
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Infected Card */}
                {/* Recovered Card */}
                <Grid item component={Card}>
                    <CardContent>    
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of recovered from COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Recovered Card */}
                {/* Deaths Card */}
                <Grid item component={Card}>
                    <CardContent>    
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Deaths Card */}
            </Grid>
        </div>
    )
}

export default Cards;