import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': process.env.CAT_API_KEY || '',
  }
});

export const useRandomCat = () => {
    const [cat, setCat] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomCat = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('/images/0XYvRd7oD');
            const catData = response.data[0];
            const breed = catData.breeds[0];

            setCat({
                name: breed.name,
                origin: breed.origin,
                description: breed.description,
                imageUrl: catData.url,
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