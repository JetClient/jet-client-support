Change Log
----------
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