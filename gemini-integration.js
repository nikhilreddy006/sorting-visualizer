class GeminiAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
    }

    async explainSortingAlgorithm(algorithmName) {
        if (!this.apiKey) {
            throw new Error('Gemini API key is required. Please set your API key in the configuration.');
        }

        const prompt = this.createPrompt(algorithmName);
        
        try {
            const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 2048,
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Gemini API Error: ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid response format from Gemini API');
            }

            const explanation = data.candidates[0].content.parts[0].text;
            return this.formatExplanation(explanation);

        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    }

    createPrompt(algorithmName) {
        const algorithmNames = {
            bubble: 'Bubble Sort',
            selection: 'Selection Sort',
            insertion: 'Insertion Sort',
            merge: 'Merge Sort',
            quick: 'Quick Sort',
            heap: 'Heap Sort'
        };

        const fullName = algorithmNames[algorithmName] || algorithmName;

        return `Explain the ${fullName} algorithm in detail for a sorting visualizer application. Please provide:

1. **How it works**: A clear, concise explanation of the algorithm's core concept
2. **Step-by-step process**: Detailed steps of how the algorithm operates
3. **Complexity Analysis**: Time and space complexity with explanations
4. **Characteristics**: Key properties like stability, in-place sorting, etc.
5. **Use cases**: When this algorithm is most appropriate
6. **Advantages and Disadvantages**: Pros and cons of using this algorithm

Format the response in HTML with proper headings (h4), paragraphs (p), and lists (ul/li) for easy display in a web interface. Make it educational and suitable for students learning about sorting algorithms.

Focus on making the explanation clear, engaging, and technically accurate. Include practical insights about when and why someone would choose this algorithm over others.`;
    }

    formatExplanation(explanation) {
        let formatted = explanation;

        formatted = formatted.replace(/#### (.*)/g, '<h4>$1</h4>');
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Ensure paragraphs are wrapped
        const lines = formatted.split('\n');
        let result = '';
        let inList = false;

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;

            if (line.startsWith('- ') || line.startsWith('* ')) {
                if (!inList) {
                    result += '<ul>';
                    inList = true;
                }
                result += `<li>${line.substring(2)}</li>`;
            } else {
                if (inList) {
                    result += '</ul>';
                    inList = false;
                }
                
                if (line.startsWith('<h4>') || line.includes('<h4>')) {
                    result += line;
                } else if (line.startsWith('<')) {
                    result += line;
                } else {
                    result += `<p>${line}</p>`;
                }
            }
        }

        if (inList) {
            result += '</ul>';
        }

        return result;
    }
}

const GeminiConfig = {
    apiKey: 'AIzaSyCgTRDhOh-cpsDj5oLL3VZXqxDhL02MAzc', 
    
    setApiKey(key) {
        this.apiKey = key;
        localStorage.setItem('gemini_api_key', key);
    },
    
    getApiKey() {
        if (!this.apiKey) {
            this.apiKey = localStorage.getItem('gemini_api_key') || '';
        }
        return this.apiKey;
    },
    
    clearApiKey() {
        this.apiKey = '';
        localStorage.removeItem('gemini_api_key');
    }
};

window.GeminiAI = GeminiAI;
window.GeminiConfig = GeminiConfig;

