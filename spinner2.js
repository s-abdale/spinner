process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinIcon = [`\r|   `, `\r/   `, `\r-   `, `\r\\   `, `\r\/   `, `\r-   `];
let delay = 0;
let increment = 200;

for (const icon of spinIcon) {
  setTimeout(() => {
    process.stdout.write(icon);
  }, delay);
  delay += increment;
};