
import prompts from 'prompts';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { argv } from 'node:process';
import minimist from 'minimist';
import templateCategories from './templateList';
import { colors, setColor } from './utils/colors';
import initialize from './initialize';
import { formatAppName, validateAppName } from './utils/appName';
import helpMessage from './utils/helpMessage';
import listMessage from './utils/listMessage';

const argsv = minimist(argv.slice(2));

const resolveAndInitialize = (template, appName) => {
  const targetDirectory = path.join(process.cwd(), appName);
  const sourceDir = path.resolve(
    fileURLToPath(import.meta.url),
    '../../templates',
    `${template}`,
  );

  initialize(sourceDir, targetDirectory, appName);
};

const app = async (args) => {
  const templateArg = args.with || args.t;
  const appNameArg = args._[0];
  const { help, h, list, l } = args;

  if (help || h) {
    console.info(helpMessage);
    return helpMessage;
  }

  if (list || l) {
    console.info(listMessage);
    return listMessage;
  }

  if (!templateArg || !appNameArg) {
    try {
      const categoryResponse = await prompts([
        {
          type: 'select',
          name: 'category',
          message: 'Select the type of project:',
          choices: Object.keys(templateCategories).map((category) => ({
            title: setColor(category),
            value: category,
          })),
        },
      ]);

      if (!categoryResponse.category) {
        process.exit(0);
      }

      const selectedCategory = templateCategories[categoryResponse.category];

      const subcategoryResponse = await prompts({
        type: 'select',
        name: 'subcategory',
        message: `Select the technology for ${categoryResponse.category}:`,
        choices: Object.keys(selectedCategory).map((subcategory) => ({
          title: setColor(subcategory),
          value: subcategory,
        })),
      });

      if (!subcategoryResponse.subcategory) {
        process.exit(0);
      }

      const templates = selectedCategory[subcategoryResponse.subcategory];

      const templateResponse = await prompts(
        {
          type: 'select',
          name: 'template',
          message: `Select the template for ${subcategoryResponse.subcategory}:`,
          choices: templates,
        },
      );

      if (!templateResponse.template) {
        process.exit(0);
      }

      const appNameResponse = await prompts(
        {
          type: 'text',
          name: 'appName',
          message: colors.typescript('Enter your app name (or . for current directory)'),
          initial: 'my-app',
          format: (val) => formatAppName(val),
          validate: (val) => validateAppName(val),
        },
      );

      if (!appNameResponse.appName) {
        process.exit(0);
      }

      resolveAndInitialize(templateResponse.template, appNameResponse.appName);
    } catch (err) {
      console.error(colors.error(err.message));
    }
  } else {
    try {
      resolveAndInitialize(templateArg, appNameArg);
    } catch (err) {
      console.error(colors.error(err.message));
    }
  }
  return 0;
};

app(argsv);

export default app;
