import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import TopMenuBar from '../components/TopMenuBar';
import VerticalMenuBar from '../components/VerticalMenuBar';
import Cart from '../components/Cart';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh', // Set minimum height to fill the viewport
        flexDirection: 'column',
        backgroundColor: '#ECEFF6'
    },
    appBar: {
        zIndex: 10,
    },
    section: {
        borderRadius: '18px',
        backgroundColor: 'white',
        padding: '18px',
        minHeight: 'calc(100vh - 64px)',
        maxHeight: 'calc(100vh - 64px)',
        overflow: 'auto',
    },
    section1: {
        marginLeft: '18px',
        marginRight: '9px',
    },
    section2: {
        marginLeft: '9px',
        marginRight: '9px',
    },
    section3: {
        marginLeft: '9px',
        marginRight: '18px',
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Top Bar */}
            <AppBar position="static" className={classes.appBar}>
                <TopMenuBar />
            </AppBar>

            {/* Main Content container */}
            <Grid container sx={{ marginTop: '20px', marginBottom: '20px' }} spacing={1}>
                {/* Section 1 */}
                <Grid item xs={2.5}>
                    <div className={`${classes.section} ${classes.section1}`}>
                        <VerticalMenuBar />
                    </div>
                </Grid>

                {/* Section 2 */}
                <Grid item xs={6.5}>
                    <div className={`${classes.section} ${classes.section2}`}>
                        {children}
                    </div>
                </Grid>

                {/* Section 3 */}
                <Grid item xs={3}>
                    <div className={`${classes.section} ${classes.section3}`}>
                        <Cart />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};


export default Layout;
