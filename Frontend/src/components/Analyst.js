import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';

class Analyst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/articles/PendingAnalyst') //Get all the articles that are pending analysis
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticleList');
      })
  };


  render() {
    const articles = this.state.articles;
    let articleList;

    if(!articles) {
      articleList = "There is no article record!";
    } else {
      articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    //layout of analysis page
    return (
      <div className="ShowArticleList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Analyst Page</h2>
              <br/>
            </div>
          </div>
          <br/>
          <div className="list">
                {articleList} {/* Display the articles found */}
          </div>
          <div className="rowC">
                <Link to="/" className="btn btn-outline-warning">
                  Return to Menu
                </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Analyst;