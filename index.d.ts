import {dispatch} from "./index";

export default interface Modal {
  useModal: (deps?: string[]) => [any, dispatch]
}
