import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Menu from './components/Base'
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

const client = new ApolloClient({
  uri: APOLLO_CLIENT
});

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <Menu />
          <ApolloProvider client={client}>
            <Router>
              <Route path={"/"} exact component={RootHome} />
              <Route path={"/price-index"} exact component={AnalyzeNegotiation} />
              <Route path={"/chart"} exact component={CurvedLine} />

              <Route path={"/price-management"} exact component={PriceManagement} />
              <Route path={"/category-management"} exact component={CategoryManagement} />
              <Route path={"/negociation"} exact component={Negociation} />
              <Route path={"/pdv"} exact component={PDV} />
              <Route path={"/search-data"} exact component={SearchData} />
            </Router>
          </ApolloProvider>
        </Provider>
      </div>
  );
}

export default App;