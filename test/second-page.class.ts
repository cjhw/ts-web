import { log, onClass } from "../src/speed";
import {
  GetMapping,
  PostMapping,
  jwt,
  upload,
} from "../src/route-mapping.decorator";

@onClass
export default class SecondPage {
  @GetMapping("/second/setCookie")
  setCookiePage(req, res) {
    res.cookie("name", "zzz");
    return "setCookie";
  }

  @GetMapping("/second/getCookie")
  getCookiePage(req, res) {
    const cookieName = req.cookies.name;
    return "getCookie: " + cookieName;
  }

  @GetMapping("/second/testSession")
  testForSession(req, res) {
    req.session.view = req.session.view ? req.session.view + 1 : 1;
    return "testForSession: " + req.session.view;
  }

  @PostMapping("/upload")
  @upload
  public upload(req, res) {
    const files = req.files;
    log(files);
    log("uploaded");
    res.send("upload success");
  }

  @jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] })
  @PostMapping("/form")
  form(req, res) {
    res.render("upload");
  }

  @GetMapping("/second/testError")
  testError(req, res) {
    throw new Error("Test Error");
  }
}
