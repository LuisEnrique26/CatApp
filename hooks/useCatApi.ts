import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const useRandomCat = () => {
    const [cats, setCats] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRandomCat = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/images/search?limit=10&api_key=${process.env.EXPO_PUBLIC_API_KEY}`);
            //console.log("Api Response: ", response.data);

            const formattedCats = response.data.map((catData: any) => ({
                id: catData.id,
                imageUrl: catData.url,
                breeds: catData.breeds,
            }));
            //console.log("Formatted Cats: ", formattedCats);

            setCats(formattedCats);
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

    return { cats, loading, error, refresh: fetchRandomCat };
}