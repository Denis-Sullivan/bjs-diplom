'use strict'

// login
let loginUser = new UserForm();
loginUser.loginFormCallback = function(error) {
    ApiConnector.login(error, response => {
        response['success'] ? location.reload() : loginUser.setLoginErrorMessage(response['error']);
    });
};

// new registration
loginUser.registerFormCallback = function(error) {
    ApiConnector.register(error, response => {
        response['success'] ? location.reload() : loginUser.setRegisterErrorMessage(response['error']);
    });
};