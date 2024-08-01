export const globalErrhandler = (err, req, res, next) => {
  // Stack
  // Message
  const stack = err?.stack;
  const statusCode = err?.statusCode ? err?.statusCode : 500;
  const message = err?.message;
  res.status(statusCode).json({
    stack,
    message,
  });
}

// 404 Handler
export const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found.`);
  next(err);
};