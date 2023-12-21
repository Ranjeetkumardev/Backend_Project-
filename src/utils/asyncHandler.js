 
const asyncHandler = (reqHandler) => {
   return (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }



// make a rapper function from try catch 
// const asyncHandler = (fn) = async (req ,res ,next ) => {
//     try {
//         await fn(req ,res ,next)
//     } catch (error) {
//         res.statu(error.code || 500).json({
//             success: false,
//            message :error.message
//         })
//     }
// }