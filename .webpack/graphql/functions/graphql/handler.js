/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/graphql/handler.ts":
/*!**************************************!*\
  !*** ./functions/graphql/handler.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphql": () => (/* binding */ graphql)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ "./functions/graphql/resolvers/index.ts");
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeDefs */ "./functions/graphql/typeDefs/index.ts");





var server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_1__.ApolloServer({
  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_3__["default"],
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__["default"],
  introspection: true
});

var graphql = server.createHandler();

/***/ }),

/***/ "./functions/graphql/resolvers/index.ts":
/*!**********************************************!*\
  !*** ./functions/graphql/resolvers/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-tools/merge */ "./node_modules/@graphql-tools/merge/esm/merge-resolvers.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./functions/graphql/resolvers/register.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread({}, (0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__.mergeResolvers)([_register__WEBPACK_IMPORTED_MODULE_2__["default"]])));

/***/ }),

/***/ "./functions/graphql/resolvers/register.ts":
/*!*************************************************!*\
  !*** ./functions/graphql/resolvers/register.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var services_account_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/account/register */ "./services/account/register.ts");


var resolver = {
  Mutation: {
    register: function register(_parent, args) {
      return (0,services_account_register__WEBPACK_IMPORTED_MODULE_1__["default"])(args);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolver);

/***/ }),

/***/ "./functions/graphql/typeDefs/index.ts":
/*!*********************************************!*\
  !*** ./functions/graphql/typeDefs/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-tools/merge */ "./node_modules/@graphql-tools/merge/esm/typedefs-mergers/merge-typedefs.js");
/* harmony import */ var _root_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.graphql */ "./functions/graphql/typeDefs/root.graphql");
/* harmony import */ var _register_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.graphql */ "./functions/graphql/typeDefs/register.graphql");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_3__.mergeTypeDefs)([_root_graphql__WEBPACK_IMPORTED_MODULE_1__["default"], _register_graphql__WEBPACK_IMPORTED_MODULE_2__["default"]]));

/***/ }),

/***/ "./keys/privateKey.ts":
/*!****************************!*\
  !*** ./keys/privateKey.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----\n");

/***/ }),

/***/ "./keys/publicKey.ts":
/*!***************************!*\
  !*** ./keys/publicKey.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwDRMRw1iAaK9R6yFJz+Z\nqVRCxVpjYO7PLMlF/6KV9jVNu0RwI2LksXni7JsqsMoM9pVTLNatrr5Ea6e2sTqL\n1NCWYjU2X8o2C12UrouCb1z7fsEgvrLhhXUmCUbLRn1/ogNBFfLzhHRiYclSK0Vg\nnheAgeA0jg+NFze1OJ+W9PYo36WxLi/KaGvJ3qoaig2PhPZXUImFKcBN1nnP94V2\nFA6u15Qleo1Z2nkUjPppMaqnwlAWsLJnwjGv4KIHiCFm2VI6kR86dKc9IgABsRBt\nJ/8hPEfHZboJLPfNwvgpxwYvvorEsaZMpgwXwUw+QZkPkIGrJdKZrBDagKLGtuu6\nwBZGjIGx4lweq5B4cxiKaUKoXibBY7+Md57R8v8S2dDvofYrTPRgXHQt/sOR1shP\nZC+c96zbLgnvVe8e5FcldsTC2TW7CNMHHQvlNBhQjOfiuQRduxA8CnruUCDvbE1d\nQRYzT9Yf/8j8eJFlnI4LKK8Eyhr3MwnKPP0hl86pv/NECr72yXbhov6paT3QjkzB\nN9Xmio/6zF15zAKPuQTMORWKODNyAA+13jcTzzjfns1ksjkk+SdUT/eRF4GM2RS/\nr1rdARqMdM4uK1DNKcl3jt77lkkRTQocQHDWAlmz+45aROFM8GJtt0xCCiQGW0aR\nI+g2MODug5+ZufCx3jgZw9UCAwEAAQ==\n-----END PUBLIC KEY-----\n");

/***/ }),

