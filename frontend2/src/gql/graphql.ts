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

export enum CurrencyType {
  Eur = 'EUR'
}

export enum DimensionsType {
  Meters = 'METERS'
}

export type Properties = {
  __typename?: 'Properties';
  Property: Array<PropertyType>;
  QueryInfo: QueryInfoType;
};

export type PropertiesFilterInput = {
  bathsCount?: InputMaybe<Scalars['Int']['input']>;
  bedsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  AgencyRef: Scalars['String']['output'];
  Area: Scalars['String']['output'];
  Bathrooms: Scalars['String']['output'];
  Bedrooms: Scalars['String']['output'];
  Built: Scalars['Int']['output'];
  CO2Rated: Scalars['String']['output'];
  Country: Scalars['String']['output'];
  Currency: CurrencyType;
  Description: Scalars['String']['output'];
  Dimensions?: Maybe<DimensionsType>;
  EnergyRated: Scalars['String']['output'];
  Garden: Scalars['Int']['output'];
  GardenPlot: Scalars['Int']['output'];
  Location: Scalars['String']['output'];
  MainImage?: Maybe<Scalars['String']['output']>;
  OriginalPrice: Scalars['Int']['output'];
  OwnProperty: Scalars['String']['output'];
  Parking: Scalars['Int']['output'];
  Pool: Scalars['Int']['output'];
  Price: Scalars['Int']['output'];
  PropertyType: PropertyTypeType;
  Province: Scalars['String']['output'];
  Reference: Scalars['String']['output'];
  SubLocation?: Maybe<Scalars['String']['output']>;
  Terrace: Scalars['Int']['output'];
};

export type PropertyTypeType = {
  __typename?: 'PropertyTypeType';
  NameType: Scalars['String']['output'];
  Subtype1: Scalars['String']['output'];
  SubtypeId1: Scalars['String']['output'];
  Type: Scalars['String']['output'];
  TypeId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  listPropertiesForSale: Properties;
};


export type QueryListPropertiesForSaleArgs = {
  filter?: InputMaybe<PropertiesFilterInput>;
};

export type QueryInfoType = {
  __typename?: 'QueryInfoType';
  ApiId: Scalars['Int']['output'];
  CurrentPage: Scalars['Int']['output'];
  PropertiesPerPage: Scalars['Int']['output'];
  PropertyCount: Scalars['Int']['output'];
  QueryId: Scalars['ID']['output'];
  SearchType: Scalars['String']['output'];
};

export type ListPropertiesQueryVariables = Exact<{
  filter?: InputMaybe<PropertiesFilterInput>;
}>;


export type ListPropertiesQuery = { __typename?: 'Query', listPropertiesForSale: { __typename?: 'Properties', QueryInfo: { __typename?: 'QueryInfoType', PropertyCount: number, CurrentPage: number, PropertiesPerPage: number }, Property: Array<{ __typename?: 'PropertyType', AgencyRef: string, Location: string, Province: string, Area: string, Bedrooms: string, Bathrooms: string, Price: number, Currency: CurrencyType, Description: string, Built: number, GardenPlot: number }> } };


export const ListPropertiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listProperties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertiesFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPropertiesForSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QueryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PropertyCount"}},{"kind":"Field","name":{"kind":"Name","value":"CurrentPage"}},{"kind":"Field","name":{"kind":"Name","value":"PropertiesPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AgencyRef"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"Province"}},{"kind":"Field","name":{"kind":"Name","value":"Area"}},{"kind":"Field","name":{"kind":"Name","value":"Bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Currency"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Built"}},{"kind":"Field","name":{"kind":"Name","value":"GardenPlot"}}]}}]}}]}}]} as unknown as DocumentNode<ListPropertiesQuery, ListPropertiesQueryVariables>;