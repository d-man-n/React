import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

export interface IPostsData {
    id: string;
    author: string;
    title: string;
    selftext: string;
    url: string;
    created: number;
}

export function usePostsData() {
    const [posts, setPosts] = useState<Array<IPostsData>>([]);

    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const postsData = resp.data.data.children.map((el: {data: {[n: string]: string | boolean | number}})=> {
                console.log(el)
                return {
                    id: el.data.id,
                    author: el.data.author,
                    title: el.data.title,
                    selftext: el.data.selftext,
                    url: el.data.url,
                    created: el.data.created,
                }
            });

            // console.log(postsData)
            setPosts(postsData);
        })
        .catch(console.log);
    }, [token])
    return [posts];  
}