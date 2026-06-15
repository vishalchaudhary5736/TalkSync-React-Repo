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

export interface chatListRequest {
 page:number;
 limit:number;
 identifier?:string;
}

export interface chatListUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role:string,
  status:string;
  onlineStatus:string;
  profileImage?: string | null;
}

export interface chatListData {
  _id:string;
  participants: chatListUser[];
  admin:string;
  createdAt:Date;
  updatedAt:Date;
  lastMessage:string;
}

export interface chatListResponse {
message:string;
success:boolean;
count:number;
data?:chatListData[]
}

export interface messagesRequest {
  roomId:string;
  limit:number;
  lastMessageId?:string;
}

export interface messagesResponse {
  message:string;
  success:boolean;
  data?:messageData[]
}

export interface messageData {
  _id:string;
  sender:string;
  receiver:string[];
  message:string;
  room:string,
  isSeen:boolean;
  seenBy:string[] | []
  createdAt:Date;
  updatedAt:Date;
}