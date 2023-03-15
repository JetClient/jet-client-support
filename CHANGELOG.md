Change Log
----------
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
