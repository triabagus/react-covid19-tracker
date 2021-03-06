import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) { 
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* Infected Card */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>    
                        <Typography variant="body1" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.textInfected}>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Infected Card */}
                {/* Recovered Card */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>    
                        <Typography variant="body1" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.textRecovered}>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of recovered from COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Recovered Card */}
                {/* Deaths Card */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>    
                        <Typography variant="body1" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.textDeaths}>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
                    </CardContent>                   
                </Grid>                                        
                {/* Deaths Card */}
            </Grid>
        </div>
    )
}

export default Cards;