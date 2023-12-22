import { Button } from '@mui/material';

import AppIcon from '@ui/common/AppIcon';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/routing/routing';

import * as S from './Main.styles';

const Main = () => {
    const navigate = useNavigate();

    const handleCreateWallet = () => {
        navigate(AppRoutes.CREATE_WALLET);
    };

    return (
        <S.MainLayout>
            <AppIcon />
            <S.MainButtonBlock>
                <Button variant={'contained'} onClick={handleCreateWallet} aria-label={'create wallet'}>
                    Create new wallet
                </Button>
                <Button disabled aria-label={'import exciting wallet'}>
                    Import exciting wallet
                </Button>
            </S.MainButtonBlock>
        </S.MainLayout>
    );
};
export default Main;