/***/ "./services/account/register.ts":
/*!**************************************!*\
  !*** ./services/account/register.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcrypt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var otp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! otp */ "./node_modules/otp/otp.js");
/* harmony import */ var otp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(otp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../query */ "./services/query.ts");
/* harmony import */ var utils_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/errors */ "./utils/errors.ts");
/* harmony import */ var utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/common */ "./utils/common.ts");
/* harmony import */ var utils_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/email */ "./utils/email.ts");









var checkExistUser = function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(email) {
    var QUERY_USER_BY_EMAIL, _yield$query, users;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            QUERY_USER_BY_EMAIL = "\n    query userByEmail($email: String!) {\n      users: users(where: { email: { _eq: $email } }) {\n        user_id\n      }\n    }\n  ";
            _context.next = 3;
            return (0,_query__WEBPACK_IMPORTED_MODULE_4__.query)(QUERY_USER_BY_EMAIL, {
              email: email
            });
          case 3:
            _yield$query = _context.sent;
            users = _yield$query.data.users;
            if (!users.length) {
              _context.next = 7;
              break;
            }
            throw new Error(utils_errors__WEBPACK_IMPORTED_MODULE_5__.SERVER_ERROR_CODE.EMAIL_EXISTED);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function checkExistUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
var insertUser = function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(object) {
    var INSERT_USER, _yield$query2, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            INSERT_USER = "\n    mutation insertUser($object: users_insert_input!) {\n      user: insert_users_one(object: $object) {\n        email\n      }\n    }\n  ";
            _context2.next = 3;
            return (0,_query__WEBPACK_IMPORTED_MODULE_4__.query)(INSERT_USER, {
              object: object
            });
          case 3:
            _yield$query2 = _context2.sent;
            user = _yield$query2.data.user;
            if (user.email) {
              _context2.next = 7;
              break;
            }
            throw new Error(utils_errors__WEBPACK_IMPORTED_MODULE_5__.SERVER_ERROR_CODE.INTERNAL_SERVER_ERROR);
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function insertUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var handler = function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(_ref3) {
    var email, password, displayedName, avatar, accessSecretKey, otpInstance, otp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = _ref3.email, password = _ref3.password, displayedName = _ref3.displayedName, avatar = _ref3.avatar;
            _context3.prev = 1;
            (0,utils_common__WEBPACK_IMPORTED_MODULE_6__.verifyEmail)(email);
            if (!(password.length < 6)) {
              _context3.next = 5;
              break;
            }
            throw new Error(utils_errors__WEBPACK_IMPORTED_MODULE_5__.SERVER_ERROR_CODE.PASSWORD_TOO_SHORT);
          case 5:
            _context3.next = 7;
            return checkExistUser(email);
          case 7:
            accessSecretKey = Math.random().toString(36).slice(2);
            _context3.t0 = insertUser;
            _context3.t1 = email;
            _context3.next = 12;
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcrypt'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(password, 10);
          case 12:
            _context3.t2 = _context3.sent;
            _context3.t3 = accessSecretKey;
            _context3.t4 = displayedName;
            _context3.t5 = !!displayedName;
            _context3.t6 = avatar;
            _context3.t7 = !!avatar;
            _context3.t8 = {
              email: _context3.t1,
              password_hashed: _context3.t2,
              access_secret_key: _context3.t3,
              displayed_name: _context3.t4,
              changed_displayed_name_manually: _context3.t5,
              avatar: _context3.t6,
              changed_avatar_manually: _context3.t7,
              active: false
            };
            _context3.next = 21;
            return (0, _context3.t0)(_context3.t8);
          case 21:
            otpInstance = new (otp__WEBPACK_IMPORTED_MODULE_3___default())({
              secret: accessSecretKey
            });
            otp = otpInstance.totp(new Date().getTime());
            (0,utils_email__WEBPACK_IMPORTED_MODULE_7__["default"])({
              receivers: [email],
              subject: 'Verify email',
              text: "Here your otp: ".concat(otp, ". This otp lives in 30s")
            });
            return _context3.abrupt("return", true);
          case 27:
            _context3.prev = 27;
            _context3.t9 = _context3["catch"](1);
            utils_common__WEBPACK_IMPORTED_MODULE_6__.logger.error(_context3.t9);
            return _context3.abrupt("return", false);
          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 27]]);
  }));
  return function handler(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "./services/query.ts":
/*!***************************!*\
  !*** ./services/query.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'got'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/config */ "./utils/config.ts");
