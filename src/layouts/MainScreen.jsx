import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import TopMenuBar from '../components/TopMenuBar';
import VerticalMenuBar from '../components/VerticalMenuBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh', // Set minimum height to fill the viewport
        flexDirection: 'column',
        backgroundColor: '#ECEFF6'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: 'white',
        borderRadius: '18px',

    },
    sidebar: {
        width: 240,
        minWidth: 240,
        height: 'calc(100vh - 64px)',
        borderRadius: '18px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
    },
    mainContentContainer: {
        padding: "20px",
        flexGrow: 1,
        display: 'flex',
        gap: '20px', // Add the desired spacing between sidebar and main content
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
            <div className={classes.mainContentContainer}>
                {/* Sidebar */}
                <div className={classes.sidebar}>
                    <VerticalMenuBar />
                </div>

                {/* Main Content */}
                <main className={classes.content}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {children}
                        </Grid>
                    </Grid>
                </main>
            </div>
        </div>
    );

};

export default Layout;
