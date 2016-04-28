import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      );
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

//glue between react redux
//NOTE: automatically rerenders whenever state is changed aka new books
//NOTE: whenever app state changes object in state funciton will be assigned as props to state funciton
function mapStatetoProps(state) {
  //whatever is returened will show up as props 
  //inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStatetoProps)(BookList);
//connect takes function and component that is aware of state is contained by redux