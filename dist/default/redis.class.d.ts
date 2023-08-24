import { Redis as IoRedis, RedisKey } from "ioredis";
declare class Redis extends IoRedis {
    private static pubObj;
    private static subObj;
    getRedis(): Redis;
    zrevranking(key: RedisKey, start: number | string, stop: number | string): Promise<Map<string, number>>;
    zranking(key: RedisKey, start: number | string, stop: number | string): Promise<Map<string, number>>;
    static getInstanceOfRedis(mode: "sub" | "pub"): Redis;
}
declare function redisSubscriber(channel: string): (target: any, propertyKey: string) => void;
export { Redis, redisSubscriber };
