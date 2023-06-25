import React from 'react';
import MainLayout from './layouts/MainScreen';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import AllProducts from './pages/AllProducts';
import Favorites from './pages/Favorites';
import NewArrival from './pages/NewArrival';
import { FaHome, FaShoppingBasket, FaListAlt, FaHeart, FaPlus } from 'react-icons/fa';

const routes = [
    {
        path: '/',
        component: Dashboard,
        layout: MainLayout,
        label: 'Dashboard',
        icon: <FaHome />,
    },
    {
        path: '/all-products',
        component: AllProducts,
        layout: MainLayout,
        label: 'All Products',
        icon: <FaListAlt />,
    },
    {
        path: '/orders',
        component: Orders,
        layout: MainLayout,
        label: 'Orders',
        icon: <FaShoppingBasket />,
    },

    {
        path: '/favorites',
        component: Favorites,
        layout: MainLayout,
        label: 'Favorites',
        icon: <FaHeart />,
    },
    {
        path: '/new-arrival',
        component: NewArrival,
        layout: MainLayout,
        label: 'New Arrival',
        icon: <FaPlus />,
    },
];

export default routes;
