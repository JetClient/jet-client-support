
# JetClient

JetClient is a powerful HTTP client plugin for JetBrains IDEs (IntelliJ IDEA, GoLand, PyCharm, PhpStorm, etc.).
It is similar to Postman but has some advantages:

- **Integration with source code** - import API from code, navigate from request to code and vice versa
- **File Sync (Git Sync)** - save request collections to the local file system, restore them, or view the diff between
  the current state and the saved one.
  Share collection files with your team via Git with all its advantages such as history, code review, security, etc.
- **Advanced environment management** - create environment groups (e.g. Environment, User, Client) and select multiple
  environments at once, one for each group.
- **Advanced variable management** - variables are defined in folders separately for each environment and inherit
  variables from parent folders.
  They are easily edited in the json5 editor and can be not only primitive types, but also objects and arrays.
- **Powerful scripting** - write pre-request and test scripts for requests and folders, and even test suites that can
  reuse existing requests and folders.


## Contents

- [File Sync (Git Sync)](#git-sync)
- [Environments](#environments)
- [Variables](#variables)
- [Pre-request and Test Scripts](#pre-request-and-test-scripts)
- [Cookies](#cookies)
- [Proxy](#proxy)
- [Http/2](#http2)
- [Import](#import)
- [Contribution](#contribution)
- [Privacy](#privacy)

<a name="git-sync"></a>

## File Sync (Git Sync)

**File sync (Git sync)** allows you to save request collections to the local file system, restore them, or view the diff
between the current state and the saved one.
You can share collection files with your team via Git or any other VCS.

To use File Sync:

- Enable synchronization when creating a new collection or in the folder properties.
- Specify the path where the collection will be saved. Nested folders are always saved to the same location as their
  root folder.
- Click `Synchronization > Save All` on the explorer toolbar to save all collections.
  Or select a folder or a request and click `Save` in the context menu. Similarly, you can restore requests and folders
  or view the diff.

The new requests and folders are highlighted in green, the modified ones are highlighted in blue.

If you don't want to sync folder, you can disable synchronization in its properties. All nested folders will be disabled
as well.

<a name="environments"></a>

## Environments

**Environments** allow you to select different sets of variables.
They are grouped into **Environment Groups**.
You can select multiple environments at once, one for each group.

In most cases, you will have at least one environment group - `Environment` with the
environments: `Dev`, `Test`, `Prod`, etc.
Other groups can be `User`, `Client`, `Region`, etc.

Unlike other HTTP clients, in JetClient environments don't contain variables.
They are just labels that are used to select variables that are defined in folders.
**Environment** has **name** that is displayed in the environment selector
and **ID** that is used to group variables in folders.
**Environment group** also has **name** and **ID**.
Group ID is used only in scripts to save variables for the active environment of the specified group.

To create an environment:

- Open any request or folder.
- Click on the environment selector and select `Manage Environments...`.
- Click `Add > New Group` and enter group name and ID, or leave the auto-generated ID.
- Click `Add > New Environment` and enter environment name and ID, or leave the auto-generated ID.

Environments are not saved in the collection files.
You can **export** them to a separate file and share it with your team so that they can **import** it.
To do this, click `Export` or `Import` in the environment management dialog.

<a name="variables"></a>

## Variables

There are three types of variables:

- **Global variables** - Variables defined in **Globals** are available in all requests and folders.  
  They are well-suited for testing and prototyping, and for storing values that should be available throughout all
  collections such as tokens.
- **Folder variables** - Variables defined in a folder are available in all nested requests and folders.
  Folder variables can be of two types: **Local** and **Shared**. **Local** variables are not saved in the collection
  file during synchronization.
  **Shared** variables are saved in the collection file and can be shared with your team.
- **Runtime variables** - Temporary variables defined in scripts.
  They are scoped to a request or folder run, and are no longer available when the run is complete.
  Runtime variables are suitable if you need a value to override all other variable scopes but don't want the value to
  persist once execution has ended.

**Global** and **Folder variables** are defined in the json5 format. The json5 format is a superset of JSON that allows
comments, trailing commas, multi-line strings, etc. See [json5.org](https://json5.org/) for more details.

They are grouped by environment ID. There is a special **default** environment ID.
Its variables are available regardless of the selected environment.

Variables can be of primitive types, objects, and arrays. For example, you can define the JSON object as a variable
and reference it in the request body as `{{myRequestBody}}`. Also, you can reference an array element or an object
property as `{{myArray[0].myProperty}}`.

The variables are resolved in the following order (from the highest to the lowest priority):

1. **Runtime variables**
2. **Local environment folder variables** (if the environment is selected)
3. **Local default folder variables**
4. **Shared environment folder variables** (if the environment is selected)
5. **Shared default folder variables**
6. 2-5 for all parent folders
7. **Global variables**

<a name="pre-request-and-test-scripts"></a>

## Pre-request and Test Scripts

**Pre-request and Test Scripts** are written in JavaScript and can be defined for requests and folders.

Scripts are executed in the following order:

1. **Pre-request scripts** of all parent folders (from the root to the current folder)
2. **Pre-request script** of the request
3. **Test scripts** of all parent folders (from the root to the current folder)
4. **Test script** of the request

When folder run, all these steps are executed for all its requests.

The empty folders have special behavior and are used to write **Test Suites**.
They can have pre-request and test scripts, where you can use other requests and folders.
When **Test Suite** run, parent folder scripts are not executed.


JetClient built-in library is similar to Postman's but instead of `pm` it is called `jc`.
For example,

```js
jc.test("Status code is 200", () => {
    jc.expect(jc.response.code).to.eql(200)
})
```

This code uses the `jc` library to run the test method. The text string will appear in the test output.
The function inside the test represents an assertion.
JetClient tests can use [Chai Assertion Library BDD](https://www.chaijs.com/api/bdd/) syntax, which provides options
to optimize how readable your tests are to you and your collaborators.

See [JetClient Library](./docs/jet-client-library.md) for more details.

JetClient scripting is based on [GraalVM JavaScript engine](https://www.graalvm.org/latest/reference-manual/js/JavaScriptCompatibility/).
It allows you to use Java classes and methods in your scripts.

Also, you can add your own libraries to the scripts.
Go to `Settings > Tools > JetClient` and set `Libraries directory`.
It can be for example `node_modules` directory.
Then you can use `require` to import your libraries.
Note that not all libraries are compatible with GraalVM JavaScript engine as it has no Node.js built-in modules.

See [examples of using libraries](./docs/examples-of-using-libraries.md) for more details.

<a name="cookies"></a>

## Cookies

You can create or modify cookies in the `Globals > Cookies` tab.


<a name="proxy"></a>
## Proxy

Proxies are supported using the [IDE Proxy Settings](https://www.jetbrains.com/help/idea/http-proxy.html).


<a name="http2"></a>

## HTTP/2

To send a request using the `HTTP/2` protocol, please select `HTTP/2` option in `Settings > Tools > JetClient > HTTP Version`.


<a name="import"></a>

## Import

JetClient supports importing collections from the following sources:

- JetClient
- Spring
- JAX-RS
- OpenAPI (Swagger)

More sources are coming soon!


<a name="contribution"></a>

## Contribution

- If you'd like to improve documentation, please submit a PR.
- Suggestions to further improve the product.

<a name="privacy"></a>

## Privacy

- JetClient does not collect any data.
- Local Variables, Cookies and OAuth2 Tokens are [stored securely in your system](https://plugins.jetbrains.com/docs/intellij/persisting-sensitive-data.html) (KeePass on Windows, Keychain on macOS, and libsecret on Linux).
- There is no backend or cloud sync. Sensitivity data is stored securely in your system, other data is stored in `.idea/JetClient` directory of your project and in the collection files if you are using synchronization.