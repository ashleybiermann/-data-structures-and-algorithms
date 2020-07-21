# Hash Table

##  Hash Table Implementation

### Challenge: Implement a Hashtable with the following methods:
- `**add()**` takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- `**get()**` takes in the key and returns the value from the table.
- `**contains()**` takes in the key and returns a boolean, indicating if the key exists in the table already.
- `**hash()**` takes in an arbitrary key and returns an index in the collection.

### Algorithm

    STRUCTURE HashMap

      PROPERTY Size = 1024
      PROPERTY Buckets = New ARRAY(1024)

      ALGORITHM Hash (STRING KEY)

        FIND Value for CHAR in KEY
          TOTAL += Value
        TOTAL = TOTAL * 599
        RETURN TOTAL % THIS.Size
      
      ALGORITHM Add (STRING, key, any value)

        INT HASH = THIS.hash(key)
        IF THIS.Buckets[HASH] is  NULL
          THIS.Buckets[HASH] = NEW LinkedList();

        OBJECT = [key, value]
        SET THIS.Buckets[HASH].add(OBJECT)

      ALGORITHM Get(STRING KEY)

        INDEX = THIS.Buckets[THIS.hash(KEY)]
        IF (!THIS.Bucket[INDEX])  
          RETURN NULL

        Value = Bucket.FIND(KEY)
        RETURN Value

      ALGORITH Contains(KEY)

        RETURN BOOLEAN (THIS.Buckets[THIS.hash(KEY)]);

      

### Efficiency
- TIME complexity: O(1), because you access a hash table directly at the hash index in which you are searching
- SPACE complexity: O(log2n)

### Solution
![Whiteboard]()

### Resources
- Used my previously built Linked List to reference the `includes()` function, modifiying it to create the `get()` function
- [medium blog](https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b) - Referenced the `get()` function to better understand how to figure out how to access the index of the particular bucket again.