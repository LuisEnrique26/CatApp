import axios from 'axios';
import { useEffect, useState } from 'react';

interface catData {
    id: string;
    imageUrl: string;
    breeds: any[];
}

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export const useRandomCat = () => {
    const [cats, setCats] = useState<catData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCats = async () => {
        
        if (loading) return; // Prevent multiple simultaneous requests
        
        setLoading(true);
        try {
            const response = await api.get(`/images/search?limit=10&api_key=${process.env.EXPO_PUBLIC_API_KEY}`);
            //console.log("Api Response: ", response.data);

            const newCats = response.data.map((data: any) => ({
                id: data.id + Math.random(),
                imageUrl: data.url,
                breeds: data.breeds,
            }));
            //console.log("Formatted Cats: ", formattedCats);

            setCats(prevCats => [...prevCats, ...newCats]);
        } catch (err) {
            setError('Failed to fetch cat data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchCats();
    }, []);

    return { cats, loading, error, loadMoreCats: fetchCats };
}