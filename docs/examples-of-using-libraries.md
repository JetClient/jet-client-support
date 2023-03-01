# Examples of using libraries

### UUID

`uuid` npm package does not work with GraalVM JavaScript engine. You can use `UUID` class from Java instead.

```javascript
const UUID = Java.type('java.util.UUID');
global.uuid = () => UUID.randomUUID().toString();
console.log(uuid());
```
It can be useful to define functions in the `global` object in `Pre-request` script of the root folder.
Then you can use them in the scripts of all nested folders and requests.

### Base64
`atob` and `btoa` npm packages do not work with GraalVM JavaScript engine.
You can use `CryptoJS` library to encode and decode Base64.

### Using external libraries
The examples of useful libraries that you can use in your scripts:
- [CryptoJS](https://github.com/brix/crypto-js) - encoding/decoding, encryption/decryption, hashing, etc.
- [moment](https://momentjs.com/) - date and time formatting
- [lodash](https://lodash.com/) - utility functions
- [ajv](https://ajv.js.org/) - JSON schema validator
- [cheerio](https://cheerio.js.org/) - parsing and manipulating HTML and XML

Consider adding libraries on example of `CryptoJS`.

To use `CryptoJS`, you need to install it first. You can do it using `npm`.
Create `package.json` file and add `crypto-js` to the dependencies. 
Some libraries have built-in TypeScript definitions, but for some you need to install them separately.
In this case, you need to add `@types/crypto-js` to the dependencies. It is optional, but without it, you will not have code completion in your IDE.

```json
{
  "dependencies": {
    "crypto-js": "4.1.1",
    "@types/crypto-js": "4.1.1"
  }
}
```
You can put `package.json` to the `.jetclient` directory in your project for example.
Run `npm install` in the directory with `package.json` file. 

Then set `Libraries directory` in `Settings > Tools > JetClient` to the `node_modules` directory.

Now you can use `CryptoJS` library in your scripts.

```javascript
const CryptoJS = require("crypto-js");

global.base64Encode = (text) => {
    const encodedWord = CryptoJS.enc.Utf8.parse(text);
    return CryptoJS.enc.Base64.stringify(encodedWord);
}

global.base64Decode = (encodedText) => {
    const encodedWord = CryptoJS.enc.Base64.parse(encodedText);
    return CryptoJS.enc.Utf8.stringify(encodedWord);
}

console.log(base64Encode("Hello World!"));
console.log(base64Decode("SGVsbG8gV29ybGQh"));
```
