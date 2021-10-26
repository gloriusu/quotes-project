import React, {Suspense} from 'react';
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));


function App() {
    return (
        <Router>
            <Layout>
                <Suspense
                    fallback={
                        <div className='centered'>
                            <LoadingSpinner/>
                        </div>
                    }
                >
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/quotes'/>
                        </Route>
                        <Route exact path='/quotes'>
                            <AllQuotes/>
                        </Route>
                        <Route path='/quotes/:quoteId'>
                            <QuoteDetail/>
                        </Route>
                        <Route path='/new-quote'>
                            <NewQuote/>
                        </Route>
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
