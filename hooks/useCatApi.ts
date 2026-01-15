import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const useRandomCat = () => {
    const [cat, setCat] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomCat = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/images/search?api_key=${process.env.EXPO_PUBLIC_API_KEY}`);

            //console.log("Api Response: ", response.data);
            
            const catData = response.data[0];
            console.log("Cat Data: ", catData);
            

            setCat({
                id: catData.id,
                imageUrl: catData.url,
                breeds: catData.breeds,
            });
        } catch (err) {
            setError('Failed to fetch cat data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchRandomCat();
    }, []);

    return { cat, loading, error, refresh: fetchRandomCat };
}