/* harmony import */ var utils_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/jwt */ "./utils/jwt.ts");






var request = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'got'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  responseType: 'json'
});
var token = null;
var requestServiceToken = function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", token);
          case 2:
            return _context.abrupt("return", (0,utils_jwt__WEBPACK_IMPORTED_MODULE_4__.signJWT)({
              'admin': true,
              'https://hasura.io/jwt/claims': {
                'x-hasura-allowed-roles': ['admin'],
                'x-hasura-default-role': 'admin',
                'x-hasura-service-id': utils_config__WEBPACK_IMPORTED_MODULE_3__.ENV.SERVICE_ID
              }
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function requestServiceToken() {
    return _ref.apply(this, arguments);
  };
}();
var query = function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(_query, variables) {
    var token, resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return requestServiceToken();
          case 2:
            token = _context2.sent;
            _context2.next = 5;
            return request.post("".concat(utils_config__WEBPACK_IMPORTED_MODULE_3__.ENV.HASURA_ENDPOINT, "/v1/graphql"), {
              json: {
                query: _query,
                variables: variables
              },
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer ".concat(token)
              }
            });
          case 5:
            resp = _context2.sent;
            return _context2.abrupt("return", resp.body);
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function query(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./utils/common.ts":
/*!*************************!*\
  !*** ./utils/common.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "verifyEmail": () => (/* binding */ verifyEmail),
/* harmony export */   "verifyImage": () => (/* binding */ verifyImage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pino */ "./node_modules/pino/pino.js");
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/errors */ "./utils/errors.ts");



var verifyEmail = function verifyEmail(email) {
  if (!/@bizzi.vn\s*$/.test(email)) {
    throw new Error(utils_errors__WEBPACK_IMPORTED_MODULE_2__.SERVER_ERROR_CODE.INVALID_INPUT);
  }
};
var verifyImage = function verifyImage(url) {
  if (!(url.startsWith('https://') && (url.endsWith('png') || url.endsWith('jpg') || url.endsWith('jpeg')))) {
    throw new Error(utils_errors__WEBPACK_IMPORTED_MODULE_2__.SERVER_ERROR_CODE.INVALID_INPUT);
  }
};
var logger = pino__WEBPACK_IMPORTED_MODULE_1___default()();

/***/ }),

/***/ "./utils/config.ts":
/*!*************************!*\
  !*** ./utils/config.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENV": () => (/* binding */ ENV)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var ENV = {
  HASURA_ENDPOINT: process.env['HASURA_ENDPOINT'],
  SERVICE_ID: process.env['SERVICE_ID'],
  SERVICE_SECRET: process.env['SERVICE_SECRET'],
  GOOGLE_AUTH_CLIENT_ID: process.env['GOOGLE_AUTH_CLIENT_ID'],
  GOOGLE_AUTH_SECRET: process.env['GOOGLE_AUTH_SECRET'],
  EMAIL_USER: process.env['EMAIL_USER'],
  EMAIL_PASSWORD: process.env['EMAIL_PASSWORD']
};

/***/ }),

/***/ "./utils/email.ts":
/*!************************!*\
  !*** ./utils/email.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer */ "./node_modules/nodemailer/lib/nodemailer.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/config */ "./utils/config.ts");





var sendMail = function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref) {
    var receivers, subject, text, transporter;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            receivers = _ref.receivers, subject = _ref.subject, text = _ref.text;
            transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3__.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: false,
              auth: {
                user: utils_config__WEBPACK_IMPORTED_MODULE_4__.ENV.EMAIL_USER,
                pass: utils_config__WEBPACK_IMPORTED_MODULE_4__.ENV.EMAIL_PASSWORD
              }
            });
            _context.next = 4;
            return transporter.sendMail({
              from: 'Bizzi Food Ordering',
              to: receivers.join(','),
              subject: subject,
              text: text
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function sendMail(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMail);

/***/ }),

