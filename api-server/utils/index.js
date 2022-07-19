const { RequestHandler, Request, Response, NextFunction } = require("express");
/**
 *
 * @callback ExpressCallback
 * @param {Request} req - Express request object
 * @param {Response} res - Express request object
 * @param {NextFunction} next - Express request object
 * @returns {Promise<void>}x
 *
 */

/**
 * Function to handle async errors
 *
 * @param {ExpressCallback} fn - Asynchronous handler
 * @returns {RequestHandler} Express hanlder
 */
exports.catchAsync = (fn) => (req, res, next) => {
    fn(req, res, next).catch(next);
};
