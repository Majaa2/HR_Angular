
export class Response{
    ResponseCode!: number;
    ResponseMessage!: string;
    ResponseError!: Array<ResponseError>;
    Result!: any;
    
}
export class ResponseError{
    ValueField!: string;
    ErrorDescription!: string;

}