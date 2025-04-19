/**
 * Quiz data for the Ophyrs Learning Platform
 * Contains categories and questions for interactive quizzes
 */

// Quiz categories with icons
export const categories = [
  { id: 'programming', name: 'Programming', icon: '💻' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'math', name: 'Mathematics', icon: '🔢' },
  { id: 'history', name: 'History', icon: '📜' },
  { id: 'language', name: 'Language', icon: '🔤' },
];

// Quiz questions organized by category
export const quizData = {
  programming: [
    {
      id: 1,
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Multi Language',
        'Hyper Transfer Markup Language',
        'Home Tool Markup Language'
      ],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 2,
      question: 'Which of the following is NOT a JavaScript data type?',
      options: [
        'String',
        'Boolean',
        'Float',
        'Object'
      ],
      correctAnswer: 2,
      points: 15
    },
    {
      id: 3,
      question: 'What symbol is used for single-line comments in JavaScript?',
      options: [
        '#',
        '//',
        '/* */',
        '<!---->'
      ],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 4,
      question: 'Which CSS property is used to change the text color?',
      options: [
        'text-color',
        'font-color',
        'color',
        'text-style'
      ],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 5,
      question: 'What does CSS stand for?',
      options: [
        'Creative Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Sheets',
        'Colorful Style Sheets'
      ],
      correctAnswer: 1,
      points: 10
    }
  ],
  science: [
    {
      id: 1,
      question: 'What is the chemical symbol for gold?',
      options: [
        'Go',
        'Gd',
        'Au',
        'Ag'
      ],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: [
        'Venus',
        'Mars',
        'Jupiter',
        'Saturn'
      ],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 3,
      question: 'What is the hardest natural substance on Earth?',
      options: [
        'Platinum',
        'Iron',
        'Diamond',
        'Titanium'
      ],
      correctAnswer: 2,
      points: 15
    },
    {
      id: 4,
      question: 'Which of the following is NOT a state of matter?',
      options: [
        'Solid',
        'Liquid',
        'Gas',
        'Mineral'
      ],
      correctAnswer: 3,
      points: 10
    },
    {
      id: 5,
      question: 'What is the largest organ in the human body?',
      options: [
        'Heart',
        'Liver',
        'Skin',
        'Brain'
      ],
      correctAnswer: 2,
      points: 10
    }
  ],
  math: [
    {
      id: 1,
      question: 'What is the value of π (pi) to two decimal places?',
      options: [
        '3.14',
        '3.16',
        '3.12',
        '3.18'
      ],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 2,
      question: 'What is the square root of 144?',
      options: [
        '12',
        '14',
        '10',
        '16'
      ],
      correctAnswer: 0,
      points: 10
    },
    {
      id: 3,
      question: 'Which of the following is a prime number?',
      options: [
        '15',
        '21',
        '23',
        '27'
      ],
      correctAnswer: 2,
      points: 15
    },
    {
      id: 4,
      question: 'What is 7 × 8?',
      options: [
        '54',
        '56',
        '58',
        '62'
      ],
      correctAnswer: 1,
      points: 5
    },
    {
      id: 5,
      question: 'What is the next number in the sequence: 2, 4, 8, 16, ...?',
      options: [
        '24',
        '30',
        '32',
        '36'
      ],
      correctAnswer: 2,
      points: 15
    }
  ],
  history: [
    {
      id: 1,
      question: 'In which year did World War II end?',
      options: [
        '1943',
        '1945',
        '1947',
        '1950'
      ],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 2,
      question: 'Who was the first President of the United States?',
      options: [
        'Thomas Jefferson',
        'John Adams',
        'George Washington',
        'Abraham Lincoln'
      ],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 3,
      question: 'Which ancient civilization built the pyramids of Giza?',
      options: [
        'Romans',
        'Greeks',
        'Egyptians',
        'Mayans'
      ],
      correctAnswer: 2,
      points: 10
    },
    {
      id: 4,
      question: 'Who painted the Mona Lisa?',
      options: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Michelangelo',
        'Leonardo da Vinci'
      ],
      correctAnswer: 3,
      points: 10
    },
    {
      id: 5,
      question: 'Which country was NOT part of the Allied Powers during World War II?',
      options: [
        'United States',
        'Soviet Union',
        'Japan',
        'United Kingdom'
      ],
      correctAnswer: 2,
      points: 15
    }
  ],
  language: [
    {
      id: 1,
      question: 'What is the plural form of "child"?',
      options: [
        'Childs',
        'Children',
        'Childes',
        'Childies'
      ],
      correctAnswer: 1,
      points: 5
    },
    {
      id: 2,
      question: 'Which of these is a synonym for "happy"?',
      options: [
        'Sad',
        'Angry',
        'Joyful',
        'Tired'
      ],
      correctAnswer: 2,
      points: 5
    },
    {
      id: 3,
      question: 'What is the past tense of "go"?',
      options: [
        'Goed',
        'Gone',
        'Went',
        'Going'
      ],
      correctAnswer: 2,
      points: 5
    },
    {
      id: 4,
      question: 'Which word is spelled correctly?',
      options: [
        'Accomodate',
        'Accommodate',
        'Acommodate',
        'Acomodate'
      ],
      correctAnswer: 1,
      points: 10
    },
    {
      id: 5,
      question: 'What is an antonym for "brave"?',
      options: [
        'Courageous',
        'Fearless',
        'Cowardly',
        'Bold'
      ],
      correctAnswer: 2,
      points: 10
    }
  ]
};

// Export default for easier importing
export default {
  categories,
  quizData
};
