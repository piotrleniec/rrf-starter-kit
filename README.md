# RRF Starter Kit

## Installation

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

## Development

```
yarn start
```

## Deployment

1. Put your firebase project ID in `.firebaserc`.
2. Put your firebase config in `src/firebase/config.js`.
3. Login to firebase.
```
firebase login
```
4. Deploy your code.
```
yarn deploy
```
