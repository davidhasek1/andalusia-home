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

export type Category = {
  __typename?: 'Category';
  Type: Scalars['String']['output'];
  Value: Array<Scalars['String']['output']>;
};

export enum CurrencyType {
  Eur = 'EUR'
}

export enum DimensionsType {
  Meters = 'METERS'
}

export type EnergyRating = {
  __typename?: 'EnergyRating';
  CO2Rated: Scalars['String']['output'];
  CO2Value: Scalars['String']['output'];
  EnergyRated: Scalars['String']['output'];
  EnergyValue: Scalars['String']['output'];
  Image: Scalars['String']['output'];
};

export type LocationData = {
  __typename?: 'LocationData';
  Country: Scalars['String']['output'];
  ProvinceArea: ProvinceArea;
};

export type LocationQueryInfo = {
  __typename?: 'LocationQueryInfo';
  ApiId: Scalars['String']['output'];
  LocationCount: Scalars['Int']['output'];
};

export type LocationResponse = {
  __typename?: 'LocationResponse';
  LocationData: LocationData;
  QueryInfo: LocationQueryInfo;
};

export type Locations = {
  __typename?: 'Locations';
  Location: Array<Scalars['String']['output']>;
};

export type Picture = {
  __typename?: 'Picture';
  Id?: Maybe<Scalars['Int']['output']>;
  PictureURL?: Maybe<Scalars['String']['output']>;
};

export type Pictures = {
  __typename?: 'Pictures';
  Count?: Maybe<Scalars['String']['output']>;
  Picture?: Maybe<Array<Maybe<Picture>>>;
};

export type Properties = {
  __typename?: 'Properties';
  Property: Array<PropertiesType>;
  QueryInfo: QueryInfoType;
};

export type PropertiesFilterInput = {
  bathsCount?: InputMaybe<Scalars['Int']['input']>;
  bedsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesPaginateInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesType = {
  __typename?: 'PropertiesType';
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

export type Property = {
  __typename?: 'Property';
  AgencyRef: Scalars['String']['output'];
  Area: Scalars['String']['output'];
  Basura_Tax_Year: Scalars['String']['output'];
  Bathrooms: Scalars['String']['output'];
  Bedrooms: Scalars['String']['output'];
  Built: Scalars['Int']['output'];
  BuiltYear: Scalars['String']['output'];
  Community_Fees_Year: Scalars['String']['output'];
  CompletionDate: Scalars['String']['output'];
  Country: Scalars['String']['output'];
  Currency: Scalars['String']['output'];
  Decree218: Scalars['String']['output'];
  Description: Scalars['String']['output'];
  Dimensions: Scalars['String']['output'];
  EnergyRating: EnergyRating;
  Garden: Scalars['Int']['output'];
  GardenPlot: Scalars['Int']['output'];
  GpsX: Scalars['String']['output'];
  GpsY: Scalars['String']['output'];
  IBI_Fees_Year: Scalars['String']['output'];
  Location: Scalars['String']['output'];
  OriginalPrice: Scalars['Int']['output'];
  OwnProperty: Scalars['String']['output'];
  Parking: Scalars['Int']['output'];
  Pictures: Pictures;
  Pool: Scalars['Int']['output'];
  Price: Scalars['Int']['output'];
  Property: PropertyType;
  PropertyFeatures: PropertyFeatures;
  PropertyType: PropertyType;
  Province: Scalars['String']['output'];
  QueryInfo: QueryInfoType;
  Reference: Scalars['String']['output'];
  SubLocation: Scalars['String']['output'];
  Terrace: Scalars['Int']['output'];
};

export type PropertyDetail = {
  __typename?: 'PropertyDetail';
  Property: Property;
  QueryInfo: QueryInfo;
};

export type PropertyFeatures = {
  __typename?: 'PropertyFeatures';
  Category: Array<Category>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  NameType: Scalars['String']['output'];
  Subtype1: Scalars['String']['output'];
  SubtypeId1: Scalars['String']['output'];
  Type: Scalars['String']['output'];
  TypeId: Scalars['String']['output'];
};

export type PropertyTypeType = {
  __typename?: 'PropertyTypeType';
  NameType: Scalars['String']['output'];
  Subtype1: Scalars['String']['output'];
  SubtypeId1: Scalars['String']['output'];
  Type: Scalars['String']['output'];
  TypeId: Scalars['String']['output'];
};

export type ProvinceArea = {
  __typename?: 'ProvinceArea';
  Locations: Locations;
  ProvinceAreaName: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPropertyForSale: PropertyDetail;
  listLocations: LocationResponse;
  listPropertiesForSale: Properties;
};


export type QueryGetPropertyForSaleArgs = {
  referenceId: Scalars['ID']['input'];
};


export type QueryListPropertiesForSaleArgs = {
  filter?: InputMaybe<PropertiesFilterInput>;
  page?: InputMaybe<PropertiesPaginateInput>;
};

export type QueryInfo = {
  __typename?: 'QueryInfo';
  ApiId: Scalars['String']['output'];
  QueryId: Scalars['String']['output'];
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

export type ExampleQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'Query', listPropertiesForSale: { __typename?: 'Properties', Property: Array<{ __typename?: 'PropertiesType', Price: number, Area: string, Location: string }> } };

export type ListPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPropertiesQuery = { __typename?: 'Query', listPropertiesForSale: { __typename?: 'Properties', Property: Array<{ __typename?: 'PropertiesType', Reference: string, Price: number, Area: string, Location: string, MainImage?: string | null, Bedrooms: string, Bathrooms: string, GardenPlot: number, Built: number, Terrace: number, Currency: CurrencyType }> } };


export const ExampleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"example"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPropertiesForSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Area"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}}]}}]}}]}}]} as unknown as DocumentNode<ExampleQuery, ExampleQueryVariables>;
export const ListPropertiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPropertiesForSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Reference"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Area"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"MainImage"}},{"kind":"Field","name":{"kind":"Name","value":"Bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"GardenPlot"}},{"kind":"Field","name":{"kind":"Name","value":"Built"}},{"kind":"Field","name":{"kind":"Name","value":"Terrace"}},{"kind":"Field","name":{"kind":"Name","value":"Currency"}}]}}]}}]}}]} as unknown as DocumentNode<ListPropertiesQuery, ListPropertiesQueryVariables>;