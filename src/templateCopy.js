import path from 'node:path';
import {
  copyFileSync,
  lstatSync,
  mkdirSync,
  readdirSync,
} from 'node:fs';

const copyFilesAndDirectories = (source, destination) => {
  const entries = readdirSync(source);

  entries.forEach((entry) => {
    const sourcePath = path.join(source, entry);
    let destPath = path.join(destination, entry);

    if (entry === '_gitignore') {
      destPath = path.join(destination, '.gitignore');
    }

    try {
      const stat = lstatSync(sourcePath);

      if (stat.isSymbolicLink()) return;

      if (stat.isDirectory()) {
        mkdirSync(destPath, { recursive: true });
        copyFilesAndDirectories(sourcePath, destPath);
      } else {
        copyFileSync(sourcePath, destPath);
      }
    } catch (error) {
      throw new Error(`Failed to copy ${sourcePath} to ${destPath}`, { cause: error });
    }
  });
};

export default copyFilesAndDirectories;
