import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    subCategorySquare: {
        width: '150px',
        height: '150px',
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
    },
    categoryName: {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    },
    noSubCategories: {
        margin: theme.spacing(2),
        padding: 8,
    },
}));

const SubCategories = ({ categoryId, setSubSelectedCategory }) => {
    const classes = useStyles();
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        fetchSubCategories();
    }, [categoryId]);

    const fetchSubCategories = async () => {
        try {
            const response = await fetch(
                `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${categoryId}.json`
            );
            const data = await response.json();
            const { result } = data;
            setSubCategories(result);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };

    const handleImageError = (subCategory) => {
        subCategory.subCategoryImageURL = 'https://placekitten.com/300/300'; // Fallback image URL
    };

    if (subCategories.length === 0) {
        return (
            <Typography variant="body1" className={classes.noSubCategories}>
                No subcategories found.
            </Typography>
        );
    }

    const handleSubCategoryClick = (subCategoryId) => {
        setSubSelectedCategory(subCategoryId);
    };

    return (
        <Grid container spacing={1}>
            {subCategories.map((subCategory) => {
                if (!subCategory.subCategoryImageURL) {
                    handleImageError(subCategory);
                }
                return (
                    <Grid item key={subCategory.subCategoryId}>
                        <Paper
                            className={classes.subCategorySquare}
                            style={{
                                backgroundImage: `url(${subCategory.subCategoryImageURL})`,
                            }}
                            onClick={() => handleSubCategoryClick(subCategory.subCategoryId)}
                        >
                            <Typography className={classes.categoryName} variant="subtitle2">
                                {subCategory.subCategoryName}
                            </Typography>
                            <img
                                src={subCategory.subCategoryImageURL}
                                alt={subCategory.subCategoryName}
                                style={{ display: 'none' }}
                            />
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SubCategories;
