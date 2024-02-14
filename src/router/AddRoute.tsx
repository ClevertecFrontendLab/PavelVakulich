import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/index';
import { LayoutApp } from '../components/Layout';

const AppRoute = () => {
return (
    <Routes>
        <Route path="/" element={<LayoutApp/>}>
            <Route path="/" element={<MainPage/>} />
        </Route>
    </Routes>
);
};

export default AppRoute;
