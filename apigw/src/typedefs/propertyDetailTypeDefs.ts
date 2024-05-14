const typeDefsPropertyDetail = `#graphql

type PropertyType {
  NameType: String!
  Type: String!
  TypeId: String!
  Subtype1: String!
  SubtypeId1: String!
}

type EnergyRating {
  CO2Rated: String!
  CO2Value: String!
  EnergyRated: String!
  EnergyValue: String!
  Image: String!
}

type Category {
  Type: String!
  Value: [String!]!
}

type PropertyFeatures {
  Category: [Category!]!
}

type Picture {
  Id: Int
  PictureURL: String
}

type Pictures {
  Count: String
  Picture: [Picture]
}

type Property {
  Reference: String!
  AgencyRef: String!
  Country: String!
  Province: String!
  Area: String!
  Location: String!
  SubLocation: String!
  PropertyType: PropertyType!
  Decree218: String!
  Bedrooms: String!
  Bathrooms: String!
  Currency: String!
  Price: Int!
  OriginalPrice: Int!
  Community_Fees_Year: String!
  Basura_Tax_Year: String!
  IBI_Fees_Year: String!
  Dimensions: String!
  Built: Int!
  Terrace: Int!
  GardenPlot: Int!
  EnergyRating: EnergyRating!
  GpsX: String!
  GpsY: String!
  OwnProperty: String!
  Pool: Int!
  Parking: Int!
  Garden: Int!
  CompletionDate: String!
  BuiltYear: String!
  Description: String!
  PropertyFeatures: PropertyFeatures!
  Pictures: Pictures!
}

type QueryInfo {
  ApiId: String!
  QueryId: String!
}

type PropertyDetails {
  QueryInfo: QueryInfo!
  Property: Property!
}
`;

export { typeDefsPropertyDetail };
