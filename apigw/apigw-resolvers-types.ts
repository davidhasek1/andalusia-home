import { GraphQLResolveInfo } from 'graphql';
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
  readonly __typename?: 'Properties';
  readonly Property: ReadonlyArray<PropertyType>;
  readonly QueryInfo: QueryInfoType;
};

export type PropertiesFilterInput = {
  readonly bathsCount?: InputMaybe<Scalars['Int']['input']>;
  readonly bedsCount?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyType = {
  readonly __typename?: 'PropertyType';
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
  readonly listPropertiesForSale: Properties;
};


export type QueryListPropertiesForSaleArgs = {
  filter?: InputMaybe<PropertiesFilterInput>;
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
  CurrencyType: CurrencyType;
  DimensionsType: DimensionsType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Properties: ResolverTypeWrapper<Properties>;
  PropertiesFilterInput: PropertiesFilterInput;
  PropertyType: ResolverTypeWrapper<PropertyType>;
  PropertyTypeType: ResolverTypeWrapper<PropertyTypeType>;
  Query: ResolverTypeWrapper<{}>;
  QueryInfoType: ResolverTypeWrapper<QueryInfoType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Properties: Properties;
  PropertiesFilterInput: PropertiesFilterInput;
  PropertyType: PropertyType;
  PropertyTypeType: PropertyTypeType;
  Query: {};
  QueryInfoType: QueryInfoType;
  String: Scalars['String']['output'];
};

export type PropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Properties'] = ResolversParentTypes['Properties']> = {
  Property?: Resolver<ReadonlyArray<ResolversTypes['PropertyType']>, ParentType, ContextType>;
  QueryInfo?: Resolver<ResolversTypes['QueryInfoType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyType'] = ResolversParentTypes['PropertyType']> = {
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

export type PropertyTypeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PropertyTypeType'] = ResolversParentTypes['PropertyTypeType']> = {
  NameType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Subtype1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  SubtypeId1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  listPropertiesForSale?: Resolver<ResolversTypes['Properties'], ParentType, ContextType, Partial<QueryListPropertiesForSaleArgs>>;
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
  Properties?: PropertiesResolvers<ContextType>;
  PropertyType?: PropertyTypeResolvers<ContextType>;
  PropertyTypeType?: PropertyTypeTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryInfoType?: QueryInfoTypeResolvers<ContextType>;
};

