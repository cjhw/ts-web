import ServerFactory from "../factory/server-factory.class";
import AuthenticationFactory from "../factory/authentication-factory.class";
export default class ExpressServer extends ServerFactory {
    view: string;
    private static;
    private favicon;
    private compression;
    private cookieConfig;
    private session;
    private redisConfig;
    private redisClient;
    authentication: AuthenticationFactory;
    getSever(): ServerFactory;
    setMiddleware(middleware: any): void;
    start(port: number, callback?: Function): any;
    private setDefaultMiddleware;
}
