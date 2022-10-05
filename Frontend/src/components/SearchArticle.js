import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SearchArticle extends Component {
  constructor() {
    super();
    this.state = {
      search:'',
      title:'',
      author:'',
      year:'',
      journal_name:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Search submit onClick event
  onSubmit = e => {
    e.preventDefault();    
    const query = {};

    //if else statement to handle nulls and change them into empty strings to code doesn't break
    if(this.state.search == null)
    {
      query.keywords = "";
    }
    else
    {
      query.keywords = this.state.search;
    }
    if(this.state.title == null)
    {
      query.title = "";
    }
    else
    {
      query.title = this.state.title;
    }
    if(this.state.author == null)
    {
      query.author = "";
    }
    else
    {
      query.author = this.state.author;
    }
    if(this.state.year == null)
    {
      query.year = "";
    }
    else
    {
      query.year = this.state.year;
    }
    if(this.state.journal_name == null)
    {
      query.journal_name = "";
    }
    else
    {
      query.journal_name = this.state.journal_name;
    }
    this.props.history.push('article-result', query); //sending the search query  
  };

  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            </div>
            <div className="col-md-8 m-auto">
              <br/>
              <h1 className="display-4 text-center">Search for an Article</h1>
              <br/>
            </div>
          </div>
          <br/>
          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>

            <div className='form-group'>
              <input //keywords
                type='text'
                name='search'
                placeholder='Keywords'
                className='form-control'
                onChange={this.onChange}
              />
              <br/>
              <input //title
                type='text'
                name='title'
                placeholder='Title'
                className='form-control'
                onChange={this.onChange}
              />
              <br/>
              <input //author
                type='text'
                name='author'
                placeholder='Author'
                className='form-control'
                onChange={this.onChange}
              />
              <br/>
              <input //year
                type='text'
                name='year'
                placeholder='Year'
                className='form-control'
                onChange={this.onChange}
              />
              <br/>
              <input //journal name
                type='text'
                name='journal_name'
                placeholder='Journal Name'
                className='form-control'
                onChange={this.onChange}
              />
            </div>

            <input //submission button
                type="submit"
                className="btn btn-primary"
                onClick = { this.onSubmit }
            />
            </form>
            <br/>
            <div className="rowC">
            <Link to="/" className="btn btn-outline-warning">
                Return to Menu
            </Link>
          </div>
          <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArticle;