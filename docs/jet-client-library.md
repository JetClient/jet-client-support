# JetClient Library

## Contents

- [The jc object](#jc-object)
- [Using variables in scripts](#using-variables-in-scripts)
  - [Folder variables](#folder-variables)
  - [Global variables](#global-variables)
- [Scripting with request and response data](#scripting-with-request-and-response-data)
  - [Scripting with request data](#scripting-with-request-data)
  - [Scripting with response data](#scripting-with-response-data)
- [Sending requests from scripts](#sending-requests-from-scripts)
- [Running requests and folders from scripts](#running-requests-and-folders-from-scripts)
- [Writing test assertions](#writing-test-assertions)
- [Using external libraries](#using-external-libraries)


<a name="jc-object"></a>
## The jc object

You will carry out most of the JetClient JavaScript API functionality using `jc.*`, which provides access to request and response data, and variables.
See [JetClient Library Types](./jet-client.d.ts) for type definitions.

<a name="using-variables-in-scripts"></a>
## Using variables in scripts

Use `jc.variables` methods for accessing variables at different scopes and setting local variables.

Check if there is a variable in the current scope:

```js
jc.variables.has("variableName")
```

Get the value of the variable with the specified name:
    
```js
jc.variables.get("variableName")
```

Set a runtime variable:
    
```js
jc.variables.set("variableName", "variableValue")
```

Replace all variables in the string with their values:
    
```js
jc.variables.replaceIn("Hi, my name is {{myName}}")
```


<a name="folder-variables"></a>
### Folder variables
Your scripts can use the `jc.folderVariables` or `jc.findFolder("folderId").variables` methods to access and manipulate variables.

Check whether the folder has a variable:
```js
jc.folderVariables.has("variableName")
```

Get the value of the variable:
```js
jc.folderVariables.get("variableName")
```

Replace all variables in the string with their values:
```js
jc.folderVariables.replaceIn("Hi, my name is {{myName}}")
```

Set a default local folder variable:
```js
jc.folderVariables.setLocalDefault("variableName", "variableValue")
```

Set a local folder variable for the active environment of the specified environment group.
You can omit the `envGroupId` parameter, for example, if you have only one environment group.
In this case the first environment group will be used.
```js
jc.folderVariables.setLocalEnv("variableName", "variableValue")
jc.folderVariables.setLocalEnv("variableName", "variableValue", "envGroupId")
```

Set a default shared folder variable:
```js
jc.folderVariables.setSharedDefault("variableName", "variableValue")
```

Set a shared folder variable for the active environment of the specified environment group:

```js
jc.folderVariables.setSharedEnv("variableName", "variableValue")
jc.folderVariables.setSharedEnv("variableName", "variableValue", "envGroupId")
```

Delete a folder variable:
```js
jc.folderVariables.removeLocalDefault("variableName")
jc.folderVariables.removeSharedDefault("variableName")
jc.folderVariables.removeLocalEnv("variableName", "envGroupId")
jc.folderVariables.removeSharedEnv("variableName", "envGroupId")
```

Clear variables:
```js
jc.folderVariables.clearLocal()
jc.folderVariables.clearLocalDefault()
jc.folderVariables.clearLocalEnv("envGroupId")
jc.folderVariables.clearShared()
jc.folderVariables.clearSharedDefault()
jc.folderVariables.clearSharedEnv("envGroupId")
```


<a name="global-variables"></a>
### Global variables
Your scripts can use the `jc.globalVariables` methods to access and manipulate global variables.

Check where there is a global variable with the specified name:
```js
jc.globalVariables.has("variableName")
```

Return the value of the global variable:
```js
jc.globalVariables.get("variableName")
```

Replace all variables in the string with their values:
```js
jc.globalVariables.replaceIn("Hi, my name is {{myName}}")
```

Set a global default variable:
```js
jc.globalVariables.setDefault("variableName", "variableValue")
```

Set a global variable for the active environment of the specified environment group:
```js
jc.globalVariables.setEnv("variableName", "variableValue", "envGroupId")
```

Delete a global variable:
```js
jc.globalVariables.removeDefault("variableName")
jc.globalVariables.removeEnv("variableName", "envGroupId")
```

Clear variables:
```js
jc.globalVariables.clear()
jc.globalVariables.clearDefault()
jc.globalVariables.clearEnv("envGroupId")
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
## Sending requests from scripts

You can use the `jc.sendRequest` method to send a request asynchronously 
from a Pre-request or Test script. It returns a promise that resolves to the response object.
Use the `await` keyword to wait for the response or use the `then` method to handle the response.

Use `HttpRequest` builder to create a request object and pass it to the `jc.sendRequest` method:
```js
jc.sendRequest(new HttpRequest()
    .setUrl("https://httpbin.org/anything")
    .setMethod("GET"))
    .then((response) => {
        console.log(response.json())
    })
```
Or you can use the existing request object from the `jc.findRequest` method:
```js
const response = await jc.sendRequest(
        jc.findRequest("6c3ad236")
                .addQueryParam('param', 'paramValue')
                .setBodyJson({key: 'value'}))
console.log(response.json())
```
When using the `jc.sendRequest` method, Pre-request and Tests scripts are not executed.
If you need to execute them, use the `jc.runRequest` method.


<a name="running-requests-and-folders-from-scripts"></a>
## Running requests and folders from scripts

`jc.runRequest` is similar to `jc.sendRequest`, but it executes the Pre-request and Tests scripts of the request and its parent folders.

Use `jc.runFolder` to run all requests in the specified folder and its subfolders 
or when the folder is empty (Test Suite) to run its Pre-request and Tests scripts.

```js
await jc.runFolder("c5f9f610")
```

<a name="writing-test-assertions"></a>
## Writing test assertions
You can use `jc.test` to write test specifications inside either the Pre-request or Tests scripts. 
Tests include a name and assertion. JetClient will output test results as part of the response.

```js
jc.test("response should be okay to process", () => {
  jc.response.to.not.be.error
  jc.response.to.have.jsonBody()
  jc.response.to.not.have.jsonBody('error')
})
```
The `jc.expect` method allows you to write assertions on your response data, using [ChaiJS expect BDD](https://www.chaijs.com/api/bdd/) syntax.
```js
jc.expect(jc.response.code).to.be.eq(200)
```
You can also use `jc.response.to.have.*` and `jc.response.to.be.*` to build your assertions.


<a name="using-external-libraries"></a>
## Using external libraries
The `require` function allows you to use external libraries in your scripts.
See [examples of using libraries](./examples-of-using-libraries.md).
