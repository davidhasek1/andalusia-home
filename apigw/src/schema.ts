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


  input PropertiesFilterInput {
    bedsCount: Int
  }

  type Query {
    listPropertiesForSale(filter: PropertiesFilterInput): Properties!
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
	},
} as Resolvers<Context>;

export { typeDefs, resolvers };
