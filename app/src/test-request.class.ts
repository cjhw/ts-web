import { component, getMapping, postMapping, log, req, res, reqQuery, reqBody, reqForm, reqParam } from "../../src/typespeed";
import MutilUsers from "./entities/mutil-users.class";
import UserDto from "./entities/user-dto.class";


@component
export default class TestRequest {

    @getMapping("/request/res")
    testRes(@req req, @res res) {
        res.send("test res");
    }

    @getMapping("/request/query")
    async testQuery(req, res, @reqQuery id: number): Promise<MutilUsers> {
        log("id: " + id);
        return Promise.resolve(new MutilUsers("group", [new UserDto(1, "name"), new UserDto(2, "name")]));
    }

    @postMapping("/request/body")
    testBody(@res res, @reqBody body: UserDto):MutilUsers {
        log("body: " + JSON.stringify(body));
        return new MutilUsers("group", [body]);
    }

    @postMapping("/request/form")
    testForm(@res res, @reqForm("name") name: string) {
        log("form: " + JSON.stringify(name));
        res.send("Got name: " + name);
    }

    @getMapping("/request/param/:id")
    testParam(@res res, @reqParam id: number) {
        log("id: " + id);
        res.send("test param: " + id);
    }
}