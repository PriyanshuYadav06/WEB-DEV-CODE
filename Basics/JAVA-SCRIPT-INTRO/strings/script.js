console.log("tutorial on string");
let str1 = 'Hello';     // Single quotes
let str2 = "World";     // Double quotes
let str3 = `Hello, World!`; // Template literal (backticks)
console.log(str3.length);
for(let i=0;i<str3.length;i++){
    process.stdout.write(str3[i]);
}
// Strings in JavaScript are immutable, meaning once a string is created, it cannot be modified directly. Any operation on a string creates a new string.
let str = "Hello";
str[0] = "h"; // This won't work!
console.log(str); // Output: Hello (unchanged)
// Multi line string
let str4 = `This is line 1
This is line 2
This is line 3`
console.log(str4);
// Template literal (backticks)
let x=5
let str5=`the value of x:${x}`;
console.log(str5);
//Escaping Characters:
// If you need to include special characters (like quotes, newlines, etc.) within a string, you can escape them with a backslash (\).
let str6 = "It's a beautiful\"\ day!";
console.log(str6);

let str7=`Hello World`;
let str8=`world is wonderfull `;
// Concatenation
console.log(str7.concat(str8));
console.log(str7);
//charAt();
console.log(str7.charAt(0));
console.log(str7.toUpperCase()); // Output: HELLO WORLD
console.log(str7.toLowerCase()); // Output: hello world
//The .trim() method removes any whitespace from both ends of the string.
console.log(str7.trim());
// The .indexOf() method returns the index of the first occurrence of a specified value, or -1 if the value is not found.
console.log(str7.indexOf("o")); // Output: 4 (index of first "o")
console.log(str7.indexOf("z")); // Output: -1 (not found)

//there is lots of methods in string we can explore anytime in net by using chatgpt or deepseek;)