/***/ "./utils/errors.ts":
/*!*************************!*\
  !*** ./utils/errors.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER_ERROR_CODE": () => (/* binding */ SERVER_ERROR_CODE)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var SERVER_ERROR_CODE;
(function (SERVER_ERROR_CODE) {
  SERVER_ERROR_CODE["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
  SERVER_ERROR_CODE["EMAIL_EXISTED"] = "EMAIL_EXISTED";
  SERVER_ERROR_CODE["CANNOT_FIND_USER"] = "CANNOT_FIND_USER";
  SERVER_ERROR_CODE["CANNOT_FIND_GROUP"] = "CANNOT_FIND_GROUP";
  SERVER_ERROR_CODE["UNAUTHORIZED"] = "UNAUTHORIZED";
  SERVER_ERROR_CODE["INVALID_INPUT"] = "INVALID_INPUT";
  SERVER_ERROR_CODE["INVALID_OTP"] = "INVALID_OTP";
  SERVER_ERROR_CODE["PASSWORD_TOO_SHORT"] = "PASSWORD_TOO_SHORT";
  SERVER_ERROR_CODE["PASSWORD_NOT_MATCH"] = "PASSWORD_NOT_MATCH";
})(SERVER_ERROR_CODE || (SERVER_ERROR_CODE = {}));

/***/ }),

/***/ "./utils/jwt.ts":
/*!**********************!*\
  !*** ./utils/jwt.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBearerToken": () => (/* binding */ getBearerToken),
/* harmony export */   "signJWT": () => (/* binding */ signJWT),
/* harmony export */   "verifyJWT": () => (/* binding */ verifyJWT),
/* harmony export */   "verifyJWTFromRequest": () => (/* binding */ verifyJWTFromRequest)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'source-map-support/register'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keys_publicKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keys/publicKey */ "./keys/publicKey.ts");
/* harmony import */ var keys_privateKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keys/privateKey */ "./keys/privateKey.ts");




var verifyJWT = function verifyJWT(token) {
  var publicKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keys_publicKey__WEBPACK_IMPORTED_MODULE_2__["default"];
  var algorithms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['RS256'];
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, publicKey, {
    algorithms: algorithms
  });
};
var signJWT = function signJWT(payload) {
  var privateKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : keys_privateKey__WEBPACK_IMPORTED_MODULE_3__["default"];
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(payload, privateKey);
};
var getBearerToken = function getBearerToken(_ref) {
  var headers = _ref.headers;
  var Authorization = headers.Authorization || headers.authorization;
  var XAuthorization = headers['X-Authorization'] || headers['x-authorization'];
  if (!Authorization && !XAuthorization) {
    throw new Error('No authorization');
  }
  return (Authorization || XAuthorization).split('Bearer ')[1];
};
var verifyJWTFromRequest = function verifyJWTFromRequest(req) {
  var token = getBearerToken(req);
  if (!token) return;
  return verifyJWT(token);
};

/***/ }),

/***/ "./functions/graphql/typeDefs/register.graphql":
/*!*****************************************************!*\
  !*** ./functions/graphql/typeDefs/register.graphql ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("type Mutation {\n  register(email: String!, password: String!, displayedName: String!, avatar: String): Boolean!\n}\n");

/***/ }),

/***/ "./functions/graphql/typeDefs/root.graphql":
/*!*************************************************!*\
  !*** ./functions/graphql/typeDefs/root.graphql ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("type Query {\n  _empty_billing: String\n}\n\nschema {\n  query: Query\n  # uncomment this line if this service have some mutations\n  mutation: Mutation\n}\n");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

module.exports = apollo-server-lambda;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jsonwebtoken_index_js-node_modules_nodemailer_lib_nodemailer_js-node_mod-520291"], () => (__webpack_require__("./functions/graphql/handler.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"./functions/graphql/handler": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendors-node_modules_jsonwebtoken_index_js-node_modules_nodemailer_lib_nodemailer_js-node_mod-520291");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=handler.js.map