export function hello(): string {
  return 'hello from @bitz-studio/core';
}

if (require.main === module) {
  // simple build output placeholder
  // prints a JS module export style object when run directly
  // (compiled output will appear in dist/ after `tsc`)
  // eslint-disable-next-line no-console
  console.log(`module.exports = { hello: ${JSON.stringify(hello())} }`);
}
