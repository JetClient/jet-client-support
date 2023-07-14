Change Log
----------
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