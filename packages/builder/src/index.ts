import { hello } from '@bitz-studio/core';

export function run() {
  // eslint-disable-next-line no-console
  console.log(hello());
}

if (require.main === module) {
  run();
}
