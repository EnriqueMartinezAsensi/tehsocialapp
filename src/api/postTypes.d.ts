//PROCESADOS EN AL WEB https://app.quicktype.io/ IMPORTANTE!!!

declare type PostData = {
  userId: string;
  id?: string;
  title?: string;
  body: string;
};

declare type ComentData = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

declare type UserData = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

declare type AddressData = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

declare type GeoData = {
  lat: string;
  lng: string;
};

declare type CompanyData = {
  name: string;
  catchPhrase: string;
  bs: string;
};

declare type MiniaturePostList = {
  postList: PostData[];
  userList: UserData[];
};

declare type CompletePost = {
  post: PostData;
  user: UserData;
  comentList: ComentData[];
};

declare type CommentCount = {
  postId: string;
  commentNumber: number;
};
