//this is to show how callback function works

//steps with asynchronous functions to be done in appropriate order

// 1. get user data
// 2. validate data
// 3. register user
// 4. send confirmation email
// catch error

const newUser = {
    name: "Wolfgang Maria",
    surname: "Fisher",
    age: 34
};

const error = 200; //try to change to equal to 404 to see a difference

const getUserData = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('start processing new user data...')
            console.log('step 1. get user data');
            resolve(user);
        }, 1400)
    })
}

const validateData = (err) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err === 404) { reject() } //reject in case of error, error has to be defined
            else {
                console.log('step 2. validate data');
                resolve('data validated');
            };
        }, 800)
    })
}

const registerUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('step 3. register user');
            resolve('user has been registered');
        }, 450)
    })
}

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('step 4. sent email');
            resolve('confirmation has been sent');
        }, 1450)
    })
}

getUserData(newUser)
    .then(res => {
        console.log('Response from getUserData: ', res); //response of a promise is equal to a returned resolve
        return validateData(error);
    })
    .then(res => {
        console.log('Response from validateData: ', res);
        return registerUser(res);
    })
    .then(res => {
        console.log('Response from user registration: ', res);
        return sendEmail(res);
    })
    .then(res => console.log('Response from sentEmail: ', res))
    .then(() => console.log('...all correct, end of proceesing new user data.'))
    .catch(err => {
        console.log('Error: something might have went wrong, code: ', error)
    });