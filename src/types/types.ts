export interface user {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  password?: string | null;
  profileImage?: string | null;
  role: string;
  isVerified: string;
  isActive: string;
  status: string;
  onlineStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface signupType {
  token: string;
  data: user;
  message: string;
  success: boolean;
}

export interface signup {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  password: string;
  confirmPassword: string;
}

export interface loginInterface {
  email: string;
  password: string;
}

export interface getProfile {
  data: user;
  message: string;
  success: boolean;
}
