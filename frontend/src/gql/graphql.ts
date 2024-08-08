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
  location?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  propertyType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  Pictures?: Maybe<Pictures>;
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

export type PropertyTypeOptionValue = {
  __typename?: 'PropertyTypeOptionValue';
  OptionValue: Scalars['String']['output'];
  SubType: Array<SubType>;
  Type: Scalars['String']['output'];
};

export type PropertyTypeOptions = {
  __typename?: 'PropertyTypeOptions';
  PropertyType: Array<PropertyTypeOptionValue>;
};

export type PropertyTypeQueryInfo = {
  __typename?: 'PropertyTypeQueryInfo';
  ApiId: Scalars['String']['output'];
  PropertyTypesCount?: Maybe<Scalars['Int']['output']>;
};

export type PropertyTypeResponse = {
  __typename?: 'PropertyTypeResponse';
  PropertyTypes: PropertyTypeOptions;
  QueryInfo: PropertyTypeQueryInfo;
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
  listPropertyTypes: PropertyTypeResponse;
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

export type SubType = {
  __typename?: 'SubType';
  OptionValue: Scalars['String']['output'];
  Type: Scalars['String']['output'];
};

export type Filters_ListLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type Filters_ListLocationsQuery = { __typename?: 'Query', listLocations: { __typename?: 'LocationResponse', LocationData: { __typename?: 'LocationData', ProvinceArea: { __typename?: 'ProvinceArea', ProvinceAreaName: string, Locations: { __typename?: 'Locations', Location: Array<string> } } } } };

export type Filters_ListPropertyTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type Filters_ListPropertyTypesQuery = { __typename?: 'Query', listPropertyTypes: { __typename?: 'PropertyTypeResponse', PropertyTypes: { __typename?: 'PropertyTypeOptions', PropertyType: Array<{ __typename?: 'PropertyTypeOptionValue', Type: string, SubType: Array<{ __typename?: 'SubType', Type: string, OptionValue: string }> }> } } };

export type ListPropertiesQueryVariables = Exact<{
  filter?: InputMaybe<PropertiesFilterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListPropertiesQuery = { __typename?: 'Query', listPropertiesForSale: { __typename?: 'Properties', QueryInfo: { __typename?: 'QueryInfoType', PropertyCount: number, CurrentPage: number, PropertiesPerPage: number }, Property: Array<{ __typename?: 'PropertiesType', Reference: string, AgencyRef: string, Location: string, Province: string, Area: string, Bedrooms: string, Bathrooms: string, Price: number, Currency: CurrencyType, Description: string, Built: number, GardenPlot: number, MainImage?: string | null, Pictures?: { __typename?: 'Pictures', Count?: string | null, Picture?: Array<{ __typename?: 'Picture', Id?: number | null, PictureURL?: string | null } | null> | null } | null }> } };

export type GetPropertyForSaleQueryVariables = Exact<{
  referenceId: Scalars['ID']['input'];
}>;


export type GetPropertyForSaleQuery = { __typename?: 'Query', getPropertyForSale: { __typename?: 'PropertyDetail', Property: { __typename?: 'Property', Reference: string, AgencyRef: string, Country: string, Province: string, Area: string, Location: string, SubLocation: string, Bedrooms: string, Bathrooms: string, Currency: string, Price: number, OriginalPrice: number, Community_Fees_Year: string, Basura_Tax_Year: string, IBI_Fees_Year: string, Dimensions: string, Built: number, Terrace: number, GardenPlot: number, OwnProperty: string, Pool: number, Parking: number, Garden: number, CompletionDate: string, BuiltYear: string, Description: string, PropertyType: { __typename?: 'PropertyType', NameType: string, Type: string, TypeId: string, Subtype1: string, SubtypeId1: string }, PropertyFeatures: { __typename?: 'PropertyFeatures', Category: Array<{ __typename?: 'Category', Type: string, Value: Array<string> }> }, Pictures: { __typename?: 'Pictures', Count?: string | null, Picture?: Array<{ __typename?: 'Picture', Id?: number | null, PictureURL?: string | null } | null> | null } } } };


export const Filters_ListLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filters_listLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LocationData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ProvinceArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ProvinceAreaName"}},{"kind":"Field","name":{"kind":"Name","value":"Locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Location"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Filters_ListLocationsQuery, Filters_ListLocationsQueryVariables>;
export const Filters_ListPropertyTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"filters_listPropertyTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPropertyTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PropertyTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PropertyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"SubType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"OptionValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Filters_ListPropertyTypesQuery, Filters_ListPropertyTypesQueryVariables>;
export const ListPropertiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listProperties"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertiesFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listPropertiesForSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"QueryInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PropertyCount"}},{"kind":"Field","name":{"kind":"Name","value":"CurrentPage"}},{"kind":"Field","name":{"kind":"Name","value":"PropertiesPerPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Reference"}},{"kind":"Field","name":{"kind":"Name","value":"AgencyRef"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"Province"}},{"kind":"Field","name":{"kind":"Name","value":"Area"}},{"kind":"Field","name":{"kind":"Name","value":"Bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Currency"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Built"}},{"kind":"Field","name":{"kind":"Name","value":"GardenPlot"}},{"kind":"Field","name":{"kind":"Name","value":"MainImage"}},{"kind":"Field","name":{"kind":"Name","value":"Pictures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Count"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"PictureURL"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListPropertiesQuery, ListPropertiesQueryVariables>;
export const GetPropertyForSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertyForSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"referenceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertyForSale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"referenceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"referenceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Property"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Reference"}},{"kind":"Field","name":{"kind":"Name","value":"AgencyRef"}},{"kind":"Field","name":{"kind":"Name","value":"Country"}},{"kind":"Field","name":{"kind":"Name","value":"Province"}},{"kind":"Field","name":{"kind":"Name","value":"Area"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"SubLocation"}},{"kind":"Field","name":{"kind":"Name","value":"PropertyType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NameType"}},{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"TypeId"}},{"kind":"Field","name":{"kind":"Name","value":"Subtype1"}},{"kind":"Field","name":{"kind":"Name","value":"SubtypeId1"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"Currency"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"OriginalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"Community_Fees_Year"}},{"kind":"Field","name":{"kind":"Name","value":"Basura_Tax_Year"}},{"kind":"Field","name":{"kind":"Name","value":"IBI_Fees_Year"}},{"kind":"Field","name":{"kind":"Name","value":"Dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"Built"}},{"kind":"Field","name":{"kind":"Name","value":"Terrace"}},{"kind":"Field","name":{"kind":"Name","value":"GardenPlot"}},{"kind":"Field","name":{"kind":"Name","value":"OwnProperty"}},{"kind":"Field","name":{"kind":"Name","value":"Pool"}},{"kind":"Field","name":{"kind":"Name","value":"Parking"}},{"kind":"Field","name":{"kind":"Name","value":"Garden"}},{"kind":"Field","name":{"kind":"Name","value":"CompletionDate"}},{"kind":"Field","name":{"kind":"Name","value":"BuiltYear"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"PropertyFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Type"}},{"kind":"Field","name":{"kind":"Name","value":"Value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Pictures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Count"}},{"kind":"Field","name":{"kind":"Name","value":"Picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"PictureURL"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertyForSaleQuery, GetPropertyForSaleQueryVariables>;