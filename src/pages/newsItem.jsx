import {useParams} from "react-router-dom";

function NewsItem({news}) {
    const useParam = useParams();
    const {id}= useParam;



    const post = news.find((post) => post.id === id);


    if (!post) {
        return <p>L&lsquo;article que vous avez demander n&lsquo;existe pas</p>;
    }


    return (
        <>
            <h2>{post.title}</h2>
            <img src={post.urlToImage} height={500} alt="post image" />
            <h4>
                {post.description}
            </h4>
            <p>
                {post.content}
            </p>
            <p>
                Lire la suite <a href={post.url} target="_blank" rel="noreferrer">ici</a>
            </p>
        </>
    );
}

export default NewsItem;