import {Link} from 'react-router-dom';

function NewsList(props) {

    const {news} = props;

    return (
        <>
            <h2>
                News List
            </h2>
            <ul>
                {
                    news.map((post) => (
                        <div key={post.id}>
                            <li><Link to={`/news/${post.id}`}>{post.title}</Link></li>
                        </div>
                    ))
                }
            </ul>
        </>

    );
}

export default NewsList;