/**
 * A Todo parser to parse the incoming request
 */

// We will receive an object like this:
// {
//  "todo": {
//   "description": "the description"
//  }
// }

export default (request) => {
  const { todo } = request.body;

  // validate if we have a todo in the body
  if (todo == null) {
    throw new Error('The Todo object was not set.');
  }

  // check if there is a description or category
  if ((todo.description == null || todo.description.length === 0) && (todo.category == null || todo.category.length === 0)) {
    throw new Error('The Todo object does not contain anything.');
  }

  // trim all the white/none characters in our string
  if (todo.description != null) {
    todo.description = todo.description.trim();
  }

  if (todo.category != null) {
    todo.category = todo.category.trim();
  }

  // return the parsed todo
  return todo;
};
