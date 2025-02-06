import { STATE } from "../utils/enums/states";
import { FATE } from "../utils/enums/fates";

class Promise {
  constructor(executor) {
    this.state = STATE.PENDING;
    this.fate = FATE.UNRESOLVED;
    this.value = undefined;
    this.reason = undefined;
  }
}
