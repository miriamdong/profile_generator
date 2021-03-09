const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.prompt();

// const util = require('util');
// const question = util.promisify(rl.question).bind(rl);

// async function questionExample() {
//   try {
//     const answer = await question('What is you favorite food? ');
//     console.log(`Oh, so your favorite food is ${answer}`);
//   } catch (err) {
//     console.error('Question rejected', err);
//   }
// }
// questionExample();



// const questions = [
//   "What's your name? Nicknames are also acceptable :)",
//   "What's an activity you like doing?",
//   "What do you listen to while doing that?",
//   "Which meal is your favourite (eg: dinner, brunch, etc.)",
//   "What's your favourite thing to eat for that meal?",
//   "Which sport is your absolute favourite?",
//   "What is your superpower? In a few words, tell us what you are amazing at!"
// ];

let profile = [];
// //helper function here
// const generateProf = (index, questions) => {
//   if (index === questions.length) {
//     console.log(`Hello, my name is ${answers[0]}. I like to ${answers[1]} while listening to ${answers[2]}. My favourite meal is ${answers[3]} and my favourite thing to eat for that meal is ${answers[4]}. My favourite sport is ${answers[5]} and my super power is ${answers[6]}.`);
//     rl.close();
//   } else {
//     rl.question(questions[index], (answer) => {
//       answers.push(answer);
//       generateProf((index + 1), questions);
//     });
//   }
// };

// generateProf(0, questions);
async function processLineByLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  for await (const line of rl) {
    "What's your name? Nicknames are also acceptable :)",
    "What's an activity you like doing?",
    "What do you listen to while doing that?",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "What's your favourite thing to eat for that meal?",
    "Which sport is your absolute favourite?",
    "What is your superpower? In a few words, tell us what you are amazing at!"
  }
}

rl.question("What's your name? Nicknames are also acceptable :) \r\n", (answer) => {
  profile.push(`Hi, my name is ${ answer }`);
  rl.question("What's an activity you like doing?  \r\n", (answer) => {
    profile.push(`I like ${ answer }`);
    rl.question("Which sport is your absolute favourite?  \r\n", (answer) => {
      profile.push(`My favorite sport is ${ answer }`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)  \r\n ", (answer) => {
        profile.push(`My favorite meal is ${ answer }`);

        rl.question("What's your favourite thing to eat for that meal?  \r\n", (answer) => {
          profile.push(`I love to eat ${ answer }`);

          rl.question("What is your superpower? In a few words, tell us what you are amazing at!  \r\n", (answer) => {
            profile.push(`I am amazing because ${ answer }`);
            rl.on('close', () => console.log(profile));
            rl.close();

          });

        });

      });

    });
  });
});
// const values = ['lorem ipsum', 'dolor sit amet'];
// const showResults = debounce(() => {
//   console.log(
//     '\n',
//     values.filter((val) => val.startsWith(rl.line)).join(' ')
//   );
// }, 300);
// process.stdin.on('keypress', (c, k) => {
//   showResults();
// });

// \u0003 maps to ctrl+c input
// if (key === '\u0003') process.exit();