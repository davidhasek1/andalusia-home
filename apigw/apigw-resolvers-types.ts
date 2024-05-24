import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  readonly __typename?: 'Category';
  readonly Type: Scalars['String']['output'];
  readonly Value: ReadonlyArray<Scalars['String']['output']>;
};

export enum CurrencyType {
  Eur = 'EUR'
}

export enum DimensionsType {
  Meters = 'METERS'
}

export type EnergyRating = {
  readonly __typename?: 'EnergyRating';
  readonly CO2Rated: Scalars['String']['output'];
  readonly CO2Value: Scalars['String']['output'];
  readonly EnergyRated: Scalars['String']['output'];
  readonly EnergyValue: Scalars['String']['output'];
  readonly Image: Scalars['String']['output'];
};

export type Picture = {
  readonly __typename?: 'Picture';
  readonly Id?: Maybe<Scalars['Int']['output']>;
  readonly PictureURL?: Maybe<Scalars['String']['output']>;
};

export type Pictures = {
  readonly __typename?: 'Pictures';
  readonly Count?: Maybe<Scalars['String']['output']>;
  readonly Picture?: Maybe<ReadonlyArray<Maybe<Picture>>>;
};

export type Properties = {
  readonly __typename?: 'Properties';
  readonly Property: ReadonlyArray<PropertiesType>;
  readonly QueryInfo: QueryInfoType;
};

