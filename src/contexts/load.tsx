import React, { createContext, useContext, useState } from 'react';
import LoadContextData from '../interfaces/LoadContextData';

const LoadContext = createContext<LoadContextData>({} as LoadContextData);

export const LoadProvider: React.FC = ({ children }) => {

    const [loading, setLoading] = useState(false);

    return (
        <LoadContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadContext.Provider>
    )
}

export function useLoad() {
    const context = useContext(LoadContext);
    return context;
}
