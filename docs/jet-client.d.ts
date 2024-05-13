/**
 * Main entry point for interacting with the JetClient API.
 */
declare const jc: JetClient;
/**
 * Global object that allows you to write to the console.
 */
declare const console: Console;

/**
 * Attempts to load a module first from a directory specified in project settings.
 * If no directory is specified or the module is not found, it defaults to loading
 * from JetClient's built-in modules.
 */
declare function require(moduleName: string): any;

/**
 * Schedules a function to be executed after a specified delay.
 */
declare function setTimeout(func: Function, delay: number): number;

/**
 * Cancels a timeout previously established by calling setTimeout.
 */
declare function clearTimeout(id: number): void;

interface JetClient {
    /**
     * The current HTTP request being executed.
     */
    request: HttpRequest;
    /**
     * The response of the executed request or `null` if no request has been executed yet.
     */
    response: HttpResponse | null;
    /**
     * Contains all variables in scope.
     */
    variables: AllVariables;
    /**
     * Contains environment-specific variables.
     */
    environment: EnvironmentVariables;
    /**
     * Contains global variables.
     */
    globals: GlobalVariables;
    /**
     * Contains folder-specific variables for the current folder.
     */
    folderVariables: FolderVariables;
    /**
     * Chai.js `expect` function for assertions.
     */
    expect: Expect;

    /**
     * Defines a test with the specified name and function. Fails if the function throws an error.
     * @param testName - Name of the test.
     * @param func - Function to execute.
     */
    test(testName: string, func: Function): void;

    /**
     * Searches for a request by path. Changes to the returned request won't persist.
     * Note: Slashes in request names ('/') are replaced with underscores ('_'). Use an optional HTTP method prefix (e.g., "/folder/GET:request_name") to differentiate requests with the same name but different methods. Drag-and-drop a request in the editor to get the path.
     * @param path - Path to the request, can be relative to the current folder or an absolute path from the project root.
     * @return HttpRequest or null.
     */
    findRequest(path: string): HttpRequest | null;

    /**
     * Sends a request without running its pre-request and test scripts.
     * Note: Slashes in request names ('/') are replaced with underscores ('_'). Use an optional HTTP method prefix (e.g., "/folder/GET:request_name") to differentiate requests with the same name but different methods. Drag-and-drop a request in the editor to get the path.
     * @param requestOrPath - Request object or path, can be relative to the current folder or an absolute path from the project root.
     * @return Promise resolving with the HTTP response.
     */
    sendRequest(requestOrPath: HttpRequest | string): Promise<HttpResponse>;

    /**
     * Runs a request including its pre-request and test scripts.
     * Note: Slashes in request names ('/') are replaced with underscores ('_'). Use an optional HTTP method prefix (e.g., "/folder/GET:request_name") to differentiate requests with the same name but different methods. Drag-and-drop a request in the editor to get the path.
     * @param requestOrPath - Request object or path, can be relative to the current folder or an absolute path from the project root.
     * @return Promise resolving with the HTTP response.
     */
    runRequest(requestOrPath: HttpRequest | string): Promise<HttpResponse>;

    /**
     * Executes all requests in the specified folder and its sub-folders.
     * @param path - Path of the folder, either relative to the current folder or an absolute path from the project root. Drag-and-drop a folder in the editor to get the path.
     * @return Promise that resolves once execution is complete.
     */
    runFolder(path: string): Promise<void>;

    /**
     * Executes the specified test suite.
     * @param path - Path of the test suite, either relative to the current folder or an absolute path from the project root. Drag-and-drop a test suite in the editor to get the path.
     * @return Promise that resolves once execution is complete.
     */
    runTestSuite(path: string): Promise<void>;
}

interface HttpRequest {
    id?: string;
    name?: string;
    method: HttpMethod | string;
    url: string;
    pathVariables?: PathVariable[] | Record<string, string>;
    headers?: Header[] | Record<string, string>;
    body?: RequestBody;
    auth?: RequestAuth;

    /**
     * Sets the HTTP method for the request.
     */
    setMethod(method: HttpMethod | string): HttpRequest;

    /**
     * Sets the URL for the request.
     */
    setUrl(url: string): HttpRequest;

    /**
     * Sets the query parameters for the request.
     */
    setQueryParams(params: Record<string, any>): HttpRequest;

    /**
     * Sets a query parameter for the request. If the parameter already exists, it will be overwritten.
     */
    setQueryParam(key: string, value: any): HttpRequest;

    /**
     * Adds a query parameter to the request.
     */
    addQueryParam(key: string, value: any): HttpRequest;

    /**
     * Removes all query parameters with the given key.
     */
    removeQueryParam(key: string): HttpRequest;

    /**
     * Sets the path variables for the request.
     */
    setPathVariables(pathVariables: Record<string, string>): HttpRequest;

    /**
     * Sets the headers for the request.
     */
    setHeaders(headers: Record<string, string>): HttpRequest;

