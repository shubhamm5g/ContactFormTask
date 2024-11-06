exports.validateMiddleware = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const errorMessage = error.errors[0].message;
    res.status(400).json({ msg: errorMessage });
    console.error(error);
  }
};
