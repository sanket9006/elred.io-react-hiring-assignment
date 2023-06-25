import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  categorySquare: {
    width: '100px',
    height: '100px',
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
  },
  categoryName: {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    color: 'white'
  },
  container: {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    width: '100%',
  },
}));

const Categories = ({ setselectedCategory }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setselectedCategory && fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json'
      );
      const data = await response.json();
      const { result } = data;
      setCategories(result);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleImageError = (category) => {
    category.categoryImageURL = 'https://www.atinks.com/wp-content/uploads/2020/02/Solvent-outdoor-Atinks-printing-350x250.jpg'; // Fallback image URL
  };

  return (
    <>
      <Grid sx={{ marginBottom: 2 }} container spacing={2} alignItems="center">
        <Grid sx={{ display: 'flex', alignContent: 'center' }} item xs={10}>
          <Typography sx={{ marginLeft: 2 }} variant="h6">Print Heads</Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            fullWidth
            size='small'
          />
        </Grid>
      </Grid>
      <div className={classes.container}>



        <Grid container spacing={1}>
          {categories.map((category) => {
            if (!category.categoryImageURL) {
              handleImageError(category);
            }
            return (
              <Grid item key={category.categoryId} onClick={() => { setselectedCategory(category.categoryId) }}>
                <Paper
                  className={classes.categorySquare}
                  style={{
                    backgroundImage: `url(${category.categoryImageURL})`,
                  }}
                >
                  <Typography className={classes.categoryName} variant="subtitle2">
                    {category.categoryName}
                  </Typography>
                  <img
                    src={category.categoryImageURL}
                    alt={category.categoryName}
                    style={{ display: 'none' }}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>

  );
};

export default Categories;
