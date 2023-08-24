"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogFactory {
    log(message, ...optionalParams) {
        console.log(message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        console.error(message, ...optionalParams);
    }
}
exports.default = LogFactory;
