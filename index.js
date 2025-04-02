// Iteration 1: Names and Input
const hacker1 = "Bart";
const hacker2 = "Bert";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let capsName = "";
for (let i = 0; i < hacker1.length; i++) {
    let UCLetter = hacker1[i].toUpperCase();
    capsName += `${UCLetter} `
}
console.log(capsName);

let reverseName = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    let char = hacker2[i];
    reverseName += `${char}`;
}
console.log(reverseName);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum sapien et ultrices tristique. In nec nibh tincidunt nunc molestie blandit. Cras ut sapien et nisl lacinia tincidunt eget ornare lacus. Mauris lobortis magna ac nibh ornare, a congue velit vestibulum. Duis bibendum eros convallis turpis consequat tempus. Maecenas est mauris, porta elementum auctor sed, eleifend sed lacus. Vivamus aliquam quis nibh blandit fringilla. Quisque massa arcu, lobortis cursus mauris in, posuere aliquet magna. Sed ac convallis augue, in placerat leo. Maecenas pretium nibh a viverra sodales. Praesent in ornare leo, dapibus lobortis sapien. Pellentesque non maximus ipsum. Mauris congue dui a mauris maximus, ac euismod enim convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla imperdiet eleifend turpis non mollis. Suspendisse eleifend auctor molestie. Donec finibus ipsum vel enim suscipit, egestas mattis sem hendrerit. Donec at finibus leo. Donec tempor eros ac dui malesuada sagittis. Nunc dapibus nec justo vel porta. Vestibulum faucibus elementum imperdiet. Cras consequat leo bibendum urna consectetur elementum. Maecenas nec erat nec urna luctus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dictum augue aliquet orci vehicula volutpat. Aenean hendrerit condimentum congue. Ut semper suscipit nulla vel venenatis. Donec malesuada imperdiet diam, sed dictum eros ornare mattis. Duis porta arcu id neque ultrices, id molestie metus posuere. Nullam vitae euismod eros. Phasellus fermentum metus felis, et interdum neque bibendum vel. Mauris pharetra maximus congue. Nullam massa ligula, dignissim eget ipsum at, tempor finibus libero. Phasellus commodo at magna et tempor."


function wordCounter(text) {
    let count = 1
    for (let i =0; i < text.length; i++) {
        if (text[i] === " ") {
            count ++;
        }
    }
    return count;
}

console.log(wordCounter(longText));


function etCounter(text) {
    let count = 0;
    for (let i =0; i < text.length; i++) {
        if (text[i]+text[i+1] === "et") {
            count ++;
        }
    }
    return count;
}

console.log(etCounter(longText));

const phraseToCheck = "Amor, Roma";
    


function palindromeCheck (text){
    const spacelessText = text.replace(/\s/g, '');
    const punclessText = spacelessText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    const cleanText = punclessText.toLowerCase();


    if (cleanText === cleanText.split('').reverse().join('')) {
        return "Is a Palindrome";
    } else {
        return "Is not a Palindrome";
    }
}



console.log(palindromeCheck(phraseToCheck));

