import { cp, readFile } from 'fs/promises';
import { promisify } from 'util';
import { exec } from 'child_process';
import chalk from 'chalk';

const execAsync = promisify(exec);

const csLocaleFile = `${__dirname}/../src/utils/messages/cs.json`;
const originalCsLocaleFile = `${process.env.TMPDIR}/ood/original_cs.json`;

const fail = (lines: readonly string[]): void => {
	process.stdout.write([...lines, ''].join('\n'));
	process.exit(1);
};

const main = async (): Promise<void> => {
	await cp(csLocaleFile, originalCsLocaleFile);

	await execAsync('yarn workspace frontend trans:extract');

	const [originalData, actualData] = await Promise.all([readFile(originalCsLocaleFile, 'utf8'), readFile(csLocaleFile, 'utf8')]);

	if (originalData !== actualData) {
		fail([
			chalk.redBright('Your locale files are not up-to-date with the codebase.'),
			'',
			chalk.blueBright('To fix run `yarn workspace frontend trans:extract`.'),
		]);
	}

	const translations = JSON.parse(actualData);
	const missingTranslations = Object.values(translations).some((value: unknown): boolean => {
		return value == null || value === '';
	});

	if (missingTranslations) {
		fail([
			chalk.redBright('Missing required translations.'),
			chalk.redBright('Every translation key needs to have an english translation value.'),
			'',
			chalk.blueBright('To fix this add all missing translations.'),
		]);
	}
};

main().catch(console.error);
