import React/* , { useState, useEffect } */ from 'react';
import { useQuery } from 'react-query';
import LazyLoad from 'react-lazy-load';
import { api } from './API';
import { CatImage } from './styles/catApi';

export default function CatImages({ limit }) {
    //const [images, setImages] = useState([]);
    const { data, isLoading, error } = useQuery(
        ['catImages', limit],
        async () => {
            const response = await api.get(`/images/search?limit=${limit}`);
            return response.data;
        }
    );

    /* useEffect(() => {
        async function fetchData() {
            const {data} = await api.get(`/images/search?limit=${limit}`);
            setImages(data);
        }
        fetchData();
    }, [limit]); */

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
        {data.map((image, index) => (
            <LazyLoad key={index} height={"400px"}>
                <CatImage src={image.url} alt={image.id}/>
            </LazyLoad>
        ))}
        </div>
    );
}
