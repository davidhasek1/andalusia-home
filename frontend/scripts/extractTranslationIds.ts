import { exec } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

const enLocaleFile = `src/locales/en.json`;

const main = async () => {
	await execAsync(`yarn formatjs extract 'src/**/*.ts*' --ignore='**/*.d.ts' --out-file ${process.env.TMPDIR}/andalusiahome/ids.json`);

	const [idsContent, originalContent] = await Promise.all([
		readFile(`${process.env.TMPDIR}/andalusiahome/ids.json`, 'utf8'),
		readFile(enLocaleFile, 'utf8'),
	]);

	const idsData = JSON.parse(idsContent);
	const originalData = JSON.parse(originalContent);
	const ids = Object.keys(idsData).sort();

	const resultData = Object.fromEntries(
		ids.map((id) => {
			return [id, originalData[id] ?? ''];
		}),
	);
	const resultContent = JSON.stringify(resultData, null, '\t');

	await writeFile(enLocaleFile, `${resultContent}\n`, 'utf8');
};

main().catch(console.error);
