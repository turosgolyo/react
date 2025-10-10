import { useEffect, useState } from 'react';
import './App.css';
import type { Pizza } from './types/Pizza';
import apiClient, { BACKEND_URL } from './api/apiClient';

function App() {
    const [pizzak, setPizzak] = useState<Pizza[]>([]);

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => setPizzak(response.data))
            .catch((reason) => alert(reason));
    }, []);

    return (
        <>
            {pizzak.map((p) => (
                <div>
                    <h2>{p.nev}</h2>
                    <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} />
                </div>
            ))}
        </>
    );
}

export default App;
