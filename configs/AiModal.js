const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const courseOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and easy level of difficulty  will be <Difficulty Level> with summary of course, List of Chapters along with summery  for each chapter, Topic list in each chapter in  JSON format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseTitle": "Python for Beginners",\n  "difficultyLevel": "Easy",\n  "courseSummary": "This course provides a gentle introduction to Python programming.  It covers the fundamental concepts needed to write basic Python programs, focusing on clear explanations and practical examples. No prior programming experience is required.",\n  "chapters": [\n    {\n      "chapterTitle": "Introduction to Python",\n      "chapterSummary": "This chapter introduces the Python programming language, its applications, and setting up your programming environment.",\n      "topics": [\n        "What is Python?",\n        "Why learn Python?",\n        "Installing Python",\n        "Using a Python IDE (e.g., Thonny, VS Code)",\n        "Running your first Python program",\n        "Basic Syntax (indentation, comments)"\n      ]\n    },\n    {\n      "chapterTitle": "Variables and Data Types",\n      "chapterSummary": "This chapter covers the fundamental building blocks of any program: variables and different types of data they can hold.",\n      "topics": [\n        "Variables and assignment",\n        "Integers (int)",\n        "Floating-point numbers (float)",\n        "Strings (str)",\n        "Booleans (bool)",\n        "Type conversion"\n      ]\n    },\n    {\n      "chapterTitle": "Operators",\n      "chapterSummary": "Learn about different types of operators used to perform operations on data.",\n      "topics": [\n        "Arithmetic operators (+, -, *, /, //, %, **)",\n        "Comparison operators (==, !=, >, <, >=, <=)",\n        "Logical operators (and, or, not)",\n        "Assignment operators (=, +=, -=, *=, /=)",\n        "Operator precedence"\n      ]\n    },\n    {\n      "chapterTitle": "Input and Output",\n      "chapterSummary": "Learn how to get input from the user and display output to the console.",\n      "topics": [\n        "The `print()` function",\n        "The `input()` function",\n        "Formatting output strings (f-strings)"\n      ]\n    },\n    {\n      "chapterTitle": "Control Flow (Conditional Statements)",\n      "chapterSummary": "This chapter introduces conditional statements to control the flow of execution in your programs.",\n      "topics": [\n        "`if` statements",\n        "`if-else` statements",\n        "`if-elif-else` statements",\n        "Nested `if` statements"\n      ]\n    },\n    {\n      "chapterTitle": "Loops",\n      "chapterSummary": "Learn how to repeat blocks of code using loops.",\n      "topics": [\n        "`for` loops",\n        "`while` loops",\n        "`break` and `continue` statements",\n        "Nested loops"\n      ]\n    },\n    {\n      "chapterTitle": "Basic Data Structures: Lists and Tuples",\n      "chapterSummary": "This chapter introduces fundamental data structures for storing collections of data.",\n      "topics": [\n        "Lists: creation, access, modification",\n        "List methods (append, insert, remove, pop)",\n        "Tuples: creation, access",\n        "Difference between lists and tuples"\n      ]\n    },\n    {\n      "chapterTitle": "Functions",\n      "chapterSummary": "Learn to write reusable blocks of code using functions.",\n      "topics": [\n        "Defining functions",\n        "Function parameters and arguments",\n        "Return values",\n        "Function calls"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotes = model.startChat({
  generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format with emojis that is well formatted to be displayed on a webpage, also we want only the content for each chapter that will be purely HTML (Do not Add HTMLK , Head, Body, title tag), The chapters : "chapters": [\n    {\n      "chapterTitle": "Advanced Graph Algorithms",\n      "chapterSummary": "Dive deep into complex graph algorithms beyond the basics.  Expect challenging implementations and analysis.",\n      "emojiIcon": "🗺️",\n      "topics": [\n        "Minimum Cut Algorithms (Karger\'s Algorithm)",\n        "Maximum Flow Algorithms (Push-Relabel, Dinic\'s)",\n        "Network Flow Applications",\n        "All Pairs Shortest Paths (Floyd-Warshall)",\n        "Advanced Graph Traversal (Articulation Points, Bridges)",\n        "Strongly Connected Components (Kosaraju\'s Algorithm)",\n        "Graph Isomorphism"\n      ]\n    },\n    {\n      "chapterTitle": "Dynamic Programming Optimizations",\n      "chapterSummary": "Explore advanced techniques for optimizing dynamic programming solutions and tackling complex DP problems.",\n      "emojiIcon": "⚙️",\n      "topics": [\n        "Bitmasking DP",\n        "Convex Hull Trick",\n        "Knuth Optimization",\n        "Meet-in-the-Middle",\n        "Data Structures for DP (Sparse Tables, Segment Trees)",\n        "DP on Trees"\n      ]\n    },\n    {\n      "chapterTitle": "Advanced Tree Structures",\n      "chapterSummary": "Go beyond binary trees to explore more complex and efficient tree structures.",\n      "emojiIcon": "🌳",\n      "topics": [\n        "Trie (Prefix Trees)",\n        "Suffix Trees & Suffix Arrays",\n        "Segment Trees (Lazy Propagation)",\n        "Fenwick Trees (Binary Indexed Trees)",\n        "Range Trees",\n        "KD-Trees"\n      ]\n    },\n    {\n      "chapterTitle": "String Algorithms",\n      "chapterSummary": "Master advanced string algorithms for efficient pattern matching and text processing.",\n      "emojiIcon": "🔤",\n      "topics": [\n        "Rabin-Karp Algorithm",\n        "Aho-Corasick Algorithm",\n        "Manacher\'s Algorithm (Palindrome Detection)",\n        "Suffix Trees & Suffix Arrays (Advanced applications)",\n        "Longest Common Subsequence (LCS) optimizations"\n      ]\n    },\n    {\n      "chapterTitle": "Computational Geometry",\n      "chapterSummary": "Tackle algorithms for solving geometric problems efficiently.",\n      "emojiIcon": "📐",\n      "topics": [\n        "Convex Hull Algorithms (Graham Scan, Gift Wrapping)",\n        "Line Segment Intersection",\n        "Closest Pair of Points",\n        "Voronoi Diagrams",\n        "Delaunay Triangulation"\n      ]\n    },\n    {\n      "chapterTitle": "Amortized Analysis & Data Structures",\n      "chapterSummary": "Analyze the efficiency of data structures over a sequence of operations, not just individual ones.",\n      "emojiIcon": "⏱️",\n      "topics": [\n        "Amortized Analysis Techniques",\n        "Self-Balancing Binary Search Trees (AVL, Red-Black)",\n        "Splay Trees",\n        "B-Trees",\n        "Skip Lists"\n      ]\n    },\n    {\n      "chapterTitle": "Advanced Algorithm Design Techniques",\n      "chapterSummary": "Learn sophisticated techniques for designing efficient algorithms.",\n      "emojiIcon": "💡",\n      "topics": [\n        "Greedy Algorithms (Advanced applications)",\n        "Divide and Conquer (Advanced applications)",\n        "Randomized Algorithms",\n        "Approximation Algorithms",\n        "Backtracking & Branch and Bound"\n      ]\n    }\n  ]\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "```html\n<!-- Chapter 1: Advanced Graph Algorithms -->\n<h2>🗺️ Advanced Graph Algorithms</h2>\n<p>Dive deep into complex graph algorithms beyond the basics. Expect challenging implementations and analysis.</p>\n<ul>\n  <li><strong>Minimum Cut Algorithms (Karger's Algorithm):</strong>  Understanding and implementing Karger's randomized algorithm for finding minimum cuts in a graph.  Understanding its probabilistic guarantees. 🧮</li>\n  <li><strong>Maximum Flow Algorithms (Push-Relabel, Dinic's):</strong> Implementing and analyzing Push-Relabel and Dinic's algorithms for finding maximum flows in networks.  Comparing their time complexities. 🌊</li>\n  <li><strong>Network Flow Applications:</strong> Applying maximum flow algorithms to solve real-world problems like bipartite matching, assignment problems, and circulation problems.  Practical examples and problem-solving strategies. 💼</li>\n  <li><strong>All Pairs Shortest Paths (Floyd-Warshall):</strong> Understanding and implementing the Floyd-Warshall algorithm for finding shortest paths between all pairs of vertices in a graph.  Analyzing its time complexity. 🛣️</li>\n  <li><strong>Advanced Graph Traversal (Articulation Points, Bridges):</strong> Identifying articulation points (cut vertices) and bridges in a graph using Depth-First Search (DFS).  Understanding their significance in graph connectivity. 🔗</li>\n  <li><strong>Strongly Connected Components (Kosaraju's Algorithm):</strong> Implementing Kosaraju's algorithm to find strongly connected components in a directed graph.  Understanding the concept of strongly connected components and their applications. 🔄</li>\n  <li><strong>Graph Isomorphism:</strong> Exploring the problem of determining whether two graphs are isomorphic.  Understanding the complexity and approaches to solving this problem. 🔄</li>\n</ul>\n\n\n<!-- Chapter 2: Dynamic Programming Optimizations -->\n<h2>⚙️ Dynamic Programming Optimizations</h2>\n<p>Explore advanced techniques for optimizing dynamic programming solutions and tackling complex DP problems.</p>\n<ul>\n  <li><strong>Bitmasking DP:</strong> Solving problems using bit manipulation techniques within dynamic programming.  Examples and strategies for efficient bitmasking. 👾</li>\n  <li><strong>Convex Hull Trick:</strong> Optimizing dynamic programming solutions involving queries of convex functions.  Understanding the underlying principles and implementation. 📈</li>\n  <li><strong>Knuth Optimization:</strong> A technique for optimizing DP solutions with a specific structure, reducing time complexity.  Understanding its applicability and limitations. 🎯</li>\n  <li><strong>Meet-in-the-Middle:</strong>  A divide-and-conquer approach to reduce the time complexity of DP problems by splitting the problem into smaller subproblems. 🤝</li>\n  <li><strong>Data Structures for DP (Sparse Tables, Segment Trees):</strong> Utilizing data structures like sparse tables and segment trees to efficiently query and update DP states. 🗂️</li>\n  <li><strong>DP on Trees:</strong>  Solving dynamic programming problems on tree structures.  Techniques for efficient traversal and computation. 🌳</li>\n</ul>\n\n\n<!-- Chapter 3: Advanced Tree Structures -->\n<h2>🌳 Advanced Tree Structures</h2>\n<p>Go beyond binary trees to explore more complex and efficient tree structures.</p>\n<ul>\n  <li><strong>Trie (Prefix Trees):</strong> Implementing and utilizing Trie data structures for efficient prefix searching and string operations.  Applications and advantages. 🔤</li>\n  <li><strong>Suffix Trees & Suffix Arrays:</strong>  Understanding the construction and applications of suffix trees and suffix arrays for efficient string matching and pattern searching. 🔎</li>\n  <li><strong>Segment Trees (Lazy Propagation):</strong> Implementing segment trees with lazy propagation for efficient range queries and updates.  Understanding the optimization provided by lazy propagation. 📊</li>\n  <li><strong>Fenwick Trees (Binary Indexed Trees):</strong> Implementing and utilizing Fenwick trees for efficient range sum queries and updates.  Comparing it with segment trees. 📈</li>\n  <li><strong>Range Trees:</strong>  Understanding and implementing range trees for efficient multi-dimensional range queries.  Applications and complexity analysis. 🗺️</li>\n  <li><strong>KD-Trees:</strong>  Implementing and utilizing KD-trees for efficient nearest neighbor searches in multi-dimensional spaces.  Comparing it with other spatial data structures. 📍</li>\n</ul>\n\n\n<!-- Chapter 4: String Algorithms -->\n<h2>🔤 String Algorithms</h2>\n<p>Master advanced string algorithms for efficient pattern matching and text processing.</p>\n<ul>\n  <li><strong>Rabin-Karp Algorithm:</strong> Implementing the Rabin-Karp algorithm for pattern searching using hashing.  Analyzing its time complexity and handling collisions. 🔎</li>\n  <li><strong>Aho-Corasick Algorithm:</strong> Implementing the Aho-Corasick algorithm for efficient multiple pattern searching.  Understanding its automaton-based approach. 🤖</li>\n  <li><strong>Manacher's Algorithm (Palindrome Detection):</strong> Implementing Manacher's linear time algorithm for finding all palindromic substrings in a string.  Understanding its efficiency.  palindrome</li>\n  <li><strong>Suffix Trees & Suffix Arrays (Advanced applications):</strong> Advanced applications of suffix trees and suffix arrays, including longest common substrings and other string problems. 📚</li>\n  <li><strong>Longest Common Subsequence (LCS) optimizations:</strong> Optimizing the dynamic programming solution for the Longest Common Subsequence problem.  Exploring space and time optimization techniques. 🖇️</li>\n</ul>\n\n\n<!-- Chapter 5: Computational Geometry -->\n<h2>📐 Computational Geometry</h2>\n<p>Tackle algorithms for solving geometric problems efficiently.</p>\n<ul>\n  <li><strong>Convex Hull Algorithms (Graham Scan, Gift Wrapping):</strong> Implementing and comparing the Graham Scan and Gift Wrapping algorithms for finding the convex hull of a set of points. 🔶</li>\n  <li><strong>Line Segment Intersection:</strong>  Efficiently detecting intersections between line segments.  Algorithms and data structures for handling intersections.  пересечение</li>\n  <li><strong>Closest Pair of Points:</strong> Finding the closest pair of points in a set of points using efficient algorithms.  Divide and conquer approaches. 📍</li>\n  <li><strong>Voronoi Diagrams:</strong> Understanding and constructing Voronoi diagrams for a set of points.  Applications and algorithms. 🌐</li>\n  <li><strong>Delaunay Triangulation:</strong> Understanding and constructing Delaunay triangulations for a set of points.  Relationship to Voronoi diagrams. 🔺</li>\n</ul>\n\n\n<!-- Chapter 6: Amortized Analysis & Data Structures -->\n<h2>⏱️ Amortized Analysis & Data Structures</h2>\n<p>Analyze the efficiency of data structures over a sequence of operations, not just individual ones.</p>\n<ul>\n  <li><strong>Amortized Analysis Techniques:</strong>  Understanding different amortized analysis techniques like aggregate, accounting, and potential methods. 🧮</li>\n  <li><strong>Self-Balancing Binary Search Trees (AVL, Red-Black):</strong> Implementing and analyzing self-balancing BSTs like AVL and Red-Black trees.  Understanding their properties and balancing mechanisms. 🌲</li>\n  <li><strong>Splay Trees:</strong> Understanding and implementing splay trees, their self-adjusting nature, and amortized performance guarantees. 🔄</li>\n  <li><strong>B-Trees:</strong> Understanding and implementing B-trees for efficient disk-based data storage and retrieval.  Analyzing their properties and performance characteristics. 🗄️</li>\n  <li><strong>Skip Lists:</strong> Understanding and implementing skip lists, a probabilistic data structure for efficient search, insertion, and deletion. 🔗</li>\n</ul>\n\n\n<!-- Chapter 7: Advanced Algorithm Design Techniques -->\n<h2>💡 Advanced Algorithm Design Techniques</h2>\n<p>Learn sophisticated techniques for designing efficient algorithms.</p>\n<ul>\n  <li><strong>Greedy Algorithms (Advanced applications):</strong>  Advanced applications of greedy algorithms, including Huffman coding and other optimization problems.  Analyzing the limitations of greedy approaches. 💰</li>\n  <li><strong>Divide and Conquer (Advanced applications):</strong> Advanced applications of divide and conquer, beyond merge sort and quicksort.  Examples and problem-solving strategies. 🧩</li>\n  <li><strong>Randomized Algorithms:</strong>  Understanding and implementing randomized algorithms, such as randomized quicksort and Monte Carlo methods.  Analyzing their expected performance. 🎲</li>\n  <li><strong>Approximation Algorithms:</strong>  Understanding the concept of approximation algorithms for NP-hard problems.  Examples and techniques for designing approximation algorithms. 📏</li>\n  <li><strong>Backtracking & Branch and Bound:</strong> Implementing and analyzing backtracking and branch and bound algorithms for solving combinatorial optimization problems.  Understanding their exploration strategies. 🌲</li>\n</ul>\n```\n",
        },
      ],
    },
  ],
});

export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate the flashcard on topic : Flutter Fundamentals,User Interface (UI) Development,Basic App Navigation in JSON format with front back content, Maximum 15",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "front": "What is a Widget in Flutter?",\n    "back": "A Widget is the fundamental building block of Flutter\'s UI.  Everything you see on the screen is a widget, including layouts, text, images, and buttons."\n  },\n  {\n    "front": "What are the two main types of Widgets?",\n    "back": "StatelessWidget (immutable) and StatefulWidget (mutable)."\n  },\n  {\n    "front": "Explain the difference between StatelessWidget and StatefulWidget.",\n    "back": "StatelessWidget doesn\'t change its state over time, while StatefulWidget can rebuild itself based on changes in its state."\n  },\n  {\n    "front": "Name three common layout widgets.",\n    "back": "Row, Column, and Stack."\n  },\n  {\n    "front": "What is the purpose of a Scaffold widget?",\n    "back": "Scaffold provides a basic visual layout structure for an app, including app bar, body, floating action button, etc."\n  },\n  {\n    "front": "How do you display text in Flutter?",\n    "back": "Using the Text widget."\n  },\n  {\n    "front": "What widget is used for images?",\n    "back": "Image.asset or Image.network"\n  },\n  {\n    "front": "What is the purpose of a Container widget?",\n    "back": "Provides padding, margin, color, and other styling properties to its child widget(s)."\n  },\n  {\n    "front": "How do you navigate to a new screen in Flutter?",\n    "back": "Using Navigator.push()."\n  },\n  {\n    "front": "What is the role of Navigator in Flutter?",\n    "back": "Manages a stack of routes (screens) in your application."\n  },\n  {\n    "front": "What is Material Design?",\n    "back": "A design language developed by Google, providing a consistent visual style for applications."\n  },\n  {\n    "front": "What is a Route in Flutter navigation?",\n    "back": "A Route represents a single screen or page in your app\'s navigation."\n  },\n  {\n    "front": "How do you pass data to a new screen during navigation?",\n    "back": "Using arguments within Navigator.push() and accessing them in the new screen\'s constructor."\n  },\n  {\n    "front": "What is the purpose of `BuildContext`?",\n    "back": "Provides access to the widget tree\'s information, such as the parent widget and theme."\n  },\n  {\n    "front": "What\'s the difference between `push` and `pushReplacement` in navigation?",\n    "back": "`push` adds a new route to the stack, while `pushReplacement` replaces the current route with a new one."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Quiz on topic : Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation with Question and Options along with correct answer in JSON format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "quizTitle": "Flutter Fundamentals, UI & Navigation",\n  "questions": [\n    {\n      "question": "What is the main widget used to build a Flutter application?",\n      "options": ["Widget", "StatelessWidget", "MaterialApp", "Scaffold"],\n      "correctAnswer": "MaterialApp"\n    },\n    {\n      "question": "Which widget is used to display a single line of text in Flutter?",\n      "options": ["Text", "TextField", "Container", "Row"],\n      "correctAnswer": "Text"\n    },\n    {\n      "question": "What does StatelessWidget do?",\n      "options": ["Updates its UI dynamically based on state changes", "Provides a single immutable description of the UI", "Manages the state of a widget tree", "Handles user interactions"],\n      "correctAnswer": "Provides a single immutable description of the UI"\n    },\n    {\n      "question": "Which widget is best suited for arranging children in a column?",\n      "options": ["Row", "Column", "Stack", "Container"],\n      "correctAnswer": "Column"\n    },\n    {\n      "question": "How do you navigate to a new route in Flutter using named routes?",\n      "options": ["Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))", "Navigator.pushNamed(context, \'/newScreen\')", "Navigator.pop(context)", "Route.generate(context, \'/newScreen\')"],\n      "correctAnswer": "Navigator.pushNamed(context, \'/newScreen\')"\n    },\n    {\n      "question": "What widget is used to create a scrollable list of items?",\n      "options": ["ListView", "GridView", "Stack", "Column"],\n      "correctAnswer": "ListView"\n    },\n    {\n      "question": "Which widget provides a visual indicator of the current screen in a navigation app?",\n      "options": ["AppBar", "Scaffold", "BottomNavigationBar", "Container"],\n      "correctAnswer": "AppBar" \n    },\n    {\n      "question": "What does the `key` property in a widget do?",\n      "options": ["It\'s used for styling the widget", "It\'s used for uniquely identifying a widget", "It\'s used to control the widget\'s size", "It\'s used to handle user input"],\n      "correctAnswer": "It\'s used for uniquely identifying a widget"\n    },\n    {\n      "question": "What is the purpose of a `StatefulWidget`?",\n      "options": ["Creates a static UI that doesn\'t change", "Manages the state of a widget and rebuilds when the state changes", "Handles navigation between screens", "Provides access to the build context"],\n      "correctAnswer": "Manages the state of a widget and rebuilds when the state changes"\n    },\n    {\n      "question": "Which widget allows you to create interactive buttons?",\n      "options": ["Text", "Container", "ElevatedButton", "Icon"],\n      "correctAnswer": "ElevatedButton"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
