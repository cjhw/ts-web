import * as tracer from "tracer";
import { bean, LogFactory } from "../../src/typespeed";

export default class CustomLog extends LogFactory {
    private logger = tracer.console({
        format: "[{{title}}] {{timestamp}} {{file}}:{{line}} ({{method}}) {{message}}",
        dateformat: "yyyy-mm-dd HH:MM:ss",
        stackIndex: 2,
        preprocess: function (data) {
            data.title = data.title.toUpperCase();
        }
    });

    @bean
    public createLog(): LogFactory {
        return new CustomLog();
    }

    public log(message?: any, ...optionalParams: any[]) : void{
        if(process.env.LOG === "CLOSE") return;
        this.logger.log(message, ...optionalParams);
    }

    public error(message?: any, ...optionalParams: any[]) : void {
        this.logger.error(message, ...optionalParams);
    }

    public debug(message?: any, ...optionalParams: any[]) : void {
        if(process.env.NODE_ENV === "development"){
            this.logger.debug(message, ...optionalParams);
        }
    }
}