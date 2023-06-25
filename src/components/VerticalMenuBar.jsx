import React from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FaHome, FaShoppingBasket, FaListAlt, FaHeart, FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import routes from '../routes';

const useStyles = makeStyles((theme) => ({
    logoContainer: {
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        height: '80px',
        width: "80px",
        marginBottom: '20px',
    },
    listContainer: {
        minWidth: "100px"
    }
}));

const VerticalMenuBar = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
    };

    return (
        <>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png" alt="A.T. Inks" />
            </div>

            <List className={classes.listContainer} component="nav">
                {routes.map((option, index) => (
                    <ListItem button key={index} onClick={() => handleClick(option.path)}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText primary={option.label} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default VerticalMenuBar;
