const typeDefsLocations = `#graphql
  type LocationQueryInfo {
    ApiId: String!
    LocationCount: Int! 
  }

  type ProvinceArea {
    ProvinceAreaName: String!
    Locations: Locations!
  }

  type Locations {
    Location: [String!]!
  }

  type LocationData {
    Country: String!
    ProvinceArea: ProvinceArea!
  }

  type LocationResponse {
    QueryInfo: LocationQueryInfo!
    LocationData: LocationData!
  }

`;

export { typeDefsLocations };
