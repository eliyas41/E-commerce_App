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