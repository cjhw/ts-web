import "reflect-metadata";
import BeanFactory from "./bean-factory.class";
import LogFactory from "./log-factory.class";

function onClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    log("decorator onClass: " + constructor.name);
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            //console.log("this.name");
        }
    };
}

function bean(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    let returnType = Reflect.getMetadata("design:returntype", target, propertyName);
    log("decorator bean, the return Type is: " + returnType.name);
    BeanFactory.putBean(returnType, target[propertyName]);
}

function autoware(target: any, propertyKey: string): void {
    console.log("decorator autoware: " + propertyKey);
    target[propertyKey] = "autoware value";
}

function inject(): any {
    console.log("decorator inject, outside the return.");
    return (target: any, propertyKey: string) => {
        console.log("decorator inject, in the return, propertyKey: " + propertyKey);
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        console.log("decorator inject, in the return, type.name: " + type.name);
        return {
            get: function () {
                return "decorator inject, in the return get function";
            }
        };
    }
}

function log(message?: any, ...optionalParams: any[]) {
    const logBean = BeanFactory.getBean(LogFactory);
    if(logBean) {
        const logObject = logBean();
        logObject.log(message, ...optionalParams);
    }else{
        console.log(message, ...optionalParams);
    }
}

export { onClass, bean, autoware, inject, log };