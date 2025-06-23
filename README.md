# Sorting Algorithm Visualizer with Gemini AI Integration

A beautiful, interactive sorting algorithm visualizer that includes AI-powered explanations using Google's Gemini API. This tool helps students and developers understand how different sorting algorithms work through visual animations and detailed AI-generated explanations.

## Features

- **6 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort
- **Interactive Visualization**: Real-time animation of sorting process with color-coded comparisons and swaps
- **Customizable Parameters**: Adjustable array size (10-100 elements) and animation speed
- **Performance Statistics**: Live tracking of comparisons, swaps, time complexity, and space complexity
- **AI-Powered Explanations**: Detailed algorithm explanations using Google Gemini AI
- **Modern UI**: Beautiful gradient design with smooth animations and responsive layout

## Files Structure

```
sorting-visualizer/
├── index.html              # Main HTML structure
├── styles.css              # CSS styling and animations
├── script.js               # Main JavaScript logic and sorting algorithms
├── gemini-integration.js   # Gemini AI integration module
└── README.md               # This documentation file
```

## Quick Start

1. **Download all files** to a folder on your computer
2. **Get a Gemini API key** (see setup instructions below)
3. **Open `index.html`** in a web browser
4. **Click "Explain Algorithm with AI"** 
5. **Start visualizing!** Generate arrays, select algorithms, and watch them sort

## Gemini AI Integration Setup

### Get Your Free Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key (keep it secure!)


## How to Use the Visualizer

### Basic Controls

- **Choose Algorithm**: Select from 6 different sorting algorithms
- **Array Size**: Adjust the number of elements to sort (10-100)
- **Speed**: Control animation speed (1-10, where 10 is fastest)
- **Generate New Array**: Create a new random array
- **Start Sorting**: Begin the sorting animation
- **Stop**: Halt the current sorting process
- **Reset**: Reset the visualization to initial state

### Understanding the Visualization

- **Blue Bars**: Normal array elements
- **Red Bars**: Elements being compared
- **Yellow/Pink Bars**: Elements being swapped
- **Green Bars**: Sorted elements (final state)

### Statistics Panel

- **Comparisons**: Number of element comparisons made
- **Swaps**: Number of element swaps performed
- **Time Complexity**: Big O notation for time complexity
- **Space Complexity**: Big O notation for space complexity

## Supported Algorithms

1. **Bubble Sort** - O(n²) time, O(1) space
2. **Selection Sort** - O(n²) time, O(1) space
3. **Insertion Sort** - O(n²) time, O(1) space
4. **Merge Sort** - O(n log n) time, O(n) space
5. **Quick Sort** - O(n log n) average time, O(log n) space
6. **Heap Sort** - O(n log n) time, O(1) space

## Technical Implementation

### HTML Structure
- Semantic HTML5 with proper accessibility
- Responsive meta viewport for mobile support
- Clean, organized structure with clear sections

### CSS Features
- Modern CSS3 with flexbox and grid layouts
- Smooth animations and transitions
- Gradient backgrounds and glassmorphism effects
- Responsive design for all screen sizes
- Custom styled form controls and buttons

### JavaScript Architecture
- Object-oriented design with ES6+ features
- Async/await for smooth animations
- Modular code structure for maintainability
- Error handling for robust user experience
- Local storage for API key persistence

## Educational Use

This visualizer is perfect for:
- Computer Science students learning algorithms
- Coding bootcamp participants
- Self-taught programmers
- Teachers demonstrating sorting concepts
- Interview preparation for technical roles


---

**Enjoy exploring sorting algorithms with AI-powered explanations!** 🚀

