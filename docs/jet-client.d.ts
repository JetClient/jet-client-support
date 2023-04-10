/**
 * Main entry point for interacting with the JetClient API.
 */
declare const jc: JetClient;

/**
 * Global object that allows you to write to the console.
 */
declare var console: Console;


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
     * The folder of the current request
     */
    folder: Folder;

    /**
     * Contains all variables in scope.
     */
    variables: AllVariables;

    /**
     * Contains global variables.
     */
    globalVariables: GlobalVariables;

    /**
     * Contains folder-specific variables for the current folder.
     */
    folderVariables: FolderVariables;

    /**
     * Chai.js `expect` function for assertions.
     */
    expect: Chai.ExpectStatic;

    /**
     * Defines a test with a given name and function to execute. The test fails if the function throws an error.
     */
    test(testName: string, func: Function): void;

    /**
     * Searches for a folder with an ID prefix and returns it or `null` if not found.
     * Returns Folder or null if not found. Returned Folder is a read-only object.
     */
    findFolder(idPrefix: string): Folder | null;

    /**
     * Searches for a request with an ID prefix and returns it or `null` if not found.
     * Returns HttpRequest or null if not found. Changes to the returned request will not be persisted.
     */
    findRequest(idPrefix: string): HttpRequest | null;

    /**
     * Sends a request and returns a promise that resolves with the HTTP response.
     * This method does not run pre-request and test scripts of the request.
     */
    sendRequest(requestOrIdPrefix: HttpRequest | string): Promise<HttpResponse>;

    /**
     * Runs a request and returns a promise that resolves with the HTTP response.
     * This method runs pre-request and test scripts of the request if they exist.
     */
    runRequest(requestOrIdPrefix: HttpRequest | string): Promise<HttpResponse>;

    /**
     * Runs a folder by running all requests in the folder and all sub-folders.
     * Returns a promise that resolves when the folder has been executed.
     */
    runFolder(idPrefix: string): Promise<void>;
}

interface Folder {
    id: string;
    name: string;
    folders: Folder[];
    parent: Folder | null;
    variables: FolderVariables;
    requests: HttpRequest[];
}

interface HttpRequest {
    id: string;
    name: string;
    method: HttpMethod | string;
    url: string;
    pathVariables: PathVariable[];
    headers: Header[];
    body: RequestBody;
    auth: RequestAuth;

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
    setBodyMultipartForm(params: FormDataParam[]): HttpRequest;

    /**
     * Sets the request body as a file.
     */
    setBodyFile(filePath: string): HttpRequest;

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

declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}

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
     * Parses the response body as JSON and returns the resulting object.
     */
    json(): object;

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
    /*
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
    formData: FormDataParam[];
    urlEncoded: UrlEncodedParam[];
    file: string;
}

declare enum RequestBodyType {
    NO_BODY = "NO_BODY",
    PLAIN = "PLAIN",
    JSON = "JSON",
    HTML = "HTML",
    XML = "XML",
    FORM_DATA = "FORM_DATA",
    FORM_URL_ENCODED = "FORM_URL_ENCODED",
    BINARY_FILE = "BINARY_FILE"
}

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
    bearer: BearerTokenAuth;
    apiKey: ApiKeyAuth;
}

declare enum AuthType {
    INHERIT_FROM_PARENT = "INHERIT_FROM_PARENT",
    NO_AUTH = "NO_AUTH",
    BASIC = "BASIC",
    BEARER = "BEARER",
    API_KEY = "API_KEY"
}

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

interface GlobalVariables {
    /**
     * Checks if a global variable with the given name exists.
     */
    has(name: string): boolean;

    /**
     * Gets the value of a global variable by name or `null` if not found.
     */
    get(name: string): any | null;

    /**
     * Replaces global variable placeholders in a text string with their corresponding values.
     */
    replaceIn(text: string): string;

    /**
     * Sets a default value for a global variable.
     */
    setDefault(name: string, value: any): void;

    /**
     * Sets the value of a global environment variable for the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    setEnv(name: string, value: any, envGroupId?: string): void;

    /**
     * Removes the default value of a global variable.
     */
    removeDefault(name: string): void;

    /**
     * Removes a global environment variable for the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    removeEnv(name: string, envGroupId?: string): void;

    /**
     * Clears all global variables, including default and environment-specific variables.
     */
    clear(): void;

    /**
     * Clears all default global variables.
     */
    clearDefault(): void;

    /**
     * Clears all environment-specific global variables for the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    clearEnv(envGroupId?: string): void;
}

interface FolderVariables {
    /**
     * Checks if a folder variable with the given name exists.
     */
    has(name: string): boolean;

    /**
     * Gets the value of a folder variable by name or `null` if not found.
     */
    get(name: string): any | null;

    /**
     * Replaces folder variable placeholders in a text string with their corresponding values.
     */
    replaceIn(text: string): string;

    /**
     * Sets a local default value for a folder variable.
     */
    setLocalDefault(name: string, value: any): void;

    /**
     * Sets a shared default value for a folder variable.
     */
    setSharedDefault(name: string, value: any): void;

    /**
     * Sets the value of a local environment variable for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    setLocalEnv(name: string, value: any, envGroupId?: string): void;

    /**
     * Sets the value of a shared environment variable for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    setSharedEnv(name: string, value: any, envGroupId?: string): void;

    /**
     * Removes the local default value of a folder variable.
     */
    removeLocalDefault(name: string): void;

    /**
     * Removes the shared default value of a folder variable.
     */
    removeSharedDefault(name: string): void;

    /**
     * Removes a local environment variable for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    removeLocalEnv(name: string, envGroupId?: string): void;

    /**
     * Removes a shared environment variable for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    removeSharedEnv(name: string, envGroupId?: string): void;

    /**
     * Clears all local folder variables, including default and environment-specific variables.
     */
    clearLocal(): void;

    /**
     * Clears all shared folder variables, including default and environment-specific variables.
     */
    clearShared(): void;

    /**
     * Clears all local default folder variables.
     */
    clearLocalDefault(): void;

    /**
     * Clears all shared default folder variables.
     */
    clearSharedDefault(): void;

    /**
     * Clears all local environment variables for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    clearLocalEnv(envGroupId?: string): void;

    /**
     * Clears all shared environment variables for the folder and the active environment of the provided environment group.
     * If the environment group is not provided, the first environment group will be used.
     */
    clearSharedEnv(envGroupId?: string): void;
}
