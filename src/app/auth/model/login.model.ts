export interface LoginModel {
  username: string;
  password: string;
}

export interface LoginResponseModel {
  userName: string;
  role: string;
  actionTypes:string[];
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiration: 0;
  accessTokenExpiration: 0;
}
