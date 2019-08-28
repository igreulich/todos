/* eslint-disable object-curly-newline */
import { connect } from 'react-redux';

import { addTodo } from './todosReducer';

import Todo from '.';

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  addTodo: (title, notes, due, complete) => dispatch(addTodo({ title, notes, due, complete })),
});

export default connect(mapState, mapDispatch)(Todo);
/* eslint-enable object-curly-newline */
