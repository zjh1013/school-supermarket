import { observable, action } from "mobx";
import { setInterval } from "timers";
class Home {
  @observable title = "左家辉";
  @observable num = null;
  @observable token = "";
  @observable flag = true;
  @observable random = Math.random()
    .toString()
    .substr(2, 6);
  @observable dataTime = new Date().getTime();
  @action updata() {
    this.dataTime = new Date().getTime();
  }
  @action randoms() {
    this.random = Math.random()
      .toString()
      .substr(2, 6);
  }
  @action add() {
    this.num += 1;
  }
  @action sub() {
    this.num -= 1;
  }
  @action cun(token) {
    this.token = token;
  }
  @action isfalse = () => {
    this.flag = !this.flag;
  };
}
const home = new Home();
setInterval(() => {
  home.updata();
}, 1000);
setInterval(() => {
  home.randoms();
}, 1000);
export default home;
