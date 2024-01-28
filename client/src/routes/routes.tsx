import {createBrowserRouter} from 'react-router-dom';
import Format from '../pages/format/Format';
import Dashboard from '../pages/dashboard/Dashboard';
import Edit from '../pages/edit/Edit';

export const router = createBrowserRouter([
    {path: "/format", element: <Format/>},
    {path: "/dashboard", element: <Dashboard/>},
    {path: "/edit", element: <Edit/>},
]);




