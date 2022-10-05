import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SubmitArticle from './components/SubmitArticle';
import ShowArticleList from './components/ShowArticleList';
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';
import Analyst from './components/Analyst';
import SearchArticle from './components/SearchArticle'
import SearchArticleDetails from './components/SearchArticleDetails'
import ArticleResult from './components/ArticleResult';
import MainMenu from './components/MainMenu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/article-result' component={ArticleResult} />
          <Route path='/edit-article/:id' component={UpdateArticleInfo} />
          <Route path='/search-article/:id' component={SearchArticleDetails} />
          <Route path='/show-article/:id' component={ShowArticleDetails} />
          <Route path='/moderation' component={ShowArticleList} />
          <Route path='/submit-article' component={SubmitArticle} />
          <Route path='/analyst' component={Analyst} />
          <Route path='/search-article' component={SearchArticle} />
          <Route exact path='/' component={MainMenu} />
        </div>
      </Router>
    );
  }
}

export default App;