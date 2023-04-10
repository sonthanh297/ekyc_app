

export interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface IbankUser {
  id: number;
  username: string;
  phone: string;
  email: string;
  isLegal: string;
  companyName?: string;
  mst?: string;
  kd?: string;
}
