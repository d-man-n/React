import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { CommentForm } from '../CommentForm';

interface IPost {
    onClose?: () => void;
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos autem velit nam, fugit excepturi veritatis vero in esse natus deserunt perspiciatis dignissimos repellendus odio officia alias quidem. Rem, nihil ducimus.</h2>

            <div className={styles.content}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem in, quae veniam architecto deleniti nesciunt, fugiat esse quisquam dolor sequi beatae! Enim voluptas quae id nesciunt autem quia quas animi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta praesentium animi distinctio voluptate temporibus perferendis minima, soluta cum odio quibusdam vitae officia omnis inventore a iusto, dolorem error sint atque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius alias unde aliquid est sint natus molestiae atque nam aperiam? Consequatur, veniam aliquam maxime voluptas quod sit itaque voluptatibus vero?</p>
            </div>

            <CommentForm />
        </div>
    ), node);
}