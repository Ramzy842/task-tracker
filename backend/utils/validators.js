const { body } = require("express-validator");

const messages = {
    usernameRequired: "Username is required.",
    invalidUsername: "Invalid username.",
    nameRequired: "Name is required.",
    invalidName: "Invalid name.",
    emailRequired: "Email is required.",
    invalidEmail: "Invalid email format.",
    passwordRequired: "Password is required.",
    invalidPassword: "Invalid password.",
    inaccuratePasswordLength:
        "Password should be at least 12 characters long and not exceeding 24 characters.",
};

const validateUsername = body("username")
    .notEmpty()
    .withMessage(messages.usernameRequired)
    .isString()
    .withMessage(messages.invalidUsername)
    .trim()
    .escape();

const validateName = body("name")
    .notEmpty()
    .withMessage(messages.nameRequired)
    .isString()
    .withMessage(messages.invalidName)
    .trim()
    .escape();

const validateEmail = body("email")
    .notEmpty()
    .withMessage(messages.emailRequired)
    .isEmail()
    .withMessage(messages.invalidEmail);

const validatePassword = body("password")
    .notEmpty()
    .withMessage(messages.passwordRequired)
    .isString()
    .withMessage(messages.invalidPassword)
    .isLength({ min: 12, max: 24 })
    .withMessage(messages.inaccuratePasswordLength)
    .escape();

// Optional

const validateUsernameUpdate = body("username")
    .optional()
    .notEmpty()
    .withMessage(messages.usernameRequired)
    .isString()
    .withMessage(messages.invalidUsername)
    .trim()
    .escape();

const validateNameUpdate = body("name").optional()
    .notEmpty()
    .withMessage(messages.nameRequired)
    .isString()
    .withMessage(messages.invalidName)
    .trim()
    .escape();

const validateEmailUpdate = body("email").optional()
    .notEmpty()
    .withMessage(messages.emailRequired)
    .isEmail()
    .withMessage(messages.invalidEmail);

const validatePasswordUpdate = body("password").optional()
    .notEmpty()
    .withMessage(messages.passwordRequired)
    .isString()
    .withMessage(messages.invalidPassword)
    .isLength({ min: 12, max: 24 })
    .withMessage(messages.inaccuratePasswordLength)
    .escape();

module.exports = {
    validateUsername,
    validateName,
    validateEmail,
    validatePassword,
    validateUsernameUpdate,
    validateNameUpdate,
    validateEmailUpdate,
    validatePasswordUpdate,
    messages,
};
