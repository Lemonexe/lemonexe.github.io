import * as path from 'node:path';
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, symlinkSync } from 'node:fs';

console.log('BUILDING');
const template = readFileSync('TEMPLATE.html', 'utf8');
const toc = readFileSync('TOC.csv', 'utf8').split('\n').filter(l => l.length > 0 && l[0] !== '#');
if(!existsSync('./dist')) mkdirSync('./dist');

let dir = readdirSync('./includes');

toc.forEach(l => {
	const [baseFileName, enHeader, czHeader] = l.split(';').map(o => o.trim());
	const enName = `./includes/${baseFileName}.en.html`;
	const czName = `./includes/${baseFileName}.cs.html`;
	const enContent = readFileSync(enName, 'utf8');
	const czContent = readFileSync(czName, 'utf8');
	dir = dir.filter(n => n.indexOf(baseFileName) < 0);
	const injectHeaderScript = `<script>const czechHeader = '${czHeader}'; const englishHeader = '${enHeader}';</script>`;
	const newContent = template
		.replace('$MAGIC_STRING_ENGLISH_HEADER', enHeader)
		.replace('$MAGIC_STRING_CZECH_HEADER', czHeader)
		.replace('$MAGIC_STRING_ENGLISH_CONTENT', enContent)
		.replace('$MAGIC_STRING_CZECH_CONTENT', czContent)
		.replace('$MAGIC_STRING_SCRIPT', injectHeaderScript)
	writeFileSync(`./dist/${baseFileName}.html`, newContent);
});

if(dir.length > 0) {
	console.warn('WARNING: Unused files in ./includes: ' + dir.join(', '));
}

symlinkDir('./res');
symlinkDir('./content');
symlinkDir('./download');

console.log('FINISHED :)');

function symlinkDir(dir) {
	const srcDir = path.resolve(dir);
	const destDir = path.resolve(path.join('./dist', dir));
	if(existsSync(destDir)) return
	symlinkSync(srcDir, destDir);
}
