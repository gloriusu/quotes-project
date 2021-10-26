import React, {Fragment, useEffect} from 'react';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import {getSingleQuote} from "../lib/api";

import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';



const QuoteDetail = () => {

    const params = useParams();
    const match = useRouteMatch();

    const {quoteId} = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote);

    useEffect(() => {
        sendRequest(quoteId);
    },[sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (!loadedQuote) {
        return <p>Undefined quote</p>
    }

    return (
        <Fragment>
            <HighlightedQuote author={loadedQuote.author} quote={loadedQuote.quote}/>
            {/*<Route exact path={`/quotes/${params.quoteId}/`}>*/}
            <Route exact path={match.path}>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>View Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;