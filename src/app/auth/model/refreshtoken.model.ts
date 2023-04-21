export interface RefreshTokenModel {
  refreshToken: string;
}

export interface RefreshTokenResponseModel {
  actionTypes: string[];
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiration: 0;
  accessTokenExpiration: 0;
}
