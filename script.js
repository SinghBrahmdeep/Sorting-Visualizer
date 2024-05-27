let n = 10;
let arr = [];
let container = document.querySelector(".array");
let options;
const content = document.querySelector(".content");
const complexity = document.querySelector(".complexity");
let f = true;
let speed = 1;

function getelements() {
    arr = [];
    for (let i = 0; i < n; i++) {
        let a = Math.random();
        arr.push(Math.floor(100 * a));
    }
}

function fillarray() {
    options = Array.from(document.querySelector(".array").getElementsByTagName("div"));
    // console.log("options:" , (options));
}

function addelements() {

    container.innerHTML = ""; // Clear the container

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.style.height = arr[i] + "%";
        div.style.width = "50%";
        div.style.backgroundColor = "black";

        container.appendChild(div); // Append to container
    }
    document.querySelector(".array").style.gap = "5px";
}

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector("#arrayelements");
    const s = document.querySelector("#selectspeed");

    getelements();
    addelements();
    fillarray();

    selectElement.addEventListener("change", () => {
        n = parseInt(selectElement.value);
        // console.log(n);
        getelements();
        addelements();
        fillarray();
        content.innerHTML = "";
        complexity.innerHTML = "";
    });

    s.addEventListener("change", () => {
        speed = parseFloat(s.value, 10);
        console.log(speed);
    })

    // getelements(); // Initial call to populate the array
    // addelements(); // Initial call to display the elements
});

// bubble sort
async function bubbleSort(options) {
    for (let i = 0; i < n; i++) {
        let swap = false;
        for (let j = 0; j < n - 1 - i; j++) {


            console.log(options[j]);

            const k = options[j];
            const l = options[j + 1];

            k.classList.add('bar-being-compared');
            l.classList.add('bar-being-compared');

            // Compare the elements
            let h1 = k.style.height;
            let h2 = l.style.height;

            console.log(h1);
            console.log(h2);

            await delay(100);
            if (parseInt(h1) > parseInt(h2)) {
                swap = true;
                // Swap the elements visually by changing their heights
                k.style.height = h2;
                l.style.height = h1;
            }
            else {
                k.classList.add('red');
                l.classList.add('red');
            }

            await delay(100);
            k.classList.remove('bar-being-compared');
            l.classList.remove('bar-being-compared');
            k.classList.remove('red');
            l.classList.remove('red');
        }
        if (swap == false) {
            break;
        }
    }
}
// Sort numbers in ascend ing order
document.querySelector("button.sort").addEventListener("click", () => {

    fillarray();
    // console.log(arr); 
    bubbleSort(options);
    //console.log(arr);

    content.innerHTML =
        `<u><h2>BUBBLE SORT</h2></u> 
    <br> 
    Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. 
    <br></br>
    In Bubble Sort algorithm,
    <ul>
    <li> traverse from left and compare adjacent elements and the higher one is placed at right side.</li>
    <li> In this way, the largest element is moved to the rightmost end at first. </li>
    <li> This process is then continued to find the second largest and place it and so on until the data is sorted.</li></ul>`
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n)</td>
    </tr>
    <tr>
      <td>Average: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Worst: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Space Complexity</td>
      <td>Worst: O(1)</td>
    </tr>
  </table>`;
});


async function SelectionSort(options) {

    for (let i = 0; i < n - 1; i++) {

        
        let minIndex = i; // Track the index of the minimum element
        let min = options[i]; // Initial minimum element

        // Find the minimum element in the remaining unsorted part
        for (let j = i + 1; j < n; j++) {
            let a = options[j];
            if (parseInt(a.style.height) < parseInt(min.style.height)) {
                min = a;
                minIndex = j; // Update the index of the minimum element
            }
        }

        await delay(100);
        min.classList.add('bar-being-compared');
        // Swap the found minimum element with the first element of the unsorted part

        await delay(100);
        min.classList.remove('bar-being-compared');


        await delay(100);
        if (minIndex !== i) {
            let h1 = options[i].style.height;
            let h2 = min.style.height;
            options[i].classList.add('red');
            min.classList.add('red');

            await delay(100);
            options[minIndex].style.height = h1;
            options[i].style.height = h2;
        }

        await delay(100);
        options[i].classList.remove('red');
        min.classList.remove('red');


    }
}

document.querySelector("button.selectionsort").addEventListener("click", () => {

    fillarray();
    SelectionSort(options);
    //alert("hello");
    content.innerHTML =
        `<u><h2>SELECTION SORT</h2></u> 
    <br> 
    Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
    <br></br>
    In Selction Sort algorithm,<br>
    The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted.`
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Average: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Worst: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Space Complexity</td>
      <td>Worst: O(1)</td>
    </tr>
  </table>`;
})


