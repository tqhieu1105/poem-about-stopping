import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const poem = `At the wheel my daughter says
don't fix it.
I take my hands off hers.
She lifts her foot.
The low place in the rim
comes round once more.`;

const outputPath = '/output/entry.txt';
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, poem, 'utf8');
