export interface UserType {
  id: string;
  username: string;
  image: string;
}

export interface CommentType {
  id: string;
  creator: UserType;
  body: string;
  entityId: string;
  entityType: string;
  replies: Array<ReplyType>;
  createdAt: string;
}

export type ReplyType = {
  id: string;
  creator: UserType;
  body: string;
  createdAt: string;
};
