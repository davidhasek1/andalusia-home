import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '../apigw_schema.graphql',
	documents: ['src/**/*.ts', 'src/**/*.tsx'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./src/gql/': {
			preset: 'client',
			config: {
				immutableTypes: true,
			},
			presetConfig: {
				fragmentMasking: {
					unmaskFunctionName: 'getFragmentData',
				},
			},
		},
	},
	hooks: {
		afterStart: 'yarn workspace apigw run extract-schema',
	},
};

export default config;
