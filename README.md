## ❔ About
This package is API that can randomly generate a string.
## 🏁 Installation
```
npm i rstringapi

# Dev Version
npm i rstringapi@dev
```
## 💬 Example
```js
const { StringAPI } = require('rstringapi')

StringAPI({
  strings: [
    "test",
    "hello",
    "hi"
  ], // List of strings
  apiPort: 80 // The port on which the API will run
})
```