/**
 * Creating Todo Filter middleware
 */

export default (req, resp, next) => {
  if (!req.body.todo) {
    next();
    return false;
  }

  const { description, category } = req.body.todo;
  if (description && description.includes('damn')) {
    resp.status(406).json({ error: 'This language is not acceptable!' });
  } else {
    next();
  }
};
