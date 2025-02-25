const authController = require('../controllers/auth.controller')
const {verifyUserReq} = require('../middlewares')

module.exports = (app)=>{
    app.post("/health/api/v1/auth/signup", [verifyUserReq.validateSignUpRequestBody], authController.signup)
    app.post("/health/api/v1/auth/signin", [verifyUserReq.validateSignInRequestBody], authController.signin)
}