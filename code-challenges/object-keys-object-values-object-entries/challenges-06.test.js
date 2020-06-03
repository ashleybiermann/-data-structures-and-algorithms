'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2.

Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM.

------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

let $ = createSnippetWithJQuery(`
<h2> {{ name }} </h2>
<h3> {{ spouse }} </h3>
{{#children}}
* {{.}}
{{/children}}
<p> {{ house }} </p>
`);

const templatingWithMustache = () => {
  const arr = [];
  characters.forEach(current => {
    let output = Mustache.render($(), Object.entries(current));
    arr.push(output);
  });
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const getHouses = (arr) => {
  let houses = [];
  arr.forEach(current => {
    houses.push(current.house);
  });
  return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  let result = false;
  const values = Object.values(arr);
  values.forEach(current => {
    if(current.name === character && current.children) result = true;
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal - use entried instead of values

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 3(4???), but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  let result = false;
  const entries = Object.entries(arr);
  entries.forEach(current => {
    // console.log(current[1].children[0]);  // .entries are burried one level deeper than .values
    if(current[1].name === character && current[1].children[0]) result = true;
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal   if statement ? if yes, do this : if not, do this

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  let total = 0;
  const entries = Object.entries(arr);
  entries.forEach(current => {
    if (current[1].spouse) {
      // console.log(`In spouse logic ${total}`); !! From this, I learned that *Once agaiN!* it was concatentating the numbers into a string, rather than adding them up like numbers... so... I added 2 (one for spouse and one for self)... in the else statement, added 1 for self.
      total += (current[1].children.length + 2); //TODO: How to do this with parseInt or something rather than hard code?
    } else {
      total += current[1].children.length + 1;
    }
  });
  return total;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];
  const values = Object.values(arr);
  values.forEach(current => {
    if (current.spouse) {
      const nonKids = 2;
      const houseInfo = {
        house: current.house,
        members: current.children.length + nonKids,
      };
      sizes.push(houseInfo);
    } else {
      const nonKids = 1;
      const houseInfo = {
        house: current.house,
        members: current.children.length + nonKids,
      };
      sizes.push(houseInfo);
    }
  });
  return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  const values = Object.values(arr);

  values.forEach(current => {
    if (current.spouse === deceasedSpouses) { // I had expected this would need to be !==, but it's === ...why????
      // console.log(current);  also, why does nothing come out of this console.log??
      const nonKids = 2;
      const houseInfo = {
        house: current.house,
        members: current.children.length + nonKids,
      };
      survivors.push(houseInfo);
    } else {
      const nonKids = 1;
      const houseInfo = {
        house: current.house,
        members: current.children.length + nonKids,
      };
      survivors.push(houseInfo);
    }
  });
  return survivors;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

xdescribe('Testing challenge 1', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templatingWithMustache();
    expect(filledTemplates).toStrictEqual([`
    <h2> Eddard </h2>
    <h3> Catelyn </h3>
    * Robb
    * Sansa
    * Arya
    * Bran
    * Rickon
    <p> Stark </p>
  `,
    `
    <h2> Jon A. </h2>
    <h3> Lysa </h3>
    * Robin
    <p> Arryn </p>
  `,
    `
    <h2> Cersei </h2>
    <h3> Robert </h3>
    * Joffrey
    * Myrcella
    * Tommen
    <p> Lannister </p>
  `,
    `
    <h2> Daenarys </h2>
    <h3> Khal Drogo </h3>
    * Drogon
    * Rhaegal
    * Viserion
    <p> Targaryen </p>
  `,
    `
    <h2> Mace </h2>
    <h3> Alerie </h3>
    * Margaery
    * Loras
    <p> Tyrell </p>
  `,
    `
    <h2> Euron </h2>
    <h3>  </h3>
    <p> Greyjoy </p>
  `,
    `
    <h2> Jon S. </h2>
    <h3>  </h3>
    <p> Snow </p>
  `]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 6', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(26);
  });
});

describe('Testing challenge 7', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 8', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
  });
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
}
