const typeDefsProperties = `#graphql

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
    location: String
    bedsCount: Int
    bathsCount: Int
  }
  input PropertiesPaginateInput {
    page: Int
  }
`;

export { typeDefsProperties };
