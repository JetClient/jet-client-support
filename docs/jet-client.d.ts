declare const jc: JetClient;
declare var console: Console;
interface JetClient {
    request: HttpRequest;
    response: HttpResponse | null;
    folder: Folder;
    variables: AllVariables;
    globalVariables: GlobalVariables;
    folderVariables: FolderVariables;
    expect: Chai.ExpectStatic;
    test(testName: string, func: Function): void;
    findFolder(idPrefix: string): Folder | null;
    findRequest(idPrefix: string): HttpRequest | null;
    sendRequest(requestOrIdPrefix: HttpRequest | string): Promise<HttpResponse>;
    runRequest(requestOrIdPrefix: HttpRequest | string): Promise<HttpResponse>;
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
    setMethod(method: HttpMethod | string): HttpRequest;
    setUrl(url: string): HttpRequest;
    setQueryParams(params: Record<string, any>): HttpRequest;
    setQueryParam(key: string, value: any): HttpRequest;
    addQueryParam(key: string, value: any): HttpRequest;
    removeQueryParam(key: string): HttpRequest;
    setPathVariables(pathVariables: Record<string, string>): HttpRequest;
    setHeaders(headers: Record<string, string>): HttpRequest;
    setHeader(name: string, value: string): HttpRequest;
    addHeader(name: string, value: string): HttpRequest;
    removeHeader(name: string): HttpRequest;
    setBodyText(text: string): HttpRequest;
    setBodyJson(json: string | object): HttpRequest;
    setBodyXml(xml: string): HttpRequest;
    setBodyHtml(html: string): HttpRequest;
    setBodyFormUrlEncoded(params: Record<string, string>): HttpRequest;
    setBodyMultipartForm(params: FormDataParam[]): HttpRequest;
    setBodyFile(filePath: string): HttpRequest;
    setNoBody(): HttpRequest;
    setAuthBasic(username: string, password: string): HttpRequest;
    setAuthBearer(token: string): HttpRequest;
    setAuthApiKey(name: string, value: string, inHeader: Boolean): HttpRequest;
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
    code: number;
    status: string;
    headers: ResponseHeaders;
    responseTime: number;
    responseSize: number;
    contentType: ContentType;
    to: AssertableTo;
    json(): object;
    text(): string;
}
interface ContentType {
    mimeType: string;
    charset: string;
}
interface ResponseHeaders {
    headers: Header[];
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
}
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
    not: AssertableHave;
    body(): void;
    body(body: string): void;
    body(body: RegExp): void;
    header(key: string): void;
    jsonBody(): void;
    jsonBody(body: any): void;
    jsonBody(expectPath: string): void;
    jsonBody(expectPath: string, value: any): void;
    status(code: number): void;
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
    has(name: string): boolean;
    get(name: string): any | null;
    set(name: string, value: any): void;
    replaceIn(text: string): string;
}
interface GlobalVariables {
    has(name: string): boolean;
    get(name: string): any | null;
    replaceIn(text: string): string;
    setDefault(name: string, value: any): void;
    setEnv(name: string, value: any, envGroupId?: string): void;
    removeDefault(name: string): void;
    removeEnv(name: string, envGroupId?: string): void;
    clear(): void;
    clearDefault(): void;
    clearEnv(envGroupId?: string): void;
}
interface FolderVariables {
    has(name: string): boolean;
    get(name: string): any | null;
    replaceIn(text: string): string;
    setLocalDefault(name: string, value: any): void;
    setSharedDefault(name: string, value: any): void;
    setLocalEnv(name: string, value: any, envGroupId?: string): void;
    setSharedEnv(name: string, value: any, envGroupId?: string): void;
    removeLocalDefault(name: string): void;
    removeSharedDefault(name: string): void;
    removeLocalEnv(name: string, envGroupId?: string): void;
    removeSharedEnv(name: string, envGroupId?: string): void;
    clearLocal(): void;
    clearShared(): void;
    clearLocalDefault(): void;
    clearSharedDefault(): void;
    clearLocalEnv(envGroupId?: string): void;
    clearSharedEnv(envGroupId?: string): void;
}
