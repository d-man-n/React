import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
    id: string;
    author: string;
    title: string;
    selftext: string;
    url: string;
    created: number;
}

export const postsContext = React.createContext<Array<IPostsContextData>>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode}) {
    const [posts] = usePostsData();
    return (
       <postsContext.Provider value={posts}>
           {children}
       </postsContext.Provider>

    )
}