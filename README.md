# Sorting Algorithm Visualizer with Gemini AI Integration

A beautiful, interactive sorting algorithm visualizer that includes AI-powered explanations using Google's Gemini API. This tool helps students and developers understand how different sorting algorithms work through visual animations and detailed AI-generated explanations.

## Features

- **6 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort
- **Interactive Visualization**: Real-time animation of sorting process with color-coded comparisons and swaps
- **Customizable Parameters**: Adjustable array size (10-100 elements) and animation speed
- **Performance Statistics**: Live tracking of comparisons, swaps, time complexity, and space complexity
- **AI-Powered Explanations**: Detailed algorithm explanations using Google Gemini AI
- **Modern UI**: Beautiful gradient design with smooth animations and responsive layout
- **Mobile-Friendly**: Fully responsive design that works on all devices

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
4. **Click "Explain Algorithm with AI"** and enter your API key when prompted
5. **Start visualizing!** Generate arrays, select algorithms, and watch them sort

## Gemini AI Integration Setup

### Step 1: Get Your Free Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key (keep it secure!)

### Step 2: Configure the API Key in the Application

1. Open the sorting visualizer in your browser
2. Click the "🤖 Explain Algorithm with AI" button
3. When prompted, paste your API key
4. The key will be saved locally in your browser for future use

### Step 3: Test the AI Integration

1. Select any sorting algorithm from the dropdown
2. Click "🤖 Explain Algorithm with AI"
3. Wait for the AI to generate a detailed explanation
4. The explanation will appear in a modal with comprehensive algorithm details

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

### Gemini AI Integration
- RESTful API calls to Google's Gemini API
- Proper error handling and user feedback
- Secure API key storage in browser localStorage
- Formatted HTML responses for rich explanations
- Fallback content when API is unavailable

## Deployment Options

### Option 1: Local File System
- Simply open `index.html` in any modern web browser
- No server required for basic functionality
- AI features require internet connection

### Option 2: Web Server
- Upload files to any web hosting service
- Serve via Apache, Nginx, or any static file server
- Can be deployed to GitHub Pages, Netlify, Vercel, etc.

### Option 3: Development Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## Browser Compatibility

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Full responsive support

## API Usage and Limits

### Gemini API Free Tier
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per minute
- Perfect for educational use

### Rate Limiting
The application includes built-in error handling for rate limits and will display appropriate messages if limits are exceeded.

## Troubleshooting

### Common Issues

1. **AI Explanation Not Working**
   - Check your internet connection
   - Verify your API key is correct
   - Ensure you haven't exceeded rate limits

2. **Visualization Not Smooth**
   - Reduce array size for better performance
   - Increase animation speed
   - Close other browser tabs to free up resources

3. **Mobile Display Issues**
   - Rotate device to landscape for better view
   - Zoom out if elements appear too large
   - Use smaller array sizes on mobile devices

### Error Messages

- **"API key is required"**: Click the AI button and enter your Gemini API key
- **"Rate limit exceeded"**: Wait a few minutes before making more requests
- **"Network error"**: Check your internet connection

## Educational Use

This visualizer is perfect for:
- Computer Science students learning algorithms
- Coding bootcamp participants
- Self-taught programmers
- Teachers demonstrating sorting concepts
- Interview preparation for technical roles

## Contributing

Feel free to enhance this project by:
- Adding more sorting algorithms
- Improving the UI/UX design
- Adding sound effects
- Creating additional visualizations
- Optimizing performance

## License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

## Credits

- **Sorting Algorithms**: Classic computer science algorithms
- **AI Integration**: Google Gemini API
- **Design**: Modern web design principles
- **Icons**: Unicode emoji characters

---

**Enjoy exploring sorting algorithms with AI-powered explanations!** 🚀

