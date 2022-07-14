// javascript program to merge two sorted arrays

    // Merge arr1[0..n1-1] and arr2[0..n2-1]
    // into arr3[0..n1+n2-1]
    function mergeArrays(arr1, arr2 , n1 , n2, arr3) {
        var i = 0, j = 0, k = 0;

        // Traverse both array
        while (i < n1 && j < n2) {
            // Check if current element of first
            // array is smaller than current element
            // of second array. If yes, store first
            // array element and increment first array
            // index. Otherwise do same with second array
            if (arr1[i] < arr2[j])
                arr3[k++] = arr1[i++];
            else
                arr3[k++] = arr2[j++];
        }

        // Store remaining elements of first array
        while (i < n1)
            arr3[k++] = arr1[i++];

        // Store remaining elements of second array
        while (j < n2)
            arr3[k++] = arr2[j++];
    }

    
        var arr1 = [ 1, 3, 5, 7 ];
        var n1 = arr1.length;

        var arr2 = [ 2, 4, 6, 8 ];
        var n2 = arr2.length;

        var arr3 =new Array(n1 + n2);

        mergeArrays(arr1, arr2, n1, n2, arr3);

        //document.write("Array after merging<br/>");
        for (i = 0; i < n1 + n2; i++)
            console.log(arr3[i] + " ");

// This code contributed by Rajput-Ji