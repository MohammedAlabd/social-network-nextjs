export interface UserType {
  title: string;
  body: string;
  image: string;
  creator: {
    userRank: string;
    fullName: string;
    id: number;
    avatar: string;
  };
}

export type PickUserType = Pick<UserType['creator'], 'id' | 'avatar'>;
