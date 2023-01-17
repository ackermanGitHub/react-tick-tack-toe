import React, { useState, useEffect } from 'react';
import { CatImage } from './styles/catApi';
import LazyLoad from 'react-lazy-load';
import { api } from './API';

export default function CatImages({ limit }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        console.log(this);
        async function fetchData() {
            const {data} = await api.get(`/images/search?limit=${limit}`);
            setImages(data);
        }
        fetchData();
    }, [limit]);

    return (
        <div>
        {images.map((image, index) => (
            <LazyLoad key={index} height={200}>
                <CatImage src={image.url} alt={image.id}/>
            </LazyLoad>
        ))}
        </div>
    );
}