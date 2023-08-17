import ServerFactory from "../src/factory/server-factory.class";
import { app, autoware, log } from "../src/speed";

@app
class Main {
  @autoware
  public server: ServerFactory;

  public main() {
    this.server.start(8080);
    log("start application");
  }
}
