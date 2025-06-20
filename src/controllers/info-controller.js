const { StatusCodes } = require('http-status-codes');


const info = (req,res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: 'API is Live',
    error:{},
    data: {}
  })
}
//when we actually do res.status(500) -> this actually returns the same response object and on that 
//response object we are technically doing .json({}) and this also returns the same respose object that we are returning
// res obbejct has  a status function and the function returns the same response object on which we do .json

module.exports = {
  info
}