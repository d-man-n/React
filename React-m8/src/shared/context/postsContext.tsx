import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';


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
export interface IPostsContextData {
    posts?: IPosts[];
}
export const postsContext = React.createContext<IPostsContextData>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode}) {
    const [posts] = usePostsData();
    return (
       <postsContext.Provider value={posts}>
           {children}
       </postsContext.Provider>

    )
}