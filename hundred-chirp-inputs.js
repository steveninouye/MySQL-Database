const fs = require('fs');

const chirps = [
    {
        id: 1,
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas. Malesuada bibendum arcu vitae elementum curabitur. Habitant morbi tristique senectus et netus et malesuada fames. Nunc non blandit massa enim nec.',
        location: 'Honolulu, Hawaii'
    },
    {
        id: 2,
        text:
            'Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nisl vel pretium lectus quam id. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. At varius vel pharetra vel turpis nunc eget.',
        location: 'Hilo, Hawaii'
    },
    {
        id: 3,
        text:
            'In ante metus dictum at tempor commodo ullamcorper a lacus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Velit laoreet id donec ultrices tincidunt. Aliquet enim tortor at auctor urna nunc id cursus metus.',
        location: 'Los Angelos, California'
    },
    {
        id: 4,
        text:
            'Enim neque volutpat ac tincidunt vitae. Interdum velit euismod in pellentesque massa placerat duis. Massa tempor nec feugiat nisl pretium. Aliquam sem et tortor consequat id. Imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque sit amet porttitor eget dolor morbi non arcu. Dolor sit amet consectetur adipiscing elit.',
        location: 'San Francisco, California'
    },
    {
        id: 5,
        text:
            'Semper auctor neque vitae tempus quam pellentesque. Sed felis eget velit aliquet sagittis id consectetur purus ut. Enim sit amet venenatis urna. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ut placerat orci nulla pellentesque. Donec massa sapien faucibus et molestie ac feugiat sed.',
        location: 'New York City, New York'
    },
    {
        id: 6,
        text:
            'Etiam dignissim diam quis enim lobortis scelerisque. Semper auctor neque vitae tempus quam. Auctor elit sed vulputate mi sit amet mauris commodo. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Accumsan tortor posuere ac ut consequat. Auctor neque vitae tempus quam. Urna id volutpat lacus laoreet non curabitur gravida arcu.',
        location: 'Miami,Florida'
    },
    {
        id: 7,
        text:
            'Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Tincidunt dui ut ornare lectus sit amet est placerat in. Pretium nibh ipsum consequat nisl vel pretium lectus. Tincidunt arcu non sodales neque. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Quis enim lobortis scelerisque fermentum dui faucibus.',
        location: 'Houston, Texas'
    },
    {
        id: 8,
        text:
            'Vestibulum sed arcu non odio euismod lacinia. Sit amet nisl purus in mollis nunc sed. Hac habitasse platea dictumst quisque. Ornare suspendisse sed nisi lacus sed viverra tellus in. Posuere morbi leo urna molestie at. Amet porttitor eget dolor morbi. Nulla aliquet porttitor lacus luctus. Vestibulum morbi blandit cursus risus at ultrices mi.',
        location: 'Seattle, Washington'
    },
    {
        id: 9,
        text:
            'Porttitor massa id neque aliquam. Ultrices in iaculis nunc sed augue lacus viverra vitae. Dictum non consectetur a erat nam at lectus. Vitae semper quis lectus nulla. Elementum facilisis leo vel fringilla est ullamcorper eget. Sit amet tellus cras adipiscing.',
        location: 'Portland, Oregon'
    },
    {
        id: 10,
        text:
            'Morbi quis commodo odio aenean sed adipiscing diam. Convallis a cras semper auctor neque vitae. Volutpat consequat mauris nunc congue. Condimentum id venenatis a condimentum. Facilisi nullam vehicula ipsum a arcu cursus vitae. Nunc eget lorem dolor sed viverra. Facilisis volutpat est velit egestas dui id ornare arcu. Sem nulla pharetra diam sit amet.',
        location: 'Las Vegas, Nevada'
    }
];

// random number from 0 to 9
const randNum = () => {
    return Math.floor(Math.random() * 10);
};

// number of data I want to insert into my database
let numResults = 100;
// beginning of sql insert statment
let values = 'INSERT INTO chirps (user_id, text, location) VALUES ';

// loop to add a random value to each input
for (let i = 0; i < numResults; i++) {
    values += `(${chirps[randNum()].id}, "${chirps[randNum()].text}", "${
        chirps[randNum()].location
    }")`;
    values += i === numResults - 1 ? ';' : ', ';
}

// console.log(values);

const fileName = 'hundre_chirps.sql';
fs.writeFile(fileName, values, () =>
    console.log(`100 sql rows written to ${fileName}`)
);
