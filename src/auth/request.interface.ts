export interface IAuthRequest extends Request {
  user: {
    userId: number;
    username: string;
  };
}