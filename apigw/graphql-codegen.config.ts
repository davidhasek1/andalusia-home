import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: '../apigw_schema.graphql',
	documents: ['src/**/*.tsx'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./apigw-resolvers-types.ts': {
			schema: ['../apigw_schema.graphql'],
			config: {
				immutableTypes: true,
			},
			plugins: ['typescript', 'typescript-resolvers'],
		},
	},
	hooks: {
		afterStart: 'yarn workspace apigw run extract-schema',
	},
};

export default config;
