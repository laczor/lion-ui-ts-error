This is a reproduction recipe for the issue of https://github.com/ing-bank/lion/issues/1921.

Reproduction recipe:

```
  cd local-packages\local-button\
  npm i
  cd ..
  cd local-lion-ui
  npm i
  cd ..\..
  npm ci
  npm run build
```

