const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (func) => {
//   () => {};
// };
// ^ these are just examples 




// const asyncHandler = (fn) => async (req, res, nect) => {
//     try{
//       await fn(req, res, next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//           success: false,
//           message: error.message
//         })
//     }
//   };
  