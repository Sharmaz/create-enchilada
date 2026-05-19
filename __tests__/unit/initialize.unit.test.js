import { afterEach, describe, test, expect } from '@jest/globals';
import { existsSync, readFileSync, rmSync, mkdirSync } from 'node:fs';

import copyFilesAndDirectories from '../../src/templateCopy';
import initialize from '../../src/initialize';
import { appNameMock, sourcePath, genPath } from '../__mocks__/dataMock';

afterEach(() => rmSync(genPath, { recursive: true, force: true }));

describe('Initialize app', () => {
  test('Create a new app', () => {
    initialize(sourcePath, genPath, appNameMock);

    const packageJson = readFileSync(`${genPath}/package.json`, 'utf8');
    expect(packageJson).toContain(appNameMock);
  });
  test('Throws when target directory already exists', async () => {
    mkdirSync(genPath, { recursive: true });
    copyFilesAndDirectories(sourcePath, genPath);
    await expect(initialize(sourcePath, genPath, appNameMock)).rejects.toThrow('Target directory already exist!');
  });
  test('Throws on invalid template path', async () => {
    const invalidSource = '/non/existent/template';
    await expect(initialize(invalidSource, genPath, appNameMock)).rejects.toThrow('Invalid Template');
    expect(existsSync(genPath)).toBe(false);
  });
});
