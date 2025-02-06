import { STATE } from "../utils/enums/states";
import { FATE } from "../utils/enums/fates";

class Promise {
  #state;
  #fate;
  #value;
  #reason;
  constructor(executor) {
    this.#state = STATE.PENDING;
    this.#fate = FATE.UNRESOLVED;
    this.#value = undefined;
    this.#reason = undefined;

    try {
      executor(this.#resolve, this.#reject);
    } catch (error) {
      this.#reject();
    }
  }

  #resolve(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#state = STATE.FULFILLED;
    this.#value = value;
  }
  #reject(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#state = STATE.REJECTED;
    this.#value = value;
  }
}
