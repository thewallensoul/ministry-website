import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(root, 'public');

await mkdir(publicRoot, { recursive: true });

for (const directory of ['assets', 'nav']) {
  await cp(path.join(root, directory), path.join(publicRoot, directory), {
    recursive: true,
    force: true,
  });
}
