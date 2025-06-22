class SortingVisualizer {
    constructor() {
        this.array = [];
        this.arraySize = 50;
        this.speed = 5;
        this.isRunning = false;
        this.comparisons = 0;
        this.swaps = 0;
        this.currentAlgorithm = 'bubble';
        
        this.initializeElements();
        this.setupEventListeners();
        this.generateArray();
        this.updateComplexity();
    }

    initializeElements() {
        this.arrayContainer = document.getElementById('array-container');
        this.algorithmSelect = document.getElementById('algorithm-select');
        this.arraySizeSlider = document.getElementById('array-size');
        this.speedSlider = document.getElementById('speed');
        this.sizeValue = document.getElementById('size-value');
        this.speedValue = document.getElementById('speed-value');
        this.generateBtn = document.getElementById('generate-array');
        this.startBtn = document.getElementById('start-sort');
        this.stopBtn = document.getElementById('stop-sort');
        this.resetBtn = document.getElementById('reset');
        this.summarizeBtn = document.getElementById('summarize-btn');
        this.comparisonsSpan = document.getElementById('comparisons');
        this.swapsSpan = document.getElementById('swaps');
        this.timeComplexitySpan = document.getElementById('time-complexity');
        this.spaceComplexitySpan = document.getElementById('space-complexity');
        this.aiExplanation = document.getElementById('ai-explanation');
        this.explanationContent = document.getElementById('explanation-content');
        this.closeExplanationBtn = document.getElementById('close-explanation');
        this.loading = document.getElementById('loading');
    }

    setupEventListeners() {
        this.algorithmSelect.addEventListener('change', () => {
            this.currentAlgorithm = this.algorithmSelect.value;
            this.updateComplexity();
        });

        this.arraySizeSlider.addEventListener('input', () => {
            this.arraySize = parseInt(this.arraySizeSlider.value);
            this.sizeValue.textContent = this.arraySize;
            if (!this.isRunning) {
                this.generateArray();
            }
        });

        this.speedSlider.addEventListener('input', () => {
            this.speed = parseInt(this.speedSlider.value);
            this.speedValue.textContent = this.speed;
        });

        this.generateBtn.addEventListener('click', () => {
            if (!this.isRunning) {
                this.generateArray();
            }
        });

        this.startBtn.addEventListener('click', () => {
            if (!this.isRunning) {
                this.startSorting();
            }
        });

        this.stopBtn.addEventListener('click', () => {
            this.stopSorting();
        });

        this.resetBtn.addEventListener('click', () => {
            this.resetVisualization();
        });

        this.summarizeBtn.addEventListener('click', () => {
            this.explainAlgorithm();
        });

        this.closeExplanationBtn.addEventListener('click', () => {
            this.aiExplanation.classList.add('hidden');
        });

        // Close explanation when clicking outside
        this.aiExplanation.addEventListener('click', (e) => {
            if (e.target === this.aiExplanation) {
                this.aiExplanation.classList.add('hidden');
            }
        });
    }

    generateArray() {
        this.array = [];
        this.arrayContainer.innerHTML = '';
        this.resetStats();

        for (let i = 0; i < this.arraySize; i++) {
            const value = Math.floor(Math.random() * 300) + 10;
            this.array.push(value);
        }

        this.renderArray();
    }

    renderArray() {
        this.arrayContainer.innerHTML = '';
        const containerWidth = this.arrayContainer.clientWidth;
        const barWidth = Math.max(8, (containerWidth - (this.arraySize * 2)) / this.arraySize);

        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${value}px`;
            bar.style.width = `${barWidth}px`;
            bar.setAttribute('data-index', index);
            this.arrayContainer.appendChild(bar);
        });
    }

    async startSorting() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.startBtn.disabled = true;
        this.generateBtn.disabled = true;
        this.algorithmSelect.disabled = true;
        this.resetStats();

        try {
            switch (this.currentAlgorithm) {
                case 'bubble':
                    await this.bubbleSort();
                    break;
                case 'selection':
                    await this.selectionSort();
                    break;
                case 'insertion':
                    await this.insertionSort();
                    break;
                case 'merge':
                    await this.mergeSort(0, this.array.length - 1);
                    break;
                case 'quick':
                    await this.quickSort(0, this.array.length - 1);
                    break;
                case 'heap':
                    await this.heapSort();
                    break;
            }
            
            await this.markAsSorted();
        } catch (error) {
            console.error('Sorting interrupted:', error);
        }

        this.stopSorting();
    }

    stopSorting() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.generateBtn.disabled = false;
        this.algorithmSelect.disabled = false;
    }

    resetVisualization() {
        this.stopSorting();
        this.generateArray();
    }

    resetStats() {
        this.comparisons = 0;
        this.swaps = 0;
        this.updateStats();
    }

    updateStats() {
        this.comparisonsSpan.textContent = this.comparisons;
        this.swapsSpan.textContent = this.swaps;
    }

    updateComplexity() {
        const complexities = {
            bubble: { time: 'O(n²)', space: 'O(1)' },
            selection: { time: 'O(n²)', space: 'O(1)' },
            insertion: { time: 'O(n²)', space: 'O(1)' },
            merge: { time: 'O(n log n)', space: 'O(n)' },
            quick: { time: 'O(n log n)', space: 'O(log n)' },
            heap: { time: 'O(n log n)', space: 'O(1)' }
        };

        const complexity = complexities[this.currentAlgorithm];
        this.timeComplexitySpan.textContent = complexity.time;
        this.spaceComplexitySpan.textContent = complexity.space;
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async delay() {
        // Adjust delay calculation for smoother and more visible animations
        // Minimum delay of 50ms at max speed (10), and up to 500ms at min speed (1)
        const delayTime = 500 - (this.speed * 45); // Range from 50ms (speed 10) to 455ms (speed 1)
        await this.sleep(delayTime);
    }

    async highlightBars(indices, className = 'comparing') {
        indices.forEach(index => {
            const bar = this.arrayContainer.children[index];
            if (bar) {
                bar.classList.add(className);
            }
        });
        await this.delay();
    }

    async unhighlightBars(indices, className = 'comparing') {
        indices.forEach(index => {
            const bar = this.arrayContainer.children[index];
            if (bar) {
                bar.classList.remove(className);
            }
        });
    }

    async swap(i, j) {
        if (!this.isRunning) throw new Error('Sorting stopped');
        
        await this.highlightBars([i, j], 'swapping');
        
        // Swap in array
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        
        // Swap visual elements
        const bar1 = this.arrayContainer.children[i];
        const bar2 = this.arrayContainer.children[j];
        
        if (bar1 && bar2) {
            const temp = bar1.style.height;
            bar1.style.height = bar2.style.height;
            bar2.style.height = temp;
        }
        
        this.swaps++;
        this.updateStats();
        
        await this.delay();
        await this.unhighlightBars([i, j], 'swapping');
    }

    async compare(i, j) {
        if (!this.isRunning) throw new Error('Sorting stopped');
        
        this.comparisons++;
        this.updateStats();
        await this.highlightBars([i, j]);
        
        const result = this.array[i] > this.array[j];
        await this.unhighlightBars([i, j]);
        return result;
    }

    // Sorting Algorithms

    async bubbleSort() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (await this.compare(j, j + 1)) {
                    await this.swap(j, j + 1);
                }
            }
        }
    }

    async selectionSort() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (await this.compare(minIdx, j)) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                await this.swap(i, minIdx);
            }
        }
    }

    async insertionSort() {
        const n = this.array.length;
        for (let i = 1; i < n; i++) {
            let j = i;
            while (j > 0 && await this.compare(j - 1, j)) {
                await this.swap(j - 1, j);
                j--;
            }
        }
    }

    async mergeSort(left, right) {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        await this.mergeSort(left, mid);
        await this.mergeSort(mid + 1, right);
        await this.merge(left, mid, right);
    }

    async merge(left, mid, right) {
        const leftArr = this.array.slice(left, mid + 1);
        const rightArr = this.array.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            if (!this.isRunning) throw new Error('Sorting stopped');
            
            this.comparisons++;
            this.updateStats();
            
            if (leftArr[i] <= rightArr[j]) {
                this.array[k] = leftArr[i];
                i++;
            } else {
                this.array[k] = rightArr[j];
                j++;
            }
            
            // Update visual
            const bar = this.arrayContainer.children[k];
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
                bar.classList.add('swapping');
                await this.delay();
                bar.classList.remove('swapping');
            }
            
            this.swaps++;
            this.updateStats();
            k++;
        }
        
        while (i < leftArr.length) {
            this.array[k] = leftArr[i];
            const bar = this.arrayContainer.children[k];
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
            }
            i++;
            k++;
        }
        
        while (j < rightArr.length) {
            this.array[k] = rightArr[j];
            const bar = this.arrayContainer.children[k];
            if (bar) {
                bar.style.height = `${this.array[k]}px`;
            }
            j++;
            k++;
        }
    }

    async quickSort(low, high) {
        if (low < high) {
            const pi = await this.partition(low, high);
            await this.quickSort(low, pi - 1);
            await this.quickSort(pi + 1, high);
        }
    }

    async partition(low, high) {
        const pivot = this.array[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (await this.compare(high, j)) {
                i++;
                if (i !== j) {
                    await this.swap(i, j);
                }
            }
        }
        
        if (i + 1 !== high) {
            await this.swap(i + 1, high);
        }
        
        return i + 1;
    }

    async heapSort() {
        const n = this.array.length;
        
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await this.heapify(n, i);
        }
        
        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            await this.swap(0, i);
            await this.heapify(i, 0);
        }
    }

    async heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        if (left < n && await this.compare(largest, left)) {
            largest = left;
        }
        
        if (right < n && await this.compare(largest, right)) {
            largest = right;
        }
        
        if (largest !== i) {
            await this.swap(i, largest);
            await this.heapify(n, largest);
        }
    }

    async markAsSorted() {
        for (let i = 0; i < this.array.length; i++) {
            const bar = this.arrayContainer.children[i];
            if (bar) {
                bar.classList.add('sorted');
                await this.sleep(20);
            }
        }
    }

    async explainAlgorithm() {
        this.loading.classList.remove('hidden');
        
        try {
            const apiKey = GeminiConfig.getApiKey(); // Get the hardcoded API key
            const gemini = new GeminiAI(apiKey);
            const explanation = await gemini.explainSortingAlgorithm(this.currentAlgorithm);
            this.explanationContent.innerHTML = explanation;
            this.aiExplanation.classList.remove('hidden');
        } catch (error) {
            console.error('Error getting AI explanation:', error);
            this.explanationContent.innerHTML = `
                <h4>Error Getting AI Explanation</h4>
                <p>Sorry, there was an error getting the AI explanation. Please check your network connection or try again later.</p>
                <p><strong>Error details:</strong> ${error.message}</p>
            `;
            this.aiExplanation.classList.remove('hidden');
        } finally {
            this.loading.classList.add('hidden');
        }
    }
}

// Initialize the visualizer when the page loads
let sortingVisualizer;
document.addEventListener('DOMContentLoaded', () => {
    sortingVisualizer = new SortingVisualizer();
});

