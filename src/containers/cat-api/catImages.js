import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LazyLoad from 'react-lazy-load';
import InfiniteScroll from 'react-infinite-scroller';
import { api } from './API';
import { CatImage } from './styles/catApi';

export default function CatImages({ limit }) {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useQuery(
        ['catImages', limit, page],
        async () => {
            const { data } = await api.get(`/images/search?limit=${limit}&page=${page}`);
            return data;
        }
    );

    function loadMore() {
        setPage(page + 1);
    }

    return (
        <div>
            {console.log(data)}
            {/* <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {data && data.length > 0 && data.map((image, index) => (
                    <LazyLoad key={index}>
                        <CatImage src={image.url} alt={image.id}/>
                    </LazyLoad>
                ))}
            </InfiniteScroll> */}
        </div>
    );
}
