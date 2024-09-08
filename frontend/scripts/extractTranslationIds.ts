import { exec } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

const csLocaleFile = `messages/cs.json`;

const main = async () => {
	await execAsync(`yarn formatjs extract 'src/**/*.ts*' --ignore='**/*.d.ts' --out-file ${process.env.TMPDIR}/andalusiahome/ids.json`);

	const [idsContent, originalContent] = await Promise.all([
		readFile(`${process.env.TMPDIR}/andalusiahome/ids.json`, 'utf8'),
		readFile(csLocaleFile, 'utf8'),
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

	await writeFile(csLocaleFile, `${resultContent}\n`, 'utf8');
};

main().catch(console.error);


/* 

function convertToNestedObject(flatObj) {
  const result = {};

  for (const [key, value] of Object.entries(flatObj)) {
    const keys = key.split('.'); // Rozdělí klíče na části podle teček
    let current = result;

    // Projde každou část klíče a vytvoří zanořené objekty
    for (let i = 0; i < keys.length; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = (i === keys.length - 1) ? value : {};
      }
      current = current[keys[i]];
    }
  }

  return result;
}

// Příklad použití
const flatTranslations = {
  "blog.title": "Blog",
  "common.no": "Ne",
  "common.read-more": "Pokračovat ve čtení...",
  "contact-form.button.submit": "Odeslat zprávu",
  // Další klíče...
};

const nestedTranslations = convertToNestedObject(flatTranslations);
console.log(nestedTranslations);

*/