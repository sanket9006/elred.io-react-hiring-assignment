/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft, AiFillLeftCircle } from 'react-icons/ai';
import { TextField } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
        width: '150px',
        position: 'relative', // Add position relative to contain the absolute positioned icon
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
}));

const Products = ({ selectedSubCategory, setselectedCategory, setSubSelectedCategory }) => {
    const classes = useStyles();
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

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
                <Grid sx={{ display: 'flex', alignContent: 'center' }} item xs={10} >
                    <AiOutlineArrowLeft style={{ cursor: 'pointer' }} size={24} onClick={() => { setselectedCategory(null); setSubSelectedCategory(null) }} />
                    <Typography sx={{ paddingBottom: "15px", marginLeft: 2, cursor: 'pointer' }} variant="h6" onClick={() => { setselectedCategory(null); setSubSelectedCategory(null) }} gutterBottom> All Products</Typography>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        placeholder="Search products..."
                        variant="outlined"
                        fullWidth
                        size='small'
                    />
                </Grid>
            </Grid>

            <div className={classes.productsContainer}>
                {isLoading ? (
                    <Typography variant="body1">Loading...</Typography>
                ) : products.length === 0 ? (
                    <Typography variant="h6">No products available</Typography>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))
                )}
            </div>

        </div >
    );
};

function getRandomImage() {
    const imageUrls = [
        'https://www.atinks.com/wp-content/uploads/2017/12/Atinks-Konica-Inks--320x320.jpg',
        'https://www.atinks.com/wp-content/uploads/2017/11/Atinks-Quattro-Platinum--300x300.jpg',
        'https://www.atinks.com/wp-content/uploads/2019/05/hdxl_black_group_digital_printing_ink-300x300.png',
        'https://www.atinks.com/wp-content/uploads/2017/12/max-black-1-ltr-min-320x320.png',
        'https://www.atinks.com/wp-content/uploads/2023/06/02.-X-cel_Set_1000x1000pix-300x300.jpg',
        'https://www.atinks.com/wp-content/uploads/2019/04/group-300x300.jpg',
        'https://www.atinks.com/wp-content/uploads/2020/02/MR-100-5ltr-AT-inks-300x300.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [randomImage, setRandomImage] = React.useState(getRandomImage());

    const handleImageError = (event) => {
        event.target.src = randomImage; // Use the stored random image URL as fallback
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={classes.card}>
            <img
                className={classes.image}
                src={product.productImages[0] || randomImage}
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