export type PropertiesFilterInput = {
  readonly bathsCount?: InputMaybe<Scalars['Int']['input']>;
  readonly bedsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesPaginateInput = {
  readonly page?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesType = {
  readonly __typename?: 'PropertiesType';
  readonly AgencyRef: Scalars['String']['output'];
  readonly Area: Scalars['String']['output'];
  readonly Bathrooms: Scalars['String']['output'];
  readonly Bedrooms: Scalars['String']['output'];
  readonly Built: Scalars['Int']['output'];
  readonly CO2Rated: Scalars['String']['output'];
  readonly Country: Scalars['String']['output'];
  readonly Currency: CurrencyType;
  readonly Description: Scalars['String']['output'];
  readonly Dimensions?: Maybe<DimensionsType>;
  readonly EnergyRated: Scalars['String']['output'];
  readonly Garden: Scalars['Int']['output'];
  readonly GardenPlot: Scalars['Int']['output'];
  readonly Location: Scalars['String']['output'];
  readonly MainImage?: Maybe<Scalars['String']['output']>;
  readonly OriginalPrice: Scalars['Int']['output'];
  readonly OwnProperty: Scalars['String']['output'];
  readonly Parking: Scalars['Int']['output'];
  readonly Pool: Scalars['Int']['output'];
  readonly Price: Scalars['Int']['output'];
  readonly PropertyType: PropertyTypeType;
  readonly Province: Scalars['String']['output'];
  readonly Reference: Scalars['String']['output'];
  readonly SubLocation?: Maybe<Scalars['String']['output']>;
  readonly Terrace: Scalars['Int']['output'];
};

export type Property = {
  readonly __typename?: 'Property';
  readonly AgencyRef: Scalars['String']['output'];
  readonly Area: Scalars['String']['output'];
  readonly Basura_Tax_Year: Scalars['String']['output'];
  readonly Bathrooms: Scalars['String']['output'];
  readonly Bedrooms: Scalars['String']['output'];
  readonly Built: Scalars['Int']['output'];
  readonly BuiltYear: Scalars['String']['output'];
  readonly Community_Fees_Year: Scalars['String']['output'];
  readonly CompletionDate: Scalars['String']['output'];
  readonly Country: Scalars['String']['output'];
  readonly Currency: Scalars['String']['output'];
  readonly Decree218: Scalars['String']['output'];
  readonly Description: Scalars['String']['output'];
  readonly Dimensions: Scalars['String']['output'];
  readonly EnergyRating: EnergyRating;
  readonly Garden: Scalars['Int']['output'];
  readonly GardenPlot: Scalars['Int']['output'];
  readonly GpsX: Scalars['String']['output'];
  readonly GpsY: Scalars['String']['output'];
  readonly IBI_Fees_Year: Scalars['String']['output'];
  readonly Location: Scalars['String']['output'];
  readonly OriginalPrice: Scalars['Int']['output'];
  readonly OwnProperty: Scalars['String']['output'];
  readonly Parking: Scalars['Int']['output'];
  readonly Pictures: Pictures;
  readonly Pool: Scalars['Int']['output'];
  readonly Price: Scalars['Int']['output'];
  readonly Property: PropertyType;
  readonly PropertyFeatures: PropertyFeatures;
  readonly PropertyType: PropertyType;
  readonly Province: Scalars['String']['output'];
  readonly QueryInfo: QueryInfoType;
  readonly Reference: Scalars['String']['output'];
  readonly SubLocation: Scalars['String']['output'];
  readonly Terrace: Scalars['Int']['output'];
};

export type PropertyDetail = {
  readonly __typename?: 'PropertyDetail';
  readonly Property: Property;
  readonly QueryInfo: QueryInfo;
};

export type PropertyFeatures = {
  readonly __typename?: 'PropertyFeatures';
  readonly Category: ReadonlyArray<Category>;
};

export type PropertyType = {
  readonly __typename?: 'PropertyType';
  readonly NameType: Scalars['String']['output'];
  readonly Subtype1: Scalars['String']['output'];
  readonly SubtypeId1: Scalars['String']['output'];
  readonly Type: Scalars['String']['output'];
  readonly TypeId: Scalars['String']['output'];
};

export type PropertyTypeType = {
  readonly __typename?: 'PropertyTypeType';
  readonly NameType: Scalars['String']['output'];
  readonly Subtype1: Scalars['String']['output'];
  readonly SubtypeId1: Scalars['String']['output'];
  readonly Type: Scalars['String']['output'];
  readonly TypeId: Scalars['String']['output'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getPropertyForSale: PropertyDetail;
  readonly listPropertiesForSale: Properties;
};


export type QueryGetPropertyForSaleArgs = {
  referenceId: Scalars['ID']['input'];
};


export type QueryListPropertiesForSaleArgs = {
  filter?: InputMaybe<PropertiesFilterInput>;
  page?: InputMaybe<PropertiesPaginateInput>;
};

export type QueryInfo = {
  readonly __typename?: 'QueryInfo';
  readonly ApiId: Scalars['String']['output'];
  readonly QueryId: Scalars['String']['output'];
};

export type QueryInfoType = {
  readonly __typename?: 'QueryInfoType';
  readonly ApiId: Scalars['Int']['output'];
  readonly CurrentPage: Scalars['Int']['output'];
  readonly PropertiesPerPage: Scalars['Int']['output'];
  readonly PropertyCount: Scalars['Int']['output'];
  readonly QueryId: Scalars['ID']['output'];
  readonly SearchType: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Category: ResolverTypeWrapper<Category>;
  CurrencyType: CurrencyType;
  DimensionsType: DimensionsType;
  EnergyRating: ResolverTypeWrapper<EnergyRating>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Picture: ResolverTypeWrapper<Picture>;
  Pictures: ResolverTypeWrapper<Pictures>;
  Properties: ResolverTypeWrapper<Properties>;
  PropertiesFilterInput: PropertiesFilterInput;
  PropertiesPaginateInput: PropertiesPaginateInput;
  PropertiesType: ResolverTypeWrapper<PropertiesType>;
  Property: ResolverTypeWrapper<Property>;
  PropertyDetail: ResolverTypeWrapper<PropertyDetail>;
  PropertyFeatures: ResolverTypeWrapper<PropertyFeatures>;
  PropertyType: ResolverTypeWrapper<PropertyType>;
  PropertyTypeType: ResolverTypeWrapper<PropertyTypeType>;
  Query: ResolverTypeWrapper<{}>;
  QueryInfo: ResolverTypeWrapper<QueryInfo>;
  QueryInfoType: ResolverTypeWrapper<QueryInfoType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Category: Category;
  EnergyRating: EnergyRating;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Picture: Picture;
  Pictures: Pictures;
  Properties: Properties;
  PropertiesFilterInput: PropertiesFilterInput;
  PropertiesPaginateInput: PropertiesPaginateInput;
  PropertiesType: PropertiesType;
  Property: Property;
  PropertyDetail: PropertyDetail;
  PropertyFeatures: PropertyFeatures;
  PropertyType: PropertyType;
  PropertyTypeType: PropertyTypeType;
  Query: {};
  QueryInfo: QueryInfo;
  QueryInfoType: QueryInfoType;
  String: Scalars['String']['output'];
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  Type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Value?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnergyRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnergyRating'] = ResolversParentTypes['EnergyRating']> = {
  CO2Rated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CO2Value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  EnergyRated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  EnergyValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Picture'] = ResolversParentTypes['Picture']> = {
  Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  PictureURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PicturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pictures'] = ResolversParentTypes['Pictures']> = {
  Count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Picture?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Picture']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Properties'] = ResolversParentTypes['Properties']> = {
  Property?: Resolver<ReadonlyArray<ResolversTypes['PropertiesType']>, ParentType, ContextType>;
  QueryInfo?: Resolver<ResolversTypes['QueryInfoType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertiesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertiesType'] = ResolversParentTypes['PropertiesType']> = {
  AgencyRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Area?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Bathrooms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Bedrooms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Built?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CO2Rated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Currency?: Resolver<ResolversTypes['CurrencyType'], ParentType, ContextType>;
  Description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Dimensions?: Resolver<Maybe<ResolversTypes['DimensionsType']>, ParentType, ContextType>;
  EnergyRated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Garden?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  GardenPlot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  MainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OriginalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  OwnProperty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Parking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Pool?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  PropertyType?: Resolver<ResolversTypes['PropertyTypeType'], ParentType, ContextType>;
  Province?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Reference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SubLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Terrace?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Property'] = ResolversParentTypes['Property']> = {
  AgencyRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Area?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Basura_Tax_Year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Bathrooms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Bedrooms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Built?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  BuiltYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Community_Fees_Year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  CompletionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Decree218?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Dimensions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  EnergyRating?: Resolver<ResolversTypes['EnergyRating'], ParentType, ContextType>;
  Garden?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  GardenPlot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  GpsX?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  GpsY?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IBI_Fees_Year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  OriginalPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  OwnProperty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Parking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Pictures?: Resolver<ResolversTypes['Pictures'], ParentType, ContextType>;
  Pool?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Property?: Resolver<ResolversTypes['PropertyType'], ParentType, ContextType>;
  PropertyFeatures?: Resolver<ResolversTypes['PropertyFeatures'], ParentType, ContextType>;
  PropertyType?: Resolver<ResolversTypes['PropertyType'], ParentType, ContextType>;
  Province?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  QueryInfo?: Resolver<ResolversTypes['QueryInfoType'], ParentType, ContextType>;
  Reference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SubLocation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Terrace?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyDetail'] = ResolversParentTypes['PropertyDetail']> = {
  Property?: Resolver<ResolversTypes['Property'], ParentType, ContextType>;
  QueryInfo?: Resolver<ResolversTypes['QueryInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyFeaturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyFeatures'] = ResolversParentTypes['PropertyFeatures']> = {
  Category?: Resolver<ReadonlyArray<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyType'] = ResolversParentTypes['PropertyType']> = {
  NameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Subtype1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SubtypeId1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyTypeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyTypeType'] = ResolversParentTypes['PropertyTypeType']> = {
  NameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Subtype1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SubtypeId1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPropertyForSale?: Resolver<ResolversTypes['PropertyDetail'], ParentType, ContextType, RequireFields<QueryGetPropertyForSaleArgs, 'referenceId'>>;
  listPropertiesForSale?: Resolver<ResolversTypes['Properties'], ParentType, ContextType, Partial<QueryListPropertiesForSaleArgs>>;
};

export type QueryInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryInfo'] = ResolversParentTypes['QueryInfo']> = {
  ApiId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  QueryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryInfoTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryInfoType'] = ResolversParentTypes['QueryInfoType']> = {
  ApiId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CurrentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  PropertiesPerPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  PropertyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  QueryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  SearchType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  EnergyRating?: EnergyRatingResolvers<ContextType>;
  Picture?: PictureResolvers<ContextType>;
  Pictures?: PicturesResolvers<ContextType>;
  Properties?: PropertiesResolvers<ContextType>;
  PropertiesType?: PropertiesTypeResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  PropertyDetail?: PropertyDetailResolvers<ContextType>;
  PropertyFeatures?: PropertyFeaturesResolvers<ContextType>;
  PropertyType?: PropertyTypeResolvers<ContextType>;
  PropertyTypeType?: PropertyTypeTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryInfo?: QueryInfoResolvers<ContextType>;
  QueryInfoType?: QueryInfoTypeResolvers<ContextType>;
};