function delay(ms) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms/speed);
    })

    return p;
}


async function merge(s, e, options, delayTime) {
    let mid = Math.floor((s + e) / 2);
    let m1 = s;
    let m2 = mid + 1;

    while (m1 <= mid && m2 <= e) {
        options[m1].classList.add('bar-being-compared');
        options[m2].classList.add('bar-being-compared');
        let a = parseInt(options[m1].style.height);
        let b = parseInt(options[m2].style.height);

        // Add delay for visualization
        await delay(delayTime);
        options[m1].classList.remove('bar-being-compared');
        options[m2].classList.remove('bar-being-compared');

        if (a <= b) {
            m1++;
        } else {
            options[m2].classList.add('red');
            options[m1].classList.add('red');

            // `options[m2]` is smaller, need to shift elements between m1 and m2
            let temp = options[m2].style.height;
            for (let k = m2; k > m1; k--) {
                options[k].style.height = options[k - 1].style.height;
            }
            options[m1].style.height = temp;

            // Add delay for visualization of swap
            await delay(delayTime);

            options[m2].classList.remove('red');
            options[m1].classList.remove('red');

            // Update pointers
            m1++;
            mid++;
            m2++;
        }
    }
}

async function mergeS(s, e, options, delayTime) {
    if (e > s) {
        let mid = Math.floor((s + e) / 2);
        await mergeS(s, mid, options, delayTime);
        await mergeS(mid + 1, e, options, delayTime);
        await merge(s, e, options, delayTime);
    }
}

async function mergeSort(options, delayTime = 700) {
    let n = options.length;
    await mergeS(0, n - 1, options, delayTime);
}

document.querySelector("button.mergesort").addEventListener("click", () => {

    fillarray();
    mergeSort(options);

    content.innerHTML =
        `<u><h2>MERGE SORT</h2></u> 
    <br> 
    Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array. 
    <br></br>
    Here’s a step-by-step explanation of how merge sort works:
    <ol>
    <li> Divide: Divide the list or array recursively into two halves until it can no more be divided.</li>
    <li> Conquer: Each subarray is sorted individually using the merge sort algorithm.</li>
    <li> Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged. </li></ol>`
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n logn)</td>
    </tr>
    <tr>
      <td>Average: O(n logn)</td>
    </tr>
    <tr>
      <td>Worst: O(n logn)</td>
    </tr>
    <tr>
      <td rowspan = "3">Space Complexity</td>
      <td>Best: O(n)</td>
    </tr>
    <tr>
      <td>Average: O(n)</td>
    </tr>
    <tr>
      <td>Worst: O(n)</td>
    </tr>
  </table>`;
})


async function insertionSort(options, delayTime) {
    let i, key, j;
    const n = options.length; // Define n as the length of the options array

    for (i = 1; i < n; i++) {
        key = parseInt(options[i].style.height, 10); // Parse the height as an integer
        j = i - 1;
        options[i].classList.add('bar-being-compared');
        // Move elements of options[0..i-1],
        // that are greater than key,
        // to one position ahead of their
        // current position
        await delay(delayTime/speed);
        options[i].classList.remove('bar-being-compared');

        while (j >= 0 && parseInt(options[j].style.height, 10) > key) {

            options[j].classList.add('red');
            options[j + 1].classList.add('red');

            options[j + 1].style.height = options[j].style.height;

            await delay(delayTime);
            options[j].classList.remove('red');
            options[j + 1].classList.remove('red');

            j = j - 1;
        }
        options[j + 1].classList.add("red");
        options[j + 1].style.height = key + '%'; // Append 'px' to the key

        await delay(delayTime/speed);
        options[j + 1].classList.remove('red');
    }
}

document.querySelector("button.insertionsort").addEventListener("click", () => {
    fillarray();
    insertionSort(options, delayTime = 100);

    content.innerHTML =
        `<u><h2>INSERTION SORT</h2></u> 
    <br> 
    Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output.
    <br></br>
    In Insertion Sort algorithm,
    <ul>
    <li> We have to start with second element of the array as first element in the array is assumed to be sorted.</li>
    <li> Compare second element with the first element and check if the second element is smaller then swap them.</li>
    <li> Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.</li>
    <li>Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.</li>
    <li>Repeat until the entire array is sorted.</li>
    </ul>`
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n)</td>
    </tr>
    <tr>
      <td>Average: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td>Worst: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td rowspan = "3">Space Complexity</td>
      <td>Best: O(1)</td>
    </tr>
    <tr><td>Average: O(1)</td></tr>
    <tr><td>Worst: O(1)</td></tr>
  </table>`;
})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms/speed));
}

async function partition(options, low, high, delayTime) {
    // Choose the pivot
    let pivot = parseInt(options[high].style.height, 10);

    options[high].classList.add('pivot');

    let i = low - 1;
    for (let j = low; j < high; j++) { // Loop should go up to high - 1
        // If current element is smaller than the pivot
        options[j].classList.add('bar-being-compared');

        if (parseInt(options[j].style.height, 10) < pivot) {
            // Increment index of smaller element

            i++;
            options[i].classList.add('red');
            options[j].classList.add('red');

            await sleep(delayTime);
            let h1 = options[i].style.height;
            let h2 = options[j].style.height;
            options[i].style.height = h2;
            options[j].style.height = h1;

            // Optional delay for visualization
            await sleep(delayTime);
            options[i].classList.remove('red');
            options[j].classList.remove('red');

        }
        await sleep(delayTime);
        options[j].classList.remove('bar-being-compared');

    }

    options[i + 1].classList.add('pivot');

    await sleep(delayTime);
    let h1 = options[i + 1].style.height;
    let h2 = options[high].style.height;
    options[i + 1].style.height = h2;
    options[high].style.height = h1;

    await sleep(delayTime);
    options[i + 1].classList.remove('pivot');
    options[high].classList.remove('pivot');

    return i + 1;
}

// The Quicksort function implementation
async function quickSort(options, low, high, delayTime) {
    if (low < high) {
        // pi is the partition return index of pivot
        let pi = await partition(options, low, high, delayTime);

        //   options[pi].classList.add('bar-being-compared');
        //   await sleep(delayTime);
        //   options[pi].classList.remove('bar-being-compared');

        await quickSort(options, low, pi - 1, delayTime);
        await quickSort(options, pi + 1, high, delayTime);
    }
}

document.querySelector("button.quicksort").addEventListener("click", () => {

    fillarray();
    quickSort(options, 0, n - 1, delayTime = 500);

    content.innerHTML =
        `<u><h2>QUICK SORT</h2></u> 
    <br> 
    QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
    <br></br>
    There are many different choices for picking pivots. 
    <ul>
    <li>Always pick the first element as a pivot.</li>
    <li>Always pick the last element as a pivot.</li>
    <li>Pick a random element as a pivot.</li>
    <li>Pick the middle as the pivot.</li>
    </ul><br>
    <u>Partition Algorithm</u><br>
    The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element.
    <ul>`
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n logn)</td>
    </tr>
    <tr>
      <td>Average: O(n logn)</td>
    </tr>
    <tr>
      <td>Worst: O(n<sup>2</sup>)</td>
    </tr>
    <tr>
      <td rowspan = "3">Space Complexity</td>
      <td>Best: O(1)</td>
    </tr>
    <tr><td>Average: O(1)</td></tr>
    <tr><td>Worst: O(1)</td></tr>
  </table>`;
})

async function heapify(options, n, i, delayTime) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // Add comparison class
    options[largest].classList.add("bar-being-compared");
    if (l < n) options[l].classList.add("bar-being-compared");
    if (r < n) options[r].classList.add("bar-being-compared");


    await sleep(delayTime);


    options[largest].classList.remove("bar-being-compared");
    if (l < n) options[l].classList.remove("bar-being-compared");
    if (r < n) options[r].classList.remove("bar-being-compared");


    if (l < n && parseInt(options[l].style.height, 10) > parseInt(options[largest].style.height, 10)) {
        largest = l;
    }
    if (r < n && parseInt(options[r].style.height, 10) > parseInt(options[largest].style.height, 10)) {
        largest = r;
    }


    if (largest != i) {

        options[i].classList.add("heap");
        options[largest].classList.add("heap");

        const first = options[i].style.height;
        const last = options[largest].style.height;

        await sleep(delayTime);
        options[i].style.height = last;
        options[largest].style.height = first;

        await sleep(delayTime);
        options[i].classList.remove("heap");
        options[largest].classList.remove("heap");


        await heapify(options, n, largest, delayTime);
    }
}

// Main function to do heap sort
async function heapSort(options, n, delayTime) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(options, n, i, delayTime);
    }

    for (let i = n - 1; i > 0; i--) {

        options[0].classList.add('red');
        options[i].classList.add('red');

        let first = options[0].style.height;
        let last = options[i].style.height;

        await sleep(delayTime);
        options[0].style.height = last;
        options[i].style.height = first;

        // Optional delay for visualization
        await sleep(delayTime);
        options[0].classList.remove('red');
        options[i].classList.remove('red');

        await heapify(options, i, 0, delayTime);
    }
}

document.querySelector("button.heapsort").addEventListener("click", () => {

    fillarray();
    heapSort(options, n, delayTime = 1000);

    content.innerHTML =
        `<u><h2>HEAP SORT</h2></u> 
    <br> 
    Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.
    <br></br>
    
    <u>Heap Sort Algorithm</u><br>
    
    <ul>
    <li>Build a heap from the given input array.</li>
    <li>Repeat the following steps until the heap contains only one element:
    <ul>
    <li>Swap the root element of the heap (which is the largest element) with the last element of the heap.</li>
    <li>Remove the last element of the heap (which is now in the correct position).</li>
    <li>Heapify the remaining elements of the heap.</li>
    </ul>
    </li>
    <li>The sorted array is obtained by reversing the order of the elements in the input array.</li>
    </ul>
    `
        ;

    complexity.innerHTML =
        `<u><h2> Time and space complexity </h2></u>
    <br>
    <table class = "table" border="1px solid black">
    <tr>
    <th>Complexity Type</th>
    <th>Complexity</th>
    </tr>
    <tr>
      <td rowspan="3">Time Complexity</td>
      <td>Best:  O(n log(n))</td>
    </tr>
    <tr>
      <td>Average: O(n log(n))</td>
    </tr>
    <tr>
      <td>Worst: O(n log(n))</td>
    </tr>
    <tr>
      <td rowspan = "3">Space Complexity</td>
      <td>Best: O(log(n))</td>
    </tr>
    <tr><td>Average: O(log(n))</td></tr>
    <tr><td>Worst: O(log(n))</td></tr>
  </table>`;
})


