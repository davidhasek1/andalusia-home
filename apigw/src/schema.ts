import { Context } from '.';
import { Resolvers } from '../apigw-resolvers-types';

const typeDefs = `#graphql
  type PropertyTypeType {
    NameType: String!
    Type:  String!
    TypeId:  String!
    Subtype1:  String!
    SubtypeId1:  String!
  }
  enum CurrencyType { EUR }
  enum DimensionsType { METERS }

  type PropertyType {
    Reference: String!
    AgencyRef: String!
    Country: String!
    Province: String!
    Area: String!
    Location: String!
    SubLocation: String
    PropertyType: PropertyTypeType!

    Bedrooms: String!
    Bathrooms: String!
    Currency: CurrencyType!
    Price: Int!
    OriginalPrice: Int!
    Dimensions: DimensionsType
    Built:Int!
    Terrace:Int!
    GardenPlot: Int!
    CO2Rated: String!
    EnergyRated: String!
    OwnProperty: String!
    Pool:  Int!
    Parking:  Int!
    Garden:  Int!
    Description: String!
    MainImage: String
  }

  
  type QueryInfoType {
    ApiId: Int!,
    QueryId: ID!
    SearchType: String!
    PropertyCount: Int!,
    CurrentPage: Int!,
    PropertiesPerPage: Int!
  }
  type Properties {
    QueryInfo: QueryInfoType!
    Property: [PropertyType!]!
  }

  type Query {
    listPropertiesForSale: Properties!
  }
`;

const resolvers = {
	Query: {
		listPropertiesForSale: async (parent, {}, context) => {
			return await context.dataSource.resalesOnlineAPI.listProperties();
		},
	},
} as Resolvers<Context>;

export { typeDefs, resolvers };
