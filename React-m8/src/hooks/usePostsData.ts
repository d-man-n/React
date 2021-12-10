import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

interface IPostsData {
    children?: Array<{}>;
}

export function usePostsData() {
    const [posts, setPosts] = useState<IPostsData>({});
    const token = useContext(tokenContext);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const postsData = resp.data.data;
            setPosts(postsData);
        })
        .catch(console.log);
    }, [token])
    return [posts];  
}