import { useFixedVhProperty } from '@hooks';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import { AppRoutes } from '@/routing/routing';

import Main from './components/pages/Main';
import CreateWallet from './components/pages/CreateWallet';
import Wallet from './components/pages/Wallet';

function App() {
    useFixedVhProperty();

    return (
        <Routes>
            <Route path={AppRoutes.MAIN} element={<Main />} />
            <Route path={AppRoutes.CREATE_WALLET} element={<CreateWallet />} />
            <Route path={AppRoutes.WALLET} element={<Wallet />} />
        </Routes>
    );
}

export default App;
