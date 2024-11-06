exports.errorMiddleware = (err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const msg = err.msg || "backend error";
  const extraDetails = err.extraDetails || "";
  return res.status(status).json({ msg: msg, extraDetails: extraDetails });
};
