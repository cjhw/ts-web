import * as express from 'express';
export default abstract class AuthenticationFactory {
    preHandle(req: express.Request, res: express.Response, next: express.NextFunction): void;
    afterCompletion(req: express.Request, res: express.Response, next: express.NextFunction): void;
}
