/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery filters_listLocations {\n\t\tlistLocations {\n\t\t\tLocationData {\n\t\t\t\tProvinceArea {\n\t\t\t\t\tProvinceAreaName\n\t\t\t\t\tLocations {\n\t\t\t\t\t\tLocation\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.Filters_ListLocationsDocument,
    "\n\tquery listProperties($filter: PropertiesFilterInput, $page: Int) {\n\t\tlistPropertiesForSale(filter: $filter, page: { page: $page }) {\n\t\t\tQueryInfo {\n\t\t\t\tPropertyCount\n\t\t\t\tCurrentPage\n\t\t\t\tPropertiesPerPage\n\t\t\t}\n\t\t\tProperty {\n\t\t\t\tReference\n\t\t\t\tAgencyRef\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tDescription\n\t\t\t\tBuilt\n\t\t\t\tGardenPlot\n\t\t\t\tMainImage\n\t\t\t}\n\t\t}\n\t}\n": types.ListPropertiesDocument,
    "\n\tquery GetPropertyForSale($referenceId: ID!) {\n\t\tgetPropertyForSale(referenceId: $referenceId) {\n\t\t\tProperty {\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tDescription\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tBuilt\n\t\t\t\tTerrace\n\t\t\t\tGardenPlot\n\t\t\t\tGarden\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tPictures {\n\t\t\t\t\tPicture {\n\t\t\t\t\t\tPictureURL\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetPropertyForSaleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery filters_listLocations {\n\t\tlistLocations {\n\t\t\tLocationData {\n\t\t\t\tProvinceArea {\n\t\t\t\t\tProvinceAreaName\n\t\t\t\t\tLocations {\n\t\t\t\t\t\tLocation\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery filters_listLocations {\n\t\tlistLocations {\n\t\t\tLocationData {\n\t\t\t\tProvinceArea {\n\t\t\t\t\tProvinceAreaName\n\t\t\t\t\tLocations {\n\t\t\t\t\t\tLocation\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery listProperties($filter: PropertiesFilterInput, $page: Int) {\n\t\tlistPropertiesForSale(filter: $filter, page: { page: $page }) {\n\t\t\tQueryInfo {\n\t\t\t\tPropertyCount\n\t\t\t\tCurrentPage\n\t\t\t\tPropertiesPerPage\n\t\t\t}\n\t\t\tProperty {\n\t\t\t\tReference\n\t\t\t\tAgencyRef\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tDescription\n\t\t\t\tBuilt\n\t\t\t\tGardenPlot\n\t\t\t\tMainImage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery listProperties($filter: PropertiesFilterInput, $page: Int) {\n\t\tlistPropertiesForSale(filter: $filter, page: { page: $page }) {\n\t\t\tQueryInfo {\n\t\t\t\tPropertyCount\n\t\t\t\tCurrentPage\n\t\t\t\tPropertiesPerPage\n\t\t\t}\n\t\t\tProperty {\n\t\t\t\tReference\n\t\t\t\tAgencyRef\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tDescription\n\t\t\t\tBuilt\n\t\t\t\tGardenPlot\n\t\t\t\tMainImage\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetPropertyForSale($referenceId: ID!) {\n\t\tgetPropertyForSale(referenceId: $referenceId) {\n\t\t\tProperty {\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tDescription\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tBuilt\n\t\t\t\tTerrace\n\t\t\t\tGardenPlot\n\t\t\t\tGarden\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tPictures {\n\t\t\t\t\tPicture {\n\t\t\t\t\t\tPictureURL\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetPropertyForSale($referenceId: ID!) {\n\t\tgetPropertyForSale(referenceId: $referenceId) {\n\t\t\tProperty {\n\t\t\t\tLocation\n\t\t\t\tProvince\n\t\t\t\tArea\n\t\t\t\tDescription\n\t\t\t\tBedrooms\n\t\t\t\tBathrooms\n\t\t\t\tBuilt\n\t\t\t\tTerrace\n\t\t\t\tGardenPlot\n\t\t\t\tGarden\n\t\t\t\tPrice\n\t\t\t\tCurrency\n\t\t\t\tPictures {\n\t\t\t\t\tPicture {\n\t\t\t\t\t\tPictureURL\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;