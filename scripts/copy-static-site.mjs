import { access, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');

for (const file of ['example_article.html', 'testing.html']) {
  const source = path.join(root, file);

  try {
    await access(source);
  } catch (error) {
    if (error.code === 'ENOENT') continue;
    throw error;
  }

  await cp(source, path.join(output, file));
}
