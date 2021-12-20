import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';


interface IPostsItems {
    [n: string]: string;
}

export interface IPostsContextData {
    posts?: { data?: IPostsItems };
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