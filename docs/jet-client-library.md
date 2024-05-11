# JetClient Library

## Contents

- [The jc Object](#jc-object)
- [Using Variables in Scripts](#using-variables-in-scripts)
  - [Global Variables](#global-variables)
  - [Environment Variables](#environment-variables)
  - [Folder Variables](#folder-variables)
- [Scripting with request and response data](#scripting-with-request-and-response-data)
  - [Scripting with request data](#scripting-with-request-data)
  - [Scripting with response data](#scripting-with-response-data)
- [Sending Requests from Scripts](#sending-requests-from-scripts)
- [Running Requests, Folders, and Test Suites from Scripts](#running-requests-and-folders-from-scripts)
- [Writing Test Assertions](#writing-test-assertions)
- [Using External Libraries](#using-external-libraries)


<a name="jc-object"></a>
## The jc Object

The majority of the functionality within the JetClient JavaScript API is accessed through the `jc.*` object. This object provides access to request and response data, variables, and more. For detailed type definitions, see [JetClient Library Types](./jet-client.d.ts).


<a name="using-variables-in-scripts"></a>
## Using Variables in Scripts

Use the `jc.variables` methods to access and manage variables at different scopes and setting runtime variables.

To check if a variable exists in the current scope:

```js
jc.variables.has("variableName")
```

To get the value of a variable by its name:
    
```js
jc.variables.get("variableName")
```

To set a runtime variable:
    
```js
jc.variables.set("variableName", "variableValue")
```

To replace all variables in a string with their actual values:
    
```js
jc.variables.replaceIn("Hi, my name is {{myName}}")
```

<a name="global-variables"></a>
### Global Variables

Use the `jc.globals` methods to access and manipulate global variables across all environments and requests.

To verify if a global variable exists:
```js
jc.globals.has("variableName")
```

To get the value of a global variable:
```js
jc.globals.get("variableName")
```

To replace all variables in a string with their actual values:
```js
jc.globals.replaceIn("Welcome, {{userName}}")
```

To set a global variable:
```js
jc.globals.set("variableName", "variableValue")
```

To delete a global variable:
```js
jc.globals.unset("variableName")
```

To clear all global variables:
```js
jc.globals.clear()
```
        
<a name="environment-variables"></a>
### Environment Variables
Use the `jc.environment` methods to access and manage variables within a specific environment. If no environment group is specified, the Default group is used.

To check if a variable exists in the active environment:
```js
jc.environment.has("variableName", "envGroup")
```

To get the value of an environment variable:
```js
jc.environment.get("variableName", "envGroup")
```

To replace all environment variables in a string with their actual values:
```js
jc.environment.replaceIn("Server URL is {{baseUrl}}", "envGroup")
```

To set or update a variable in the active environment:
```js
jc.environment.set("variableName", "variableValue", "envGroup")
```

To remove a variable from the active environment:
```js
jc.environment.unset("variableName", "envGroup")
```

To clear all variables in the active environment:
```js
jc.environment.clear("envGroup")
```

<a name="folder-variables"></a>
### Folder Variables

Utilize the `jc.folderVariables` methods to access and manipulate folder variables in your scripts.

To verify if a folder contains a specific variable:

```js
jc.folderVariables.has("variableName")
```

To get the value of a variable:
```js
jc.folderVariables.get("variableName")
```

To replace all variables in a string with their actual values:
```js
jc.folderVariables.replaceIn("Hi, my name is {{myName}}")
```

To set a local folder variable:
```js
jc.folderVariables.set("variableName", "variableValue")
```

To delete a specific folder variable:
```js
jc.folderVariables.unset("variableName")
```

To clear all local variables in the folder:
```js
jc.folderVariables.clear()
```


<a name="scripting-with-request-and-response-data"></a>
## Scripting with request and response data
`jc.request` and `jc.response` objects provide access to request and response data.

<a name="scripting-with-request-data"></a>
### Scripting with request data
The `jc.request` object provides access to the data for the request the script is running within. 
For a Pre-request Script this is the request that's about to run, and for a Test script this is the request that has already run.

You can use the `jc.request` object in pre-request scripts to alter various parts of the request configuration before it runs.

The `jc.request` object provides multiple methods for accessing and manipulating request data.
See [JetClient Library Types](./jet-client.d.ts) for type definitions.


<a name="scripting-with-response-data"></a>
### Scripting with response data

The `jc.response` object provides access to the data returned in the response for the current request in scripts added to the Tests.
The `jc.response` object provides the following properties and methods:

The response status code:
```js
jc.response.code
```

The status text string:
```js
jc.response.status
```
The response headers:
```js
jc.response.headers
```

The time the response took to receive in milliseconds:
```js
jc.response.responseTime
```

The size of the response received:
```js
jc.response.responseSize
```

The response text:
```js
jc.response.text()
```

The response body as a JSON object:
```js
jc.response.json()
```


<a name="sending-requests-from-scripts"></a>
## Sending Requests from Scripts

The `jc.sendRequest` method allows you to send requests asynchronously from Pre-request or Test scripts. This method returns a promise that resolves to the response object. 

### Using `HttpRequest` Builder

Create a request object with the `HttpRequest` builder and pass it to `jc.sendRequest`:

```js
jc.sendRequest(new HttpRequest()
        .setUrl("https://httpbin.org/anything")
        .setMethod("GET"))
        .then((response) => {
          console.log(response.json());
        });
```
### Using a JavaScript Object
Alternatively, create a request using a JavaScript object:
```js
jc.sendRequest({
  url: "https://httpbin.org/anything",
  method: "GET"
})
.then((response) => {
  console.log(response.json());
});
```
### Using an Existing Request Object
You can also utilize an existing request object retrieved with `jc.findRequest`:
```js
const response = await jc.sendRequest(
    jc.findRequest("/folderName/requestName")
      .addQueryParam('param', 'paramValue')
      .setBodyJson({key: 'value'}));
console.log(response.json());
```

### Important Notes
`jc.sendRequest` returns a promise that resolves to the response object. Handle the response synchronously with the `await` keyword or asynchronously with the `then` and `catch` methods.

When using the `jc.sendRequest` method, associated Pre-request and Test scripts are not executed. To ensure these scripts are run, use the `jc.runRequest` method.

<a name="running-requests-and-folders-from-scripts"></a>
## Running Requests, Folders, and Test Suites from Scripts

`jc.runRequest` is used to execute requests along with their associated Pre-request and Test scripts, as well as those of their parent folders.

Use `jc.runFolder` to execute all requests within a specified folder and its subfolders, including their respective scripts:
```js
await jc.runFolder("/parentFolder/childFolder")
```

Similarly, `jc.runTestSuite` allows you to execute test suites:

```js
await jc.runTestSuite("/folder/TestSuiteName")
```

<a name="writing-test-assertions"></a>
## Writing Test Assertions

Use `jc.test` to write test specifications within Pre-request or Test scripts. Each test should include a name and assertion(s). JetClient will then output the test results as part of the response.

```js
jc.test("response should be okay to process", () => {
  jc.response.to.not.be.error
  jc.response.to.have.jsonBody()
  jc.response.to.not.have.jsonBody('error')
})
```
The `jc.expect` method allows you to write more detailed assertions on your response data, utilizing the [ChaiJS expect BDD](https://www.chaijs.com/api/bdd/) syntax.
```js
jc.expect(jc.response.code).to.be.eq(200)
```
You can also use `jc.response.to.have.*` and `jc.response.to.be.*` to build your assertions.


<a name="using-external-libraries"></a>
## Using External Libraries

The `require` function enables the use of external libraries in your scripts. JetClient comes with built-in libraries such as `ajv`, `atob`, `btoa`, `chai`, `cheerio`, `crypto-js`, `csv-parse/lib/sync`, `lodash`, `moment`, `tv4`, `uuid`, and `xml2js`, all of which you can import using `require`.

Additionally, you can add your own libraries to the scripts. Navigate to `Settings > Tools > JetClient` and set the `Libraries directory`. If you are using npm libraries, specify the directory containing your `package.json` and `node_modules`. Otherwise, set the directory where your script libraries are located. You can then use `require` to import your libraries.
