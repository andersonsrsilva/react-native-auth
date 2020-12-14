import React from 'react';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
    const { signed } = useAuth();

    return signed ? <PrivateRoutes /> : <PublicRoutes />
}

export default Routes;
