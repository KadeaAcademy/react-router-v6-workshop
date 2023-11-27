import {Outlet, useParams} from "react-router-dom";

function News({news}) {


    return (
        <>
            <h1>
                News
            </h1>

            <Outlet />
        </>
    );
}

export default News;