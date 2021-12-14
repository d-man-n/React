import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

interface IPostsItems {
    id: string;
    author: string;
    title: string;
    selftext: string;
    url: string;
}
interface IPosts {
    data: IPostsItems[];
}
interface IPostsData {
    posts?: IPosts[];
}

export function usePostsData() {
    const [posts, setPosts] = useState<IPostsData>({});

    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const postsData = resp.data.data.children;
            console.log(postsData)
            setPosts(postsData);
        })
        .catch(console.log);
    }, [token])
    return [posts];  
}