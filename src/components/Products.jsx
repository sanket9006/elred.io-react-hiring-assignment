/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft, AiFillLeftCircle } from 'react-icons/ai';
import { TextField } from '@mui/material';
import ProductDetails from './ProductDescription';

const useStyles = makeStyles((theme) => ({
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
        width: '150px',
        position: 'relative', // Add position relative to contain the absolute positioned icon
        minHeight: '220px'
    },
    image: {
        height: '120px',
        marginBottom: theme.spacing(1),
        display: 'block', // Ensure the image is a block element
        margin: '0 auto', // Center the image horizontally
    },
    favoriteIcon: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        cursor: 'pointer',
    },
    description: {
        display: '-webkit-box',
        overflow: 'hidden',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': 2,
        textOverflow: 'ellipsis',
    },
    productCard: {
        margin: '5px',
    },
}));

const Products = ({ selectedSubCategory, setselectedCategory, setSubSelectedCategory }) => {
    const classes = useStyles();
    const [selectedProduct, setSelectedProduct] = React.useState(null)
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [open, setopen] = React.useState(true)

    React.useEffect(() => {
        fetchProducts();
    }, [selectedSubCategory]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${selectedSubCategory}.json`
            );
            const data = await response.json();
            const { result } = data;
            setProducts(result);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Grid sx={{ marginBottom: 2 }} container spacing={2} alignItems="center">
                <Grid sx={{ display: 'flex', alignContent: 'center' }} item xs={8} >
                    <AiOutlineArrowLeft style={{ cursor: 'pointer' }} size={24} onClick={() => { setselectedCategory(null); setSubSelectedCategory(null) }} />
                    <Typography sx={{ paddingBottom: "15px", marginLeft: 2, cursor: 'pointer' }} variant="h6" onClick={() => { setselectedCategory(null); setSubSelectedCategory(null) }} gutterBottom> All Products</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        placeholder="Search products..."
                        variant="outlined"
                        fullWidth
                        size='small'
                    />
                </Grid>
            </Grid>

            {selectedProduct && <ProductDetails product={selectedProduct} open={open} close={() => { setopen(false) }} />}

            <div className={classes.productsContainer}>
                {isLoading ? (
                    <Typography variant="body1">Loading...</Typography>
                ) : products.length === 0 ? (
                    <Typography variant="h6">No products available</Typography>
                ) : (
                    products.map((product) => (
                        <div className={classes.productCard} key={product.productId} onClick={() => {
                            setopen(true)
                            setSelectedProduct(product)
                        }}>
                            <ProductCard product={product} />
                        </div>
                    ))
                )}
            </div>

        </div >
    );
};

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleImageError = (event) => {
        event.target.src = "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"; // Use the stored random image URL as fallback
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={classes.card}>
            <img
                className={classes.image}
                src={product.productImages[0] || "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"}
                alt={product.itemDescription}
                onError={handleImageError}
            />
            {isFavorite ? (
                <AiFillHeart
                    className={classes.favoriteIcon}
                    size={24}
                    color="red"
                    onClick={handleFavoriteClick}
                />
            ) : (
                <AiOutlineHeart
                    className={classes.favoriteIcon}
                    size={24}
                    onClick={handleFavoriteClick}
                />
            )}

            <Typography variant="body1">{product.itemDescription}</Typography>
            <Typography variant="caption" className={classes.description}>
                {product.itemDescription} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nec tortor nec nunc fringilla vehicula. Phasellus sollicitudin mauris eu
                pellentesque tempus.
            </Typography>
        </div>
    );
};


export default Products;
