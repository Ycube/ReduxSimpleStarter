import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActinCreatos} from 'redux'; //make sure it flows through all reducers

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

//anything returned from this funciton will end up as porps on the BookList container
function mapDispatchtoProps(dispatch) {
  //whenever selectBook is called, result should be passed to all reducers with 'dispatch' 
  return bindActinCreatos({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStatetoProps, mapDispatchtoProps)(BookList);
//connect takes function and component that is aware of state is contained by redux

