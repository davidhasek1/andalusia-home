const typeDefsPropertyType = `#graphql
  type PropertyTypeQueryInfo {
    ApiId: String!,
    PropertyTypesCount: Int
  }

  type SubType {
    Type: String!
    OptionValue: String!
  }

  type PropertyTypeOptionValue {
    Type: String!
    OptionValue: String!
    SubType: [SubType!]!
  }

  type PropertyTypeOptions {
    PropertyType: [PropertyTypeOptionValue!]!
  }

  type PropertyTypeResponse {
    QueryInfo: PropertyTypeQueryInfo!
    PropertyTypes: PropertyTypeOptions!
  }

`;

export { typeDefsPropertyType };
