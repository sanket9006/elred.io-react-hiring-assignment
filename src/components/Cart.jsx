import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    content: {
        textAlign: 'center',
    },
    image: {
        width: '200px',
        height: '200px',
    },
    text: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '16px',
    },
}));

const Cart = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img className={classes.image} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3-EEg5NCer5dWfWSw1vVJiaeYAFRdOOaCov7AURdvDhxYw2Ox" alt="Cart" />
                <Typography variant="body1" className={classes.text}>
                    Items not added
                </Typography>
            </div>
        </div>
    );
};

export default Cart;
