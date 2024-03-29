function print(command, description) {
  return console.log(`\x1b[1m${command}\x1b[2m: ${description}\x1b[0m`);
}

console.log("-----------------------------------------");
console.log("\x1b[7mGenerated by \x1b[2m@nestia/editor\x1b[0m");
console.log("");
console.log(" - \x1b[36mhttps://nestia.io/docs/editor\x1b[0m");
console.log(" - \x1b[36mhttps://github.com/samchon/nestia\x1b[0m");
console.log("-----------------------------------------");

print("npm run start", "Run only test/start.ts");
print("npm run test", "Run every test/features/**/*.ts files");
print("npm run test:simulate", "Test with mockup simulator");