    /**
     * Sets a header for the request. If the header already exists, it will be overwritten.
     */
    setHeader(name: string, value: string): HttpRequest;

    /**
     * Adds a header to the request.
     */
    addHeader(name: string, value: string): HttpRequest;

    /**
     * Removes all headers with the given name.
     */
    removeHeader(name: string): HttpRequest;

    /**
     * Sets the request body as plain text.
     */
    setBodyText(text: string): HttpRequest;

    /**
     * Sets the request body as JSON from a JSON string or object.
     */
    setBodyJson(json: string | object): HttpRequest;

    /**
     * Sets the request body as XML.
     */
    setBodyXml(xml: string): HttpRequest;

    /**
     * Sets the request body as HTML.
     */
    setBodyHtml(html: string): HttpRequest;

    /**
     * Sets the request body as form URL-encoded.
     */
    setBodyFormUrlEncoded(params: Record<string, string>): HttpRequest;

    /**
     * Sets the request body as multipart form data.
     */
    setBodyMultipartForm(params: FormDataParam[] | Record<string, string>): HttpRequest;

    /**
     * Sets the request body as a file.
     */
    setBodyFile(filePath: string): HttpRequest;

    /**
     * Sets the request body as a base64 encoded binary.
     */
    setBodyBase64(base64: string): HttpRequest;

    /**
     * Sets the request body as a GraphQL query.
     */
    setBodyGraphQL(query: string, variables?: Record<string, any>): HttpRequest;

    /**
     * Removes the request body.
     */
    setNoBody(): HttpRequest;

    /**
     * Sets the request authentication as Basic.
     */
    setAuthBasic(username: string, password: string): HttpRequest;

    /**
     * Sets the request authentication as Bearer.
     */
    setAuthBearer(token: string): HttpRequest;

    /**
     * Sets the request authentication as API Key.
     */
    setAuthApiKey(name: string, value: string, inHeader: Boolean): HttpRequest;

    /**
     * Removes the request authentication.
     */
    setNoAuth(): HttpRequest;
}

declare class HttpRequest implements HttpRequest {
}

declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

interface HttpResponse {
    /**
     * The HTTP status code of the response.
     */
    code: number;
    /**
     * The HTTP status text of the response.
     */
    status: string;
    /**
     * The headers of the response.
     */
    headers: ResponseHeaders;
    /**
     * The time it took for the response to be received, in milliseconds.
     */
    responseTime: number;
    /**
     * The size of the response, in bytes.
     */
    responseSize: number;
    /**
     * The content type of the response.
     */
    contentType: ContentType;
    /**
     * An object containing assertion methods for the response.
     */
    to: AssertableTo;

    /**
     * Parses the response body as JSON. If a JSONPath is provided, returns the value at the specified path; otherwise, returns the entire JSON object.
     */
    json(jsonPath?: string): object;

    /**
     * Returns the response body as a string.
     */
    text(): string;
}

interface ContentType {
    mimeType: string;
    charset: string;
}

interface ResponseHeaders {
    headers: Header[];

    /**
     * Gets the value of a header by name or `null` if not found.
     */
    get(name: string): string | null;

    /**
     * Gets all values of a header by name.
     */
    getAll(name: string): string[];

    /**
     * Checks if a header exists in the response.
     */
    has(name: string): boolean;
}

/**
 * Represents the console object, providing methods to log, warn, error, and display information.
 */
interface Console {
    log(message: string): void;

    log(...data: any[]): void;

    warn(message: string): void;

    warn(...data: any[]): void;

    error(message: string): void;

    error(...data: any[]): void;

    info(message: string): void;

    info(...data: any[]): void;

    time(label: string): void;

    timeEnd(label: string): void;
}

interface AssertableTo {
    be: AssertableBe;
    have: AssertableHave;
    not: AssertableNot;
}

interface AssertableNot {
    be: AssertableBe;
    have: AssertableHave;
}

interface AssertableBe {
    accepted: void;
    badRequest: void;
    clientError: void;
    error: void;
    forbidden: void;
    info: void;
    notFound: void;
    ok: void;
    rateLimited: void;
    redirection: void;
    serverError: void;
    success: void;
    unauthorized: void;
    not: AssertableBe;
}

interface AssertableHave {
    /**
     Inverts the following assertion.
     */
    not: AssertableHave;

    /**
     Asserts that the response body exists.
     */
    body(): void;

    /**
     Asserts that the response body is equal to the specified string.
     */
    body(body: string): void;

    /**
     Asserts that the response body matches the specified regular expression.
     */
    body(body: RegExp): void;

    /**
     Asserts that the response contains the specified header key.
     */
    header(key: string): void;

    /**
     Asserts that the response body is a valid JSON.
     */
    jsonBody(): void;

    /**
     Asserts that the response body JSON is equal to the specified JSON object.
     */
    jsonBody(body: any): void;

    /**
     Asserts that the response body JSON contains the specified property path.
     */
    jsonBody(expectPath: string): void;

