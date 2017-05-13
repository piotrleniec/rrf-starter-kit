# RRF Starter Kit

### Installation

1. Make sure you have [yarn](https://yarnpkg.com/en/docs/install) installed.
2. Fork the repository.
3. Clone your fork.
```
git clone https://github.com/YOUR_USERNAME/rrf-starter-kit.git
```
4. Install dependencies.
```
yarn
```

### Development

```
yarn start
```

### Deployment

1. Make sure you have [firebase-tools](https://github.com/firebase/firebase-tools) installed.
2. Put your firebase project ID in `.firebaserc`.
3. Put your firebase config in `src/firebase/config.js`.
4. Login to firebase.
```
firebase login
```
5. Deploy your code.
```
yarn deploy
```

### Preconfigured libraries

- [react](https://github.com/facebook/react)
- [redux](https://github.com/reactjs/redux) (with [react-redux](https://github.com/reactjs/react-redux))
- [redux-devtools](https://github.com/gaearon/redux-devtools)
- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [react-router](https://github.com/ReactTraining/react-router)
- [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
- [firebase](https://www.npmjs.com/package/firebase)
- [redux-form](https://github.com/erikras/redux-form)
