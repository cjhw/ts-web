import AuthenticationFactory from "../factory/authentication-factory.class";
export default class DefaultAuthentication extends AuthenticationFactory {
    getAuthentication(): AuthenticationFactory;
}
