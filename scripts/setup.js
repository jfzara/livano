import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createProjectStructure() {
  const structure = {
    'src': {
      'components': {
        'ui': {},
        'sections': {},
      },
      'layouts': {},
      'pages': {},
      'utils': {},
      'styles': {},
    },
    'public': {},
    'scripts': {},
  };

  async function createDir(basePath, struct) {
    for (const [key, value] of Object.entries(struct)) {
      const fullPath = join(basePath, key);
      await fs.mkdir(fullPath, { recursive: true });
      
      if (Object.keys(value).length > 0) {
        await createDir(fullPath, value);
      }
    }
  }

  try {
    const projectRoot = join(dirname(__dirname));
    await createDir(projectRoot, structure);
    console.log('✅ Structure du projet créée avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la création de la structure:', error);
  }
}

createProjectStructure();