// Fake data for courses
const coursesData = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    slug: "phyton",
    description: "Learn the fundamentals of Python programming in this interactive course designed for beginners.",
    image: "/events/python.jpg",
    topics: [
      {
        id: 1,
        name: "Getting Started with Python",
        content: "Python is a high-level, interpreted programming language that was created by Guido van Rossum and first released in 1991. It emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming.",
        url: "https://www.youtube.com/embed/kqtD5dpn9C8",
        isFinished: false
      },
      {
        id: 2,
        name: "Variables and Data Types",
        content: "In Python, variables are created when you assign a value to them. Python has the following data types built-in by default: Text Type (str), Numeric Types (int, float, complex), Sequence Types (list, tuple, range), Mapping Type (dict), Set Types (set, frozenset), Boolean Type (bool), Binary Types (bytes, bytearray, memoryview), and None Type (NoneType). You don't need to declare the type of a variable when you create one.",
        url: "https://www.youtube.com/embed/cQT33yu9pY8",
        isFinished: false
      },
      {
        id: 3,
        name: "Control Flow: Conditionals and Loops",
        content: "Control flow in Python involves conditional statements (if, elif, else) and loops (for, while). Conditional statements allow you to execute certain blocks of code based on whether a condition is true or false. Loops allow you to execute a block of code multiple times. The 'for' loop is used for iterating over a sequence, and the 'while' loop is used to repeat a block of code as long as a condition is true.",
        url: "https://www.youtube.com/embed/Zp5MuPOtsSY",
        isFinished: false
      },
      {
        id: 4,
        name: "Functions and Modules",
        content: "Functions in Python are defined using the 'def' keyword, followed by the function name and parentheses. You can pass information into functions as parameters. Functions can return data as a result. Modules are Python .py files that consist of Python code. They can define functions, classes, and variables that you can reference in other Python .py files. This helps in organizing your code and making it reusable.",
        url: "https://www.youtube.com/embed/u-OmVr_fT4s",
        isFinished: false
      }
    ]
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    slug: "data-science",
    description: "Explore the world of data science through practical exercises and real-world applications.",
    image: "/events/data-science.jpg",
    topics: [
      {
        id: 1,
        name: "Introduction to Data Science",
        content: "Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines aspects of statistics, data analysis, machine learning, and related methods to understand and analyze actual phenomena with data. It involves techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, and information science.",
        url: "https://www.youtube.com/embed/X3paOmcrTjQ",
        isFinished: false
      },
      {
        id: 2,
        name: "Data Collection and Cleaning",
        content: "Data collection involves gathering information from various sources, which can include databases, APIs, web scraping, or manual entry. Once collected, the data often needs to be cleaned to remove inconsistencies, handle missing values, and correct errors. This process, known as data cleaning or data wrangling, is crucial for ensuring the quality of the data before analysis. It can involve techniques like imputation, normalization, and outlier detection.",
        url: "https://www.youtube.com/embed/bDhvCp3_lYw",
        isFinished: false
      },
      {
        id: 3,
        name: "Exploratory Data Analysis",
        content: "Exploratory Data Analysis (EDA) is an approach to analyzing data sets to summarize their main characteristics, often with visual methods. It's a crucial step in the data science process as it helps to understand the data, identify patterns, spot anomalies, test hypotheses, and check assumptions. EDA involves techniques like data visualization, summary statistics, and dimensionality reduction to get a feel for the data and guide further analysis.",
        url: "https://www.youtube.com/embed/xi0vhXFPegw",
        isFinished: false
      }
    ]
  },
  {
    id: 3,
    title: "Artificial Intelligence Basics",
    slug: "ai",
    description: "Understand the core concepts of AI and how it's transforming industries today.",
    image: "/events/ai.jpg",
    topics: [
      {
        id: 1,
        name: "What is Artificial Intelligence?",
        content: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal.",
        url: "https://www.youtube.com/embed/ad79nYk2keg",
        isFinished: false
      },
      {
        id: 2,
        name: "Machine Learning Fundamentals",
        content: "Machine Learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide.",
        url: "https://www.youtube.com/embed/ukzFI9rgwfU",
        isFinished: false
      },
      {
        id: 3,
        name: "Neural Networks and Deep Learning",
        content: "Neural Networks are computing systems with interconnected nodes that work much like neurons in the human brain. Using algorithms, they can recognize hidden patterns and correlations in raw data, cluster and classify it, and continuously learn and improve over time. Deep Learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data. It involves multiple layers (hence 'deep') that progressively extract higher-level features from the raw input.",
        url: "https://www.youtube.com/embed/aircAruvnKk",
        isFinished: false
      }
    ]
  }
];

export default coursesData;
