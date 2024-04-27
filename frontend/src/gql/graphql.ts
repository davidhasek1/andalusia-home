/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ExampleType = {
  __typename?: 'ExampleType';
  ApiId: Scalars['Int']['output'];
  CurrentPage: Scalars['Int']['output'];
  PropertiesPerPage: Scalars['Int']['output'];
  PropertyCount: Scalars['Int']['output'];
  QueryId: Scalars['Int']['output'];
  SearchType: Scalars['String']['output'];
};

export type GetExample = {
  __typename?: 'GetExample';
  QueryInfo: ExampleType;
};

export type Query = {
  __typename?: 'Query';
  getExample: GetExample;
};

export type ExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'Query', getExample: { __typename?: 'GetExample', QueryInfo: { __typename?: 'ExampleType', ApiId: number, PropertyCount: number, SearchType: string } } };


export const ExampleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"example"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExample"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QueryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ApiId"}},{"kind":"Field","name":{"kind":"Name","value":"PropertyCount"}},{"kind":"Field","name":{"kind":"Name","value":"SearchType"}}]}}]}}]}}]} as unknown as DocumentNode<ExampleQuery, ExampleQueryVariables>;