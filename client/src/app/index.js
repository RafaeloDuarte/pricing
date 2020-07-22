import React,{useEffect} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Menu from './components/Base'
import base from './containers/HOC/Base';
import noAuth from './containers/HOC/NoAuth';
import Login from './containers/Login'
import AnalyzeNegotiation from './containers/AnalyzeNegotiation/containers/Competitiveness'
import RootHome from './containers/RootHome';
import CurvedLine from './components/Charts/CurvedLine';
import PriceManagement from './containers/PriceManagement'
import CategoryManagement from './containers/AnalyzeNegotiation/containers/CategoryManagement'
import Negociation from './containers/AnalyzeNegotiation/containers/Negociation'
import PDV from './containers/AnalyzeNegotiation/containers/PDV'
import SearchData from './containers/AnalyzeNegotiation/containers/SearchData'

import store from './store'
import APOLLO_CLIENT from './config/apolloClient'
import { initApp } from './store/actions';

const client = new ApolloClient({
  uri: APOLLO_CLIENT
});

function App() {

  useEffect(()=>{
    initApp()
  },[])

  return (
      <div className="App">
        <Provider store={store}>
          <Menu />
          <ApolloProvider client={client}>
            <Router>
              <Route path={"/"} exact component={base(RootHome)} />
              <Route path={"/price-index"} exact component={base(AnalyzeNegotiation)} />
              <Route path={"/chart"} exact component={base(CurvedLine)} />

              <Route path={"/price-management"} exact component={base(PriceManagement)} />
              <Route path={"/category-management"} exact component={base(CategoryManagement)} />
              <Route path={"/negociation"} exact component={base(Negociation)} />
              <Route path={"/pdv"} exact component={base(PDV)} />
              <Route path={"/search-data"} exact component={base(SearchData)} />

              <Route path={"/login"} exact component={noAuth(Login)} />

            </Router>
          </ApolloProvider>
        </Provider>
      </div>
  );
}

export default App;