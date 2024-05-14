import { Context } from '.';
import { Resolvers } from '../apigw-resolvers-types';
import { typeDefsPropertyDetail } from './typedefs/propertyDetailTypeDefs';

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

  type PropertiesType {
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
    Property: [PropertiesType!]!
  }

  type Property {
    QueryInfo: QueryInfoType!
    Property: PropertyType!
  }

  input PropertiesFilterInput {
    bedsCount: Int
    bathsCount: Int
  }

  type Query {
    listPropertiesForSale(filter: PropertiesFilterInput): Properties!
    getPropertyForSale(referenceId: ID!): PropertyDetails!
  }
`;

const resolvers = {
	Query: {
		//TAdy budou naše definice filtrů a ty pak v dataSourceu převedeme na jejich mrdku
		//Filtery budou odpovídat těm filtrům, které máme na frontendu
		listPropertiesForSale: async (parent, { filter }, context) => {
			console.log('[MY FILTER]', filter);
			return await context.dataSource.resalesOnlineAPI.listProperties(filter);
		},
		getPropertyForSale: async (parent, { referenceId }, context) => {
			console.log(referenceId);
			return await context.dataSource.resalesOnlineAPI.getProperty(referenceId);
		},
	},
} as Resolvers<Context>;

export { typeDefs, typeDefsPropertyDetail, resolvers };
