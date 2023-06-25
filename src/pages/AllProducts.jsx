import React from 'react';
import Categories from '../components/Category';
import SubCategories from '../components/SubCategory';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';
import Products from '../components/Products';

const useStyles = makeStyles((theme) => ({
    spacing: {
        margin: theme.spacing(2, 0),
    },
    container: {
        backgroundColor: "#fffff",
    }
}));

const AllProducts = () => {
    const classes = useStyles();
    const [selectedCategory, setselectedCategory] = React.useState('');
    const [selectedSubCategory, setSubSelectedCategory] = React.useState('');

    return (
        <div id="products-container" className={classes.container}>
            {selectedSubCategory ? (
                <Products selectedSubCategory={selectedSubCategory} setselectedCategory={setselectedCategory} setSubSelectedCategory={setSubSelectedCategory} />
            ) : (
                <>
                    <Categories setselectedCategory={setselectedCategory} />
                    <div className={classes.spacing}>
                        <Divider />
                    </div>
                    {selectedCategory && <SubCategories setSubSelectedCategory={setSubSelectedCategory} categoryId={selectedCategory} />}
                </>
            )}
        </div>
    );
};
export default AllProducts;