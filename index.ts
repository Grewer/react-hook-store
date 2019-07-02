import react, {useEffect, useState} from "react";

export type action = { type: string, payload: any }

export type queue = { setState: react.Dispatch<react.SetStateAction<any>>, deps?: string[] }

export type dispatch = (action: action) => void;

export type promiseMiddleware = (dispatch: dispatch) => (action: action) => void


class Modal {
  private value: any;
  private reducers: (state, action: action) => {};
  private queue: queue[] = [];
  private dispatch: dispatch;

  constructor(reducers, promiseMiddleware?: promiseMiddleware) {
    this.reducers = reducers
    this.value = this.reducers({}, {type: '', payload: ''})
    const dispatch = action => {
      const prevValue = this.value; // old value
      this.value = this.reducers(this.value, action) // new object
      this.onDataChange(prevValue)
    }
    this.dispatch = promiseMiddleware ? promiseMiddleware(dispatch) : dispatch
  }

  useModal: (deps?: string[]) => [any, dispatch] = (deps?: string[]) => {
    const [, setState] = useState(this.value);
    useEffect(() => {
      const index = this.queue.push({setState, deps});
      return () => { //  unmount remove listen
        this.queue.splice(index - 1, 1);
      };
    }, []); // mount add listen
    return [this.value, this.dispatch]
  }

  onDataChange = (prevValue) => {
    this.queue.forEach((queue) => {
      const isRender = queue.deps ? queue.deps.some(dep => prevValue[dep] !== this.value[dep]) : true
      if (isRender) {
        queue.setState(this.value)
      }
    });
  }
}


export default Modal
