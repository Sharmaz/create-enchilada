import { expect, test } from '@jest/globals';
import { formatAppName, validateAppName } from '../../src/utils/appName';

const appNameMock = 'vanilla-test-app';
const wrongFormatSpaces = 'vanilla test app';
const wrongFormatLowDash = 'vanilla_test_app';
const wrongFormatUpperCase = 'vAniLLa_test App';

describe('App name fuctions', () => {
  test('formatAppName', () => {
    const formattedNameFromSpaces = formatAppName(wrongFormatSpaces);
    const formattedNameFromLowDashes = formatAppName(wrongFormatLowDash);
    const formattedNameFromUpperCases = formatAppName(wrongFormatUpperCase);

    expect(formattedNameFromSpaces).toBe(appNameMock);
    expect(formattedNameFromLowDashes).toBe(appNameMock);
    expect(formattedNameFromUpperCases).toBe(appNameMock);
  });
  test('validateAppName', () => {
    expect(validateAppName(appNameMock)).toBe(true);
    expect(validateAppName('mkappcli')).toBe(true);

    expect(validateAppName('$**[]__')).toContain('App name should not contain special characters except hyphen (-)');
    expect(validateAppName('my-app_app')).toContain('App name should not contain special characters except hyphen (-)');
    expect(validateAppName('myapp!@(#&*(!@^$&*#&*@))')).toContain('App name should not contain special characters except hyphen (-)');
    expect(validateAppName('my_app')).toContain('App name should not contain special characters except hyphen (-)');
    expect(validateAppName('a'.repeat(215))).toContain('App name must be 214 characters or fewer');
    expect(validateAppName('a'.repeat(214))).toBe(true);
  });
});