    /**
     Asserts that the response body JSON property path is equal to the specified value.
     */
    jsonBody(expectPath: string, value: any): void;

    /**
     Asserts that the response status code is equal to the specified code.
     */
    status(code: number): void;

    /**
     Asserts that the response status reason is equal to the specified reason.
     */
    status(reason: string): void;
}

interface Header {
    key: string;
    value: string;
}

interface PathVariable {
    key: string;
    value: string;
}

interface RequestBody {
    type: RequestBodyType;
    raw: string;
    formData: FormDataParam[] | Record<string, string>;
    urlEncoded: UrlEncodedParam[] | Record<string, string>;
    file: string;
}

declare type RequestBodyType =
    'NO_BODY'
    | 'PLAIN'
    | 'JSON'
    | 'HTML'
    | 'XML'
    | 'FORM_DATA'
    | 'FORM_URL_ENCODED'
    | 'BINARY_FILE'
    | 'BINARY_BASE64'
    | 'GRAPHQL';
declare type FormDataParam = FormDataTextParam | FormDataFileParam;

interface FormDataTextParam {
    key: string;
    value: string;
    contentType?: string | null;
}

interface FormDataFileParam {
    key: string;
    file: string;
    contentType?: string | null;
}

interface UrlEncodedParam {
    key: string;
    value: string;
}

interface RequestAuth {
    type: AuthType;
    basic: BasicAuth;
    bearer: BearerTokenAuth | string;
    apiKey: ApiKeyAuth;
}

declare type AuthType = 'INHERIT_FROM_PARENT' | 'NO_AUTH' | 'BASIC' | 'BEARER' | 'API_KEY';

interface BasicAuth {
    username: string;
    password: string;
}

interface BearerTokenAuth {
    token: string;
}

interface ApiKeyAuth {
    key: string;
    value: string;
    inHeader: boolean;
}

interface AllVariables {
    /**
     * Checks if a variable with the given name exists.
     */
    has(name: string): boolean;

    /**
     * Gets the value of a variable by name or `null` if not found.
     */
    get(name: string): any | null;

    /**
     * Sets temporary runtime variable.
     */
    set(name: string, value: any): void;

    /**
     * Replaces variable placeholders in a text string with their corresponding values.
     */
    replaceIn(text: string): string;
}

interface FolderVariables {
    /**
     * Checks if a variable exists in the folder.
     */
    has(name: string): boolean;

    /**
     * Retrieves the value of a variable by name from the folder. Returns `null` if not found.
     */
    get(name: string): any | null;

    /**
     * Replaces folder variable placeholders in a text string with their respective values.
     */
    replaceIn(text: string): string;

    /**
     * Sets or updates a variable in the folder.
     */
    set(name: string, value: any): void;

    /**
     * Sets or updates a variable within the active environment of the specified environment group, or defaults to the 'Default' environment group if none is specified.
     */
    setEnv(name: string, value: any, envGroup?: string): void;

    /**
     * Removes a variable from the folder.
     */
    unset(name: string): void;

    /**
     * Removes a variable from the active environment of the specified environment group, or defaults to the 'Default' environment group if none is specified.
     */
    unsetEnv(name: string, envGroup?: string): void;

    /**
     * Clears all variables from the folder.
     */
    clear(): void;
}

interface EnvironmentVariables {
    /**
     * Checks if a variable exists in the active environment of the specified group. If no group is specified, the Default group is used.
     */
    has(name: string, envGroup?: string): boolean;

    /**
     * Gets the value of a variable by name in the active environment of the specified group. If no group is specified, the Default group is used.
     */
    get(name: string, envGroup?: string): any | null;

    /**
     * Replaces placeholders in a text string with environment-scoped variable values. If no group is specified, the Default group is used.
     */
    replaceIn(text: string, envGroup?: string): string;

    /**
     * Sets or updates a variable's value in the active environment of the specified group. If no group is specified, the Default group is used.
     */
    set(name: string, value: any, envGroup?: string): void;

    /**
     * Removes a variable from the active environment of the specified group. If no group is specified, the Default group is used.
     */
    unset(name: string, envGroup?: string): void;

    /**
     * Clears all variables in the active environment of the specified group. If no group is specified, the Default group is used.
     */
    clear(envGroup?: string): void;
}

interface GlobalVariables {
    /**
     * Checks if a global variable exists.
     */
    has(name: string): boolean;

    /**
     * Retrieves a global variable's value by name, or `null` if not found.
     */
    get(name: string): any | null;

    /**
     * Replaces placeholders in a text string with global variable values.
     */
    replaceIn(text: string): string;

    /**
     * Assigns or updates a global variable's value.
     */
    set(name: string, value: any): void;

    /**
     * Deletes a global variable.
     */
    unset(name: string): void;

    /**
     * Erases all global variables.
     */
    clear(): void;
}

interface Expect {
    (val: any, message?: string): Chai.Assertion;

    fail(message?: string): never;

    fail(actual: any, expected: any, message?: string, operator?: Chai.Operator): never;
}
