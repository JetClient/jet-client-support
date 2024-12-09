Change Log
----------
## 2024.3.21 (2024-12-09)

### Added
- [#113](https://github.com/JetClient/jet-client-support/issues/113) `jc.execution.setNextRequest` and `jc.execution.skipRequest` methods to control execution flow in the collection runner
- [#120](https://github.com/JetClient/jet-client-support/issues/120) Project-level Headers
- Project-level Auth

### Fixed
- [#124](https://github.com/JetClient/jet-client-support/issues/124) Setting variable values from scripts not working correctly
- Minor fixes

## 2024.3.20 (2024-12-06)
### Fixed
- [#122](https://github.com/JetClient/jet-client-support/issues/122) Hyphens in variable names causing ExpressionEvaluationException
- [#123](https://github.com/JetClient/jet-client-support/issues/123) Response time not including connection establishment time
- [#124](https://github.com/JetClient/jet-client-support/issues/124) Setting variable value from script not overriding existing value

## 2024.3.19 (2024-12-02)
### Added
- Enhanced inline expressions in {{...}} syntax:
  - Supports: variables, literals, function calls, arithmetic operations, string concatenation, ?? (coalesce) operator
  - Built-in functions:
      - `$pickOne(array)` - Select random item from array
      - `$randomInt(min, max)` - Generate random integer
      - `$textInput(label)` - Prompt for user input
      - `$readFileAsText(filePath)` - Read file contents
      - `$eval(jsCode)` - Execute JavaScript
      - `$exec(command)` - Run shell commands
      - And more...
### Changed
- Removed random and OpenAI data generation features
- Removed methods (`get`, `has`, `replaceIn`) from `jc.folderVariables`, `jc.environment`, `jc.globals`, `jc.collectionVariables`, and `jc.testSuiteVariables` (use `jc.variables` instead).

## 2024.3.18 (2024-11-22)
### Fixed
- [#121](https://github.com/JetClient/jet-client-support/issues/121) Fixed setTimeout functionality in scripts that was broken since 2024.3.16

## 2024.3.17 (2024-11-20)
### Fixed
- [#119](https://github.com/JetClient/jet-client-support/issues/119) Crash on code generation
- [#118](https://github.com/JetClient/jet-client-support/issues/118) Crash on any request

## 2024.3.16 (2024-11-18)
### Fixed
- [#119](https://github.com/JetClient/jet-client-support/issues/119) Crash on code generation 
- [#118](https://github.com/JetClient/jet-client-support/issues/118) Crash on any request
- "Multi threaded access requested by thread" error might occur when running scripts
### Changed
- Restricted access to Java classes in scripts

## 2024.3.15 (2024-11-11)
### Added
- Support for client certificates
### Fixed
- [#116](https://github.com/AntonShuvaev/jet-client-support/issues/116) Draft names don't update after rename until refresh
- Responses now display even when test script fails with error
- Fixed StackOverflowError when importing OpenAPI with circular references
- Updated Apache HTTP Client to version 5.4.1 to fix various issues
- Various minor fixes

## 2024.3.14 (2024-10-17)
### Fixed
- Various minor fixes
### Changed
- [#113](https://github.com/JetClient/jet-client-support/issues/113) Uncaught errors in request and test suite scripts are now propagated to the top level

## 2024.3.13 (2024-10-14)
### Fixed
- Various minor fixes

## 2024.3.12 (2024-10-01)
### Fixed
- [#109](https://github.com/AntonShuvaev/jet-client-support/issues/109) Error when getting OAuth2 token
-  Other minor fixes

## 2024.3.11 (2024-09-23)
### Added
- In scripts, executing a specific test case now also executes the associated variables and functions used within the test case.
### Fixed
- Improved exception handling in scripts.
- Other minor fixes and improvements.


## 2024.3.10 (2024-09-16)
### Added
- New async methods: `jc.sendRequestAsync`, `jc.runRequestAsync`, `jc.testCaseAsync`, `jc.runTestSuiteAsync`, `jc.runFolderAsync`
### Changed
- `jc.sendRequest`, `jc.runRequest`, `jc.testCase`, `jc.runTestSuite`, and `jc.runFolder` are now synchronous
- Requests in the console output always open in a new tab
### Optimized
- Enhanced performance of the console tool window
### Fixed
- Navigation and completion now correctly resolve variables defined in parent folder scripts
- Minor bug fixes


## 2024.3.9 (2024-09-03)
### Added
-  Test suite can now return a value
-  GitHub Copilot support in script and body editors
### Fixed
-  Variable renaming in scripts occasionally not working
-  Console opening unexpectedly when selecting a request
-  [#102](https://github.com/AntonShuvaev/jet-client-support/issues/102) Save all files when opening a request tab
-  Request execution shortcut not working until the request is focused
-  Setting a variable with a numerical property name from a script not functioning correctly
-  Other minor fixes


## 2024.3.8 (2024-08-26)
### Fixed
-  [#106](https://github.com/AntonShuvaev/jet-client-support/issues/106): `jc.cookies` methods failing when the URL has no protocol
-  `IllegalArgumentException: object is not an instance of declaring class` error
-  Incorrect serialization of empty headers
-  Various other minor issues

### Optimized
-  Enhanced syntax highlighting for the Console by replacing the TextMate-based highlighting
-  Console no longer affects the performance of running requests and tests

## 2024.3.7 (2024-08-19)
### Fixed
-  [#100](https://github.com/AntonShuvaev/jet-client-support/issues/100) Reintroduced `jc.runFolder`
-  [#101](https://github.com/AntonShuvaev/jet-client-support/issues/101) Changes in the OpenAPI file were not reflected in the imported API
-  [#104](https://github.com/AntonShuvaev/jet-client-support/issues/104) Error when reading an empty sync file
-  External references in OpenAPI (Swagger) were not resolved on Windows
-  Scripts were not updated after a request or folder restore
-  Incorrect line separators (`\r\n`) error
-  Other minor fixes and improvements
### Changed 
-  Improved syntax highlighting for Request Preview, replacing TextMate-based highlighting

## 2024.3.6 (2024-08-15)
### Fixed
- Auto-generated `Content-Type` header not being added to the request
- Error "File name too long" occurring when the request name is too long

## 2024.3.5 (2024-08-14)
### Fixed
- NullPointerException might occur
- Error "Write-unsafe context! Model changes are allowed from write-safe contexts only" might occur

## 2024.3.4 (2024-08-14)
### Fixed
-  Error when request name exceeds 255 characters
-  Parent scripts and built-in library might not be resolved in the script editor
-  "Slow operations are prohibited on EDT" error occurring sometimes
-  Empty panel when opening test suite from recent files
-  Shortcut for running test suite not working
-  Various other minor fixes

## 2024.3.3 (2024-08-08)
### Added
-   Support for resolving and navigating to global variables in scripts
-   [#98](https://github.com/AntonShuvaev/jet-client-support/issues/98) Option to toggle visibility of auto-generated headers
### Changed
-   [#98](https://github.com/AntonShuvaev/jet-client-support/issues/98) Auto-generated Content-Type header is now separated from user-defined headers
-   Custom libraries path configuration moved to project settings
### Fixed
-  [#98](https://github.com/AntonShuvaev/jet-client-support/issues/98) Content-Type header is automatically changed
-  Example documentation deserialized incorrectly
-  Issue preventing examples from opening after refresh
-  Various other fixes

## 2024.3.2 (2024-07-31)
### Added
- Request history size setting
### Optimized
- [#94](https://github.com/AntonShuvaev/jet-client-support/issues/94) Request content of large requests is now hidden in the console output and opens in a separate tab
- [#94](https://github.com/AntonShuvaev/jet-client-support/issues/94) When console and preview toolwindows are closed, their content is not updated
### Fixed
- [#95](https://github.com/AntonShuvaev/jet-client-support/issues/95) Fixed regression causing the GraphQL toolbar to disappear

## 2024.3.1 (2024-07-30)
### Added
-  Ability to create examples (child requests) for requests
### Fixed
-  Editors now show a full context menu instead of a simple one
-  Fixed error "Wrong line separators" occurring when console output contains "\r\n"
-  Resolved issue with Docs view sometimes disappearing
-  Paste snippet action now works correctly in version 2024.2

## 2024.3.0 (2024-07-23)
### Added
-  Support for 2024.2
-  Ability to run the test suite from the test suite editor
-   `jc.testCase` to create test cases in test suites that can be run separately
-  Display test results in the console toolwindow
-  Option to hide requests in test results
-  Navigate to source from error stack trace in the console toolwindow
-  Action to create a test suite from selected requests or folders
-  `jc.testSuiteVariables` to manage test suite variables
-  Enhanced and added new code snippets
### Changed
-  Test suites are now synced to "_TS_testSuiteName.md" files instead of being saved as folders
-  Improved buttons for showing/hiding variables and scripts editors
### Fixed
-  Folder documentation not being saved to the sync file
-  Importing Postman collection variables
-  Error "BridgeException: uri.badTarget [/icons/jet-client-additional-tools-13.svg"

## 2024.2.11 (2024-07-12)
### Fixed
- Fixed memory leak

## 2024.2.10 (2024-07-10)
### Fixed
-  Resolved UI freezing issue when opening the IDE
-  Fixed error occurring when markdown preview is not supported in the IDE
-  Fixed "AssertionError: Wrong line separators" when "\r\n" appears in console output

## 2024.2.9 (2024-07-01)
### Added
-  `jc.readFile` in script library to read file content
-  [#85](https://github.com/AntonShuvaev/jet-client-support/issues/85) Support for cookies management in scripts
-  [#85](https://github.com/AntonShuvaev/jet-client-support/issues/85) Option to disable cookie jar
-  Option to disable auto-encoding of URL
-  "Clear console" action
### Changed
-  Cookies management moved to project level
-  Request settings moved to folder level
### Fixed
-  [#89](https://github.com/AntonShuvaev/jet-client-support/issues/89) Handle invalid JSON responses without failing
-  Other minor fixes

## 2024.2.8 (2024-06-26)
### Fixed
- [#86](https://github.com/AntonShuvaev/jet-client-support/issues/86) Fixed regression causing an error when using OAuth2

## 2024.2.7 (2024-06-24)
### Added
-  [#83](https://github.com/AntonShuvaev/jet-client-support/issues/83) Reintroduced import actions in toolwindow toolbar
-  Reintroduced aliases for environments
### Changed
-  [#83](https://github.com/AntonShuvaev/jet-client-support/issues/83) Improved icons for APIs to better differentiate between APIs and folders
### Fixed
-  Fixed NullPointerException
-  [#84](https://github.com/AntonShuvaev/jet-client-support/issues/84) Fixed issue where JetClient folder appears under .idea folder when it is not used

## 2024.2.6 (2024-06-21)
### Fixed
- Fixed issue with using runtime variables in folders and environments
- Fixed issue with changing the order of environments

## 2024.2.5 (2024-06-20)
### Added
-  [#45](https://github.com/AntonShuvaev/jet-client-support/issues/45), [#77](https://github.com/AntonShuvaev/jet-client-support/issues/77) Markdown documentation for requests and folders
-  Preview for requests in toolwindow
-  Prevent requests from being sent when variables are unresolved
-  [#82](https://github.com/AntonShuvaev/jet-client-support/issues/82) Support importing JAX-RS with jakarta.ws.rs package
### Changed
-  [#80](https://github.com/AntonShuvaev/jet-client-support/issues/80) Selecting environment applies to all open tabs
-  Moved code snippets generation to the toolwindow
-  Moved console from services toolwindow to a separate toolwindow
-  Improved console output highlighting
### Fixed
-  Fixed [#79](https://github.com/AntonShuvaev/jet-client-support/issues/79) Variables defined in folders can be dynamically resolved in environment variables
-  Fixed StackOverflowError when importing API with circular references
-  Fixed "Read access is allowed from inside read-action"
-  Fixed "Missing extension point: io.jetclient.graphql.editorProvider"

## 2024.2.4 (2024-06-05)
### Added
- APIs are now displayed in the project tree
- JSON body now supports comments and other JSON5 features such as trailing commas, single quotes, and unquoted keys
### Fixed
- [#75](https://github.com/AntonShuvaev/jet-client-support/issues/75): Fixed OAuth2 authorization issue
- [#76](https://github.com/AntonShuvaev/jet-client-support/issues/76): Fixed GraphQL issues with multiple projects
- Various other fixes

## 2024.2.3(2024-05-21)
### Added
- [#70](https://github.com/AntonShuvaev/jet-client-support/discussions/70) Auto-sync feature
- Script snippets
- Added `jc.collectionVariables` to work with top-level folder (collection) variables
### Changed
- Combined the Pre-request and Tests tabs into a single Scripts tab
### Fixed
- [#73](https://github.com/AntonShuvaev/jet-client-support/issues/73) Request names were not displayed in history and previously opened tabs after IDE restart until indexing finished
- Issue where migration might be applied unnecessarily for the new version
- Other minor fixes

## 2024.2.2(2024-05-14)
### Fixed
- [#72](https://github.com/AntonShuvaev/jet-client-support/issues/72) Fixed regression where it was impossible to specify sync directory

## 2024.2.1 (2024-05-13)
### Fixed
- [#71](https://github.com/AntonShuvaev/jet-client-support/issues/71) Restored functionality of environment-scoped variables in folders
- GraphQL body panel is empty when GraphQL is not configured
- Can't apply changes in the folder properties

## 2024.2.0 (2024-05-10)
### Added
- [#59](https://github.com/AntonShuvaev/jet-client-support/issues/59) Added a Discord server for support and feedback: https://discord.gg/23hufAcU8n
- Introduced Projects (root collections) with their own environments
- Added built-in libraries: ajv, atob, btoa, chai, cheerio, crypto-js, csv-parse/lib/sync, lodash, moment, tv4, uuid, xml2js
- New `jc.runTestSuite` method for executing test suites from scripts
- Added support for `setTimeout` and `clearTimeout` in scripts
- The `response.json()` method now supports an optional JSONPath expression
- File paths can now be relative to the IDE project root for request body files, multipart file fields, and other file fields
### Changed
- File Sync is now available in the free version
- Updated file sync format for better code review and reduced merge conflicts: one file per request/folder, formatted in markdown with embedded blocks (TOML for request/folder data, JSON5 for variables, JavaScript for scripts)
- Simplified folder variables: now they are not separated by environment, only project variables are
- Only local (not shared) variables can now be set from scripts
- Eliminated Global variables that were shared between collections, now only project variables are available within the project
- Renamed `default` to `globals` in the variables editor, for variables available for any environment or even if no environment is selected
- Removed methods `jc.globalVariables`, `jc.folderVariables.setLocalEnv`, `setSharedEnv`, `setLocalDefault`, `setSharedDefault` and replaced them with `jc.globals.set`, `jc.environment.set`, `jc.folderVariables.set` for simplified variable management
- `jc.runRequest`, `jc.sendRequest`, and `jc.runFolder` methods now accept a request/folder path instead of an ID
### Fixed
- Improved code snippets generation
- Various minor fixes and enhancements

## 2024.1.8 (2024-05-10)
### Fixed
- Error "Read access is allowed from inside read-action" might occur

## 2024.1.7 (2024-04-29)
### Fixed
- [#66](https://github.com/AntonShuvaev/jet-client-support/issues/66) Error "Parameter specified as non-null is null" when response has no reason phrase
- [#65](https://github.com/AntonShuvaev/jet-client-support/issues/65) Request can't be opened after reimport
- Other minor fixes

## 2024.1.6 (2024-04-11)
### Added
- Added a console in the Services tool window for requests, responses, and script output, addressing issues [#2](https://github.com/AntonShuvaev/jet-client-support/issues/2)
[#8](https://github.com/AntonShuvaev/jet-client-support/issues/8)
[#58](https://github.com/AntonShuvaev/jet-client-support/issues/58)
[#61](https://github.com/AntonShuvaev/jet-client-support/issues/61)
- JSON objects can now be used in jc.sendRequest and jc.runRequest
- Added prompt input for AI JSON body generation
### Fixed
- Enhanced script error output
- [#62](https://github.com/AntonShuvaev/jet-client-support/issues/62) jc.response.to.be.error fails the test if the http code is 400-599
- Various minor fixes

## 2024.1.5 (2024-04-02)
### Added
- Option to open selected requests or folders in a preview tab
### Fixed
[#60](https://github.com/AntonShuvaev/jet-client-support/issues/60) Tabs are lost on IDE restart
[#57](https://github.com/AntonShuvaev/jet-client-support/issues/57) Importing Postman collections might fail in some cases
[#56](https://github.com/AntonShuvaev/jet-client-support/issues/56) Send Content-Length: 0 header for requests with an empty body and for methods other than GET
- Other minor fixes

## 2024.1.4 (2024-03-26)
### Fixed
- IDE theme selection background is overridden by the plugin

## 2024.1.3 (2024-03-25)
### Fixed
- [#30](https://github.com/AntonShuvaev/jet-client-support/issues/30) In Rider, the default GraphQL config cannot be chosen in the request editor
- [#55](https://github.com/AntonShuvaev/jet-client-support/issues/30) Invalid encoding of GraphQL requests 
- Error "RuntimeExceptionWithAttachments: Read access is allowed from inside read-action" might occur
- Fixed variable completion in URL field
- Other minor fixes

## 2024.1.2 (2024-03-21)
### Fixed
- [#54](https://github.com/AntonShuvaev/jet-client-support/issues/54) Fixed a regression where variables were incorrectly resolved with quotes.

## 2024.1.1 (2024-03-20)
### Added
- [#30](https://github.com/AntonShuvaev/jet-client-support/issues/30) GraphQL support
### Optimized
- Request editor opens faster with lazy loading for tabs
### Fixed
- [#53](https://github.com/AntonShuvaev/jet-client-support/issues/53) Ignore Content-Length header when importing from cURL
- [#53](https://github.com/AntonShuvaev/jet-client-support/issues/53) Remove quote escaping in JSON body when importing from cURL
- Various minor fixes

## 2024.1.0 (2024-03-05)
### Added
- [#41](https://github.com/AntonShuvaev/jet-client-support/issues/41) History of requests and test runs

## 2023.1.20 (2024-02-19)
### Fixed
- [#49](https://github.com/AntonShuvaev/jet-client-support/issues/49) The HTTP protocol configured in settings is not enforced
- IDE might freeze when opening the request editor
- A table cell is not updated when changing column width
- Changing a table cell now updates the value immediately
- Other minor fixes
### Added
- [#50](https://github.com/AntonShuvaev/jet-client-support/issues/50) Added support for Binary Base64 body type
- Added an option to enable/disable opening folder properties with a single click


## 2023.1.19 (2023-12-08)
### Fixed
- [#46](https://github.com/AntonShuvaev/jet-client-support/issues/46) Query Param hides if unchecked and doesn't show up if checked
- "project is already disposed" error might occur
- "parent has already been disposed" error might occur
- "NoSuchFieldError: Companion" occurs on RustRover
- "UninitializedPropertyAccessException: lateinit property has not been initialized" error might occur
- other minor fixes

## 2023.1.18 (2023-11-02)
### Added
- Search everywhere action for requests and folders (Alt + Shift + J)
### Fixed
- [#36](https://github.com/AntonShuvaev/jet-client-support/issues/36)  Setting an environment variable that contains '-' is now working properly
- "class StringReader cannot be cast to class String" error might occur
- "Slow operations are prohibited on EDT" error might occur
- "IncorrectOperationException: Sorry but parent has already been disposed" error might occur

## 2023.1.17 (2023-10-20)
### Fixed
- "Read access is allowed from inside read-action" error might occur
- "Slow operations are prohibited on EDT" error might occur
- other minor fixes

## 2023.1.16 (2023-10-09)
### Added
- Support for 2023.3 EAP
### Fixed
- "Slow operations are prohibited on EDT" error might occur
- other minor fixes

## 2023.1.15 (2023-09-05)
### Fixed
- NullPointerException might occur when importing OpenAPI
- MismatchedInputException: No content to map due to end-of-input might occur
- other minor fixes

## 2023.1.14 (2023-07-14)
### Fixed
- Regression: ClassNotFoundException occurs when opening yaml file

## 2023.1.13 (2023-07-14)
### Fixed
- [#31](https://github.com/AntonShuvaev/jet-client-support/issues/31) Font size of url field does not change when changing font size in IDE settings
- NullPointerException might occur when importing OpenAPI
- Other minor fixes

## 2023.1.12 (2023-05-29)
### Fixed
- [#27](https://github.com/AntonShuvaev/jet-client-support/issues/27) Multipart/form with file - Content length too long

## 2023.1.11 (2023-05-25)
### Added
- [#21](https://github.com/AntonShuvaev/jet-client-support/issues/21) Support open in split view for requests (Shift+Enter or Alt+Double click)
- Support for IDE version 2023.2 EAP
### Fixed
- [#23](https://github.com/AntonShuvaev/jet-client-support/issues/23) Path variables are not displayed when you import an openapi (swagger) file
- [#25](https://github.com/AntonShuvaev/jet-client-support/issues/25) Import sync folder does not keep folder in sync after importing
- Folder is not expanded on double-click in the requests tree

## 2023.1.10 (2023-05-08)
### Added
- [#19](https://github.com/AntonShuvaev/jet-client-support/issues/19) Add support for OAuth2 implicit flow
- [#20](https://github.com/AntonShuvaev/jet-client-support/issues/20) Option to disable certificate hostname validation
### Fixed
- Error might occur when IDE running on Java Runtime without JCEF support

## 2023.1.9 (2023-05-02)
### Added
- Action to populate JSON body with OpenAI Chat GPT
- [#15](https://github.com/AntonShuvaev/jet-client-support/issues/15) Action to generate code snippet for request and types for request and response JSON bodies
### Changed
- Display encoded characters in a decoded format in the response JSON view
### Fixed
- NullPointerException might occur when undo changes in URL field
- Body type `Binary file` works incorrectly
- NullPointerException when importing OpenAPI with schema without name
- NullPointerException when importing OpenAPI with query parameter without required field
- InvalidVirtualFileAccessException might occur
- NumberFormatException might occur when populating JSON body with random data
- IndexOutOfBoundsException might occur when saving request

## 2023.1.8 (2023-04-23)
### Fixed
- [#13](https://github.com/AntonShuvaev/jet-client-support/issues/13) test scripts are not working on Windows

## 2023.1.7 (2023-04-21)
### Changed
- Now test suite is the separate entity instead of an empty folder.
- Requests that are sent by `jc.sendRequest` are now shown in test runner along with `jc.runRequest` requests.
### Fixed
- Changing draft request method is not reflected in request explorer
- NullPointerException might occur when changing folder icon
- IllegalStateException when undo changes in query parameter
- `IllegalArgumentException: Empty scope collection` might occur when import with enabled `Search in libraries` option
- Show error message when failed to import environments
- Incorrect test count in test runner

## 2023.1.6 (2023-04-10)
### Added
- [#11](https://github.com/AntonShuvaev/jet-client-support/issues/11) Add documentation in the test library type definition file
- [#9](https://github.com/AntonShuvaev/jet-client-support/issues/9) Display when request is running. Add action to cancel running request.
### Fixed
- JsonMappingException might occur when syncing requests on Windows
- Local variables might be lost after restarting IDE on Windows
- NoClassDefFoundError JCEFHtmlPanel might occur in Android Studio

## 2023.1.5 (2023-04-03)
### Added
- [#7](https://github.com/AntonShuvaev/jet-client-support/issues/7) Import request from CURL by pasting it to url field
- Generating JSON request body from Java/Kotlin classes and OpenAPI (Swagger) schema
- Action to fill JSON body with random data
- Support external references in OpenAPI (Swagger) import
- Navigation to/from OpenAPI (Swagger) schema
- Ability to choose request naming strategy when importing from Postman
### Fixed
- NullPointerException when changing framework in folder properties to None

## 2023.1.4 (2023-03-21)
### Added
- [#3](https://github.com/AntonShuvaev/jet-client-support/issues/3) Import from Postman
### Fixed
- [#5](https://github.com/AntonShuvaev/jet-client-support/issues/5) switching between light and dark themes breaks UI
- NullPointerException when importing OpenAPI might occur in some cases
- NullPointerException when saving request with new unsaved parent folder

## 2023.1.3 (2023-03-15)
### Added
- Import from cURL
- Action to navigate to the class associated with the request body
### Fixed
- NullPointerException when importing openapi might occur in some cases 
- Select environment dropdown blinking in 2023.1 IDEs

## 2023.1.2 (2023-03-09)
### Added
- [#1](https://github.com/AntonShuvaev/jet-client-support/issues/1) Support for 2023.1
### Fixed
- `com.fasterxml.jackson.core.JsonParseException: Unexpected character` might occur in some cases

## 2023.1.1 (2023-03-07)
### Added
- Inlay hints for request and folder IDs in scripts
- Retrofit API import
- Action to add unresolved variables
- Importing url-encoded and form-data parameters for Spring and JAX-RS
- Support for 2023.1 EAP

### Optimized
- Speed up opening request editor

### Fixed
- `com.fasterxml.jackson.core.JsonParseException: Unexpected character` might occur in some cases
- When hovering over a variable in tables tooltip is flickering

### Changed
- Request name is now imported with the base path but is displayed without it in the requests tree
- Shortcut for `Jump to source from editor` action is changed to `Ctrl+Shift+B` (was `Ctrl+B`)

## 2023.1.0 (2023-03-03)

- Initial release