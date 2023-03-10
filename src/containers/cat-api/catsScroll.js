import React, { useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import LazyLoad from 'react-lazy-load';
import InfiniteScroll from 'react-infinite-scroller';
import { api } from './API/axios';
import { CatImage } from './styles/catApi';

export default function CatsScroll({ pageLimit = 10 }) {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);

    const { data, isLoading, error } = useQuery(
        ['catImages', pageLimit, page],
        async () => {
            const response = await api.get(`/images/search?limit=${pageLimit}&page=${page}`);
            return response.data;
        }
    );

    useEffect(() => {
        if (data) {
            setImages([...images, ...data]);
        }
        // eslint-disable-next-line
    }, [data]);

    function loadMore() {
        if (isLoading) return;
        if (error) return;
        setPage(page + 1);
    }
    //if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {images && images.length > 0 && images.map((image, index) => (
                <LazyLoad key={image.id} height={'400px'}>
                    <CatImage src={image.url} alt={image.id}/>
                </LazyLoad>
            ))}
        </InfiniteScroll>
    );
}