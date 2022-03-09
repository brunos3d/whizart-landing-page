#!/usr/bin/env zx

import 'zx/globals';

const GIT_COMMIT_AUTHOR_EMAIL = 'webmaster@whizart.co';

const triggerFilePath = path.join(__dirname, '../CHANGE_TO_TRIGGER_BUILD.txt');

if (!fs.existsSync(triggerFilePath)) {
  console.error('No trigger file found. Exiting.');
  await $`exit 1`;
}

const content = await fs.readFile(triggerFilePath);
const regex = /build\: ?(\d+)/;

const match = regex.exec(content.toString());

if (!match) {
  console.error(
    'Malformed CHANGE_TO_TRIGGER_BUILD.txt file\nExpected format:\nbuild: <build number>',
  );
  await $`exit 1`;
}

const incrementedBuildNumber = +match[match.length - 1] + 1;
const newContent = content
  .toString()
  .replace(regex, `build: ${incrementedBuildNumber}`);

await fs.writeFile(triggerFilePath, newContent);

await $`git add ${triggerFilePath}`;
await $`git commit --allow-empty --author=${GIT_COMMIT_AUTHOR_EMAIL} -m "chore: deploy build ${incrementedBuildNumber}"`;
await $`git push`;
