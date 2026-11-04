// Lists every [TODO: ...] left in src/.
//   npm run todos   prints the list
//   --check         runs before each build: fails if site.ts says launched: true while TODOs remain
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const files = readdirSync('src', { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => join(entry.parentPath, entry.name));

const todos = files.flatMap((file) =>
  readFileSync(file, 'utf8')
    .split('\n')
    .flatMap((line, i) => (line.match(/\[TODO:[^\]]*\]/g) ?? []).map((text) => `${file}:${i + 1}  ${text}`)),
);

if (process.argv.includes('--check')) {
  const config = readFileSync('src/data/site.ts', 'utf8');
  const launched = /^\s*launched:\s*true/m.test(config);
  if (launched && todos.length) {
    console.error(`Build stopped: launched is true but ${todos.length} TODOs remain. Run "npm run todos".`);
    process.exit(1);
  }
  if (launched && config.includes('reva-associates.example')) {
    console.error('Build stopped: launched is true but url in src/data/site.ts is still the placeholder.');
    process.exit(1);
  }
} else {
  console.log(todos.join('\n') || 'No TODOs left.');
  console.log(`\n${todos.length} TODO(s) remaining.`);
}
