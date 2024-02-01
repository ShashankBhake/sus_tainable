const express = require('express');
const app = express();
const cors = require('cors');
const DB = require('./database/db');
app.use(express.json()); // Make sure this comes before your route handling middleware


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials: true,
}

app.use(cors(corsOptions));
const router = express.Router();

//----------------------------------------------    import    ----------------------------------------------//  

const home = require('./components/Home');
const login = require('./components/login');
const registration = require('./components/registration');
// const Register = require('./validate/register-validate')
const authMiddleWare = require('./middleware/auth-middleware');
const errorMiddleware = require('./middleware/error-middleware');
const validate = require('./middleware/validate-middleware');
const SignUpSchema = require('./validate/auth-validator');
const loginSchema = require('./validate/login-validator');
const user = require('./components/user-com');





app.use('/', router);
app.use(errorMiddleware);


//----------------------------------------------   Routes     ----------------------------------------------//
router.route('/').get(home);
router.route('/registration').post(validate(SignUpSchema),registration); // Route with corresponding validator using Zod

// app.use(authMiddleWare);
router.route('/login').post(validate(loginSchema),authMiddleWare,login); // Route with corresponding validator using Zod
router.route('/user').get(authMiddleWare, user);

// Other middleware...


//----------------------------------------------   Database     ----------------------------------------------//

DB().then(() => {
    console.log("Database connected");
    app.listen(1212);
}).catch((err) => {
    console.log(err);
});