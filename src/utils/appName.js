const formatAppName = (name) => name === '.' ? '.' : name.toLowerCase().split(/[\s|_]/).join('-');

const validateAppName = (name) => {
  if (name === '.') return true;
  if (name.length > 214) return 'App name must be 214 characters or fewer';
  if (name.match(/[^a-zA-Z0-9-\s]/g)) return 'App name should not contain special characters except hyphen (-)';
  return true;
};

export { formatAppName, validateAppName };
