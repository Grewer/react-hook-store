## react-hooks-redux-store

**This plugin is only available for react 16.8 or higher.**

###  download
```
npm i react-hooks-redux-store
```
or 
```
yarn add react-hooks-redux-store
```


### create
store.ts:
```
import Modal from 'react-hooks-redux-store';

const countReducer = function (state = 0, action) {
    switch (action.type) {
      case "ADD":
        return state + action.payload || 1
      default:
        return state
    }
}


const reducers = combineReducers({
  countReducer,
  // omit other reduers
});

const modal = new Modal(reducers)

export const useModal = modal.useModal
```


### base usage
app.tsx:
```
function app(){
  const [state, dispatch] = useModal(['countReducer']);
  // The parameters act like hooks' deps
  return <div>state.countReducer</div>
}
```

#### middleware

```
import promiseMiddleware from "react-hooks-redux-store/lib/promiseMiddleware";
// The promiseMiddleware acts like redux-promise



const reducers = combineReducers({
  countReducer,
  // omit other reduers
});


const modal = new Modal(reducers, promiseMiddleware)

export const useModal = modal.useModal
```
use:
```
dispatch(createAction("ADD", async () => await Get(url))())
```


