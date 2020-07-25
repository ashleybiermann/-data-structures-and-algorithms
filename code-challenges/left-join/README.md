# Left Join

##  Implement a simplified LEFT JOIN for 2 Hashmaps.

### Challenge:
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- *NOTE* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. 
- Avoid utilizing any of the library methods available to your language.

![left join example I/O](./leftjoinexample.jpg)

### Approach & Efficiency
- TIME complexity: O(1), because we only have to check through the left table values and directly look for it in the right table
- SPACE complexity: O(n2), becauses it adds both an array and an object when a key:value is added to the table 

### Solution
![leftjoin](./leftjoin.jpg)