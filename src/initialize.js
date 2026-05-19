import path from 'node:path';
import { existsSync, mkdirSync } from 'fs';
import copyFilesAndDirectories from './templateCopy';
import renamePackageJsonName from './templateRenameName';
import { colors } from './utils/colors';

async function initialize(sourcePath, destinationPath, name) {
  const isCurrentDir = name === '.';
  const isValidTemplate = existsSync(sourcePath);
  const isDestinationPath = existsSync(destinationPath);

  if (!isValidTemplate) {
    throw new Error('Invalid Template');
  }

  if (isDestinationPath && !isCurrentDir) {
    throw new Error('Target directory already exist!');
  }

  if (!isCurrentDir) {
    console.info(`📂 ${colors.ok('Target directory doesn\'t exist')}`);
    console.info(`🚧 ${colors.ok('Creating directory')}`);
    mkdirSync(destinationPath, { recursive: true });
    console.info(`📁 ${colors.ok('Finished creating directory')}`);
  }

  const packageName = isCurrentDir ? path.basename(destinationPath) : name;

  copyFilesAndDirectories(sourcePath, destinationPath);
  renamePackageJsonName(destinationPath, packageName);
  console.info(`🚀 ${colors.ok(`Finished generating your app ${colors.error(packageName)}`)}`);
  if (!isCurrentDir) {
    console.info(`🏠 ${colors.info(`cd ${name}`)}`);
  }
  console.info(`🧪 ${colors.info('npm install')}`);
}

export default initialize;
