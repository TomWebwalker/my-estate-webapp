import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  access_token: Scalars['String'];
};

export type CreateAdminUserInput = {
  active: Scalars['Boolean'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AccessToken;
  register: User;
  userCreate: User;
  userDelete: Scalars['Boolean'];
  userUpdate: Scalars['Boolean'];
};


export type MutationLoginArgs = {
  loginInput: LoginUserInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterUserInput;
};


export type MutationUserCreateArgs = {
  adminUser: CreateAdminUserInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUserUpdateArgs = {
  adminUser: UpdateAdminUserInput;
};

export type Query = {
  __typename?: 'Query';
  profile: User;
  user?: Maybe<User>;
  users: UserRows;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sortBy?: InputMaybe<Scalars['String']>;
  sortDir?: InputMaybe<SortDir>;
};

export type RegisterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum SortDir {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateAdminUserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRole>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  role: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type UserRows = {
  __typename?: 'UserRows';
  rows: Array<User>;
  total: Scalars['Int'];
};

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number } };

export const RegisterDocument = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
  register(registerInput: {email: $email, password: $password, name: $name}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    override document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }