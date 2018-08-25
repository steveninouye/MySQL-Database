const fs = require('fs');

// random number from 1 to 10
const randNum = () => {
    return Math.floor(Math.random() * 10) + 1;
};

// number of data I want to insert into my database
let numResults = 100;
// beginning of sql insert statment
let values = 'INSERT INTO mentions (user_id, chirp_id) VALUES ';

// loop to add a random value to each input
for (let i = 1; i <= numResults; i++) {
    values += `(${randNum()}, ${i})`;
    values += i === numResults ? ';' : ', ';
}

// console.log(values);

const fileName = 'hundred_mentions.sql';
fs.writeFile(fileName, values, () =>
    console.log(`100 sql rows written to ${fileName}`)
);
