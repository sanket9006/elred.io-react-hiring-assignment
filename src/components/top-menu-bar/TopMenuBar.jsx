import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(2),
        flexGrow: 1,
    },
    userIcon: {
        fontSize: '1.5rem', // Adjust the size of the user icon
        marginRight: theme.spacing(0.5), // Add a small right margin
    },
}));

const TopMenuBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                    Your Logo
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <FaUser className={classes.userIcon} />
                        {/* User email and name */}
                        <Typography variant="body1">user@example.com</Typography>
                        <Typography variant="body2" color="textSecondary">
                            John Doe
                        </Typography>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenuBar;
