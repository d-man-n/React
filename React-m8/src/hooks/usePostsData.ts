import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

interface IPostsItems {
    [n: string]: string;
}

interface IPostsData {
    posts?: { data: IPostsItems };
}

export function usePostsData() {
    const [posts, setPosts] = useState<Array<IPostsData>>([]);

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