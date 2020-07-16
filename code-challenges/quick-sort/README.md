# Quick Sort

##  Quick Sort

### Challenge: Review the pseudocode, trace the algorithm by stepping through the process with the provided sample array. Document your explanation that shows the step-by-step output after each iteration through some sort of visual. Code a working, tested implementation of Quick Sort.

    ALGORITHM QuickSort(arr, left, right)
        if left < right
            // Partition the array by setting the position of the pivot value 
            DEFINE position <-- Partition(arr, left, right)
            // Sort the left
            QuickSort(arr, left, position - 1)
            // Sort the right
            QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)
        // set a pivot value as a point of reference
        DEFINE pivot <-- arr[right]
        // create a variable to track the largest index of numbers lower than the defined pivot
        DEFINE low <-- left - 1
        for i <- left to right do
            if arr[i] <= pivot
                low++
                Swap(arr, i, low)

        // place the value of the pivot location in the middle.
        // all numbers smaller than the pivot are on the left, larger on the right. 
        Swap(arr, right, low + 1)
        // return the pivot index point
        return low + 1

    ALGORITHM Swap(arr, i, low)
        DEFINE temp;
        temp <-- arr[i]
        arr[i] <-- arr[low]
        arr[low] <-- temp

### Approach & Efficiency
- TIME complexity: O(n2)
- SPACE complexity: O(1)  Quick sort is performed on the same array and no new arrays are created in the process.

### Solution
![Whiteboard for...]()

### Resources
- [Code guru](https://www.guru99.com/quicksort-in-javascript.html)
- [medium.com - Blog](https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39)