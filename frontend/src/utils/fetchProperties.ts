import { graphql } from 'gql';

export const listProperties = graphql(`
	query listProperties($filter: PropertiesFilterInput, $page: Int) {
		listPropertiesForSale(filter: $filter, page: { page: $page }) {
			QueryInfo {
				PropertyCount
				CurrentPage
				PropertiesPerPage
			}
			Property {
				Reference
				AgencyRef
				Location
				Province
				Area
				Bedrooms
				Bathrooms
				Price
				Currency
				Description
				Built
				GardenPlot
				MainImage
				Pictures {
					Count
					Picture {
						Id
						PictureURL
					}
				}
			}
		}
	}
`);
