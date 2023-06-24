import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaHome, FaShoppingBasket, FaListAlt, FaHeart, FaPlus } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    logo: {
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    menuItem: {
        paddingLeft: theme.spacing(2),
    },
}));

const menuOptions = [
    { label: 'Dashboard', icon: <FaHome /> },
    { label: 'Orders', icon: <FaShoppingBasket /> },
    { label: 'All Products', icon: <FaListAlt /> },
    { label: 'Favourites', icon: <FaHeart /> },
    { label: 'New Arrival', icon: <FaPlus /> },
];

const VerticalMenuBar = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.logo}>
                <Typography variant="h6">Your Logo</Typography>
            </div>
            <List component="nav">
                {menuOptions.map((option, index) => (
                    <ListItem button key={index} className={classes.menuItem}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.label} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default VerticalMenuBar;
