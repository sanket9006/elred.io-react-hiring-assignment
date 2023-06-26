/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField, Checkbox, Button, Drawer, Grid } from '@mui/material';
import Cart from './Cart';
import { loremIpsum } from '../utils/data';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '75%',
        flexShrink: 0,
        zIndex: 11
    },
    drawerPaper: {
        width: '65%',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        height: '100vh',
    },
    drawerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(2),
    },
    productImage: {
        width: '150px',
        border: '1px solid #ccc',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    productDetails: {
        marginBottom: theme.spacing(2),
    },
    selectField: {
        marginBottom: theme.spacing(2),
    },
    quantityField: {
        marginRight: theme.spacing(2),
    },
    addButton: {
        marginLeft: 'auto',
    },
}));

const ProductDetails = ({ product, close, open }) => {
    const classes = useStyles();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedPackaging, setSelectedPackaging] = useState('');
    const [quantity, setQuantity] = useState('');
    const [urgentOrder, setUrgentOrder] = useState(false);

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const handlePackagingChange = (event) => {
        setSelectedPackaging(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleUrgentOrderChange = (event) => {
        setUrgentOrder(event.target.checked);
    };

    const handleAddToCart = () => {
        // Add to cart logic goes here
        console.log('Adding to cart...');
    };

    return (
        <>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
                open={open}
                onClose={(event, reason = "backdropClick") => { close() }} // Close the drawer when clicking outside
            >
                <Grid container>
                    <Grid item xs={8}>
                        <div className={classes.drawerContainer}>
                            <div>
                                <Typography variant="h6">{product.itemDescription}</Typography>
                                <img
                                    src={
                                        product.productImages[0] ||
                                        'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
                                    }
                                    alt="Product"
                                    className={classes.productImage}
                                />
                                <div className={classes.productDetails}>
                                    <Typography variant="body1">#{product.itemNumber}</Typography>
                                    <Grid
                                        container
                                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                                    >
                                        <Typography variant="h6">{product.itemDescription}</Typography>
                                        <Typography>
                                            {product.currency.symbol}
                                            {product.variants[0].grossPrice}
                                        </Typography>
                                    </Grid>
                                    <Typography>{loremIpsum}</Typography>
                                </div>

                                <div className={classes.selectField}>
                                    <Typography variant="body1">Please select color description</Typography>
                                    <TextField
                                        select
                                        variant="outlined"
                                        fullWidth
                                        value={selectedColor}
                                        onChange={handleColorChange}
                                    >
                                        {product.variants.map((variant) => (
                                            <option key={variant.variantId} value={variant.colorCode}>
                                                {variant.colorDescription}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>

                                <div className={classes.selectField}>
                                    <Typography variant="body1">Please select packaging description</Typography>
                                    <TextField
                                        select
                                        variant="outlined"
                                        fullWidth
                                        value={selectedPackaging}
                                        onChange={handlePackagingChange}
                                    >
                                        {product.variants.map((variant) => (
                                            <option key={variant.variantId} value={variant.packingCode}>
                                                {variant.packingDescription}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>

                                <div className={classes.selectField}>
                                    <Typography variant="body1">Quantity:</Typography>
                                    <TextField
                                        type="number"
                                        variant="outlined"
                                        className={classes.quantityField}
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                    />
                                    <Checkbox checked={urgentOrder} onChange={handleUrgentOrderChange} />
                                    <Typography variant="body1">Need Urgent Order</Typography>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.addButton}
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Cart />
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );
};

export default ProductDetails;
