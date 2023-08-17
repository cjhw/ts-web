import { before, log, onClass, after } from "../src/speed";
import FirstPage from "./first-page.class";

@onClass
export default class AopTest {
  @before(FirstPage, "index")
  public FirstIndex() {
    log("Before FirstPage index run, at AopTest FirstIndex.");
    log("AopTest FirstIndex run over." + this.getWordsFromAopTest());
    return "FirstIndex";
  }

  public getWordsFromAopTest() {
    return "getWordsFromAopTest";
  }

  @before(FirstPage, "getTestFromFirstPage")
  public testGetTestFromFirstPage() {
    log("AopTest testGetTestFromFirstPage run over.");
  }

  @after(FirstPage, "index")
  public testFirstIndexAfter(result) {
    log("AopTest testFirstIndexAfter run over, result: " + result);
    log(result);
  }
}
