'use strict'

// login
let loginUser = new UserForm;
loginUser.loginFormCallback = function(data) {
    ApiConnector.login(data, response => {
        response['success'] ? location.reload() : loginUser.setLoginErrorMessage(response['data']);
    });
};

// new registration
loginUser.registerFormCallback = function(data) {
    ApiConnector.register(data, response => {
        response['success'] ? location.reload() : loginUser.setRegisterErrorMessage(response['data']);
    });
};