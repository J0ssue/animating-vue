import About from '../views/About.vue';
import Home from '../views/Home';
import List from '../views/List';
import Drawer from '../views/Drawer';
import Simple from '../views/Simple';
import Stagger from '../views/Stagger';
import State from '../views/State';
import Timeline from '../views/Timeline';
import Master from '../views/Master';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/drawer',
        component: Drawer
    },
    {
        path: '/simple',
        component: Simple
    },
    {
        path: '/stagger',
        component: Stagger
    },
    {
        path: '/state',
        component: State
    },
    {
        path: '/timeline',
        component: Timeline
    },
    {
        path: '/master',
        component: Master
    },
];

export default routes;