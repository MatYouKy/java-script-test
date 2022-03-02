// 1. Please write a function that shows the usage of closures
{
  const showName = () => {
    const name = 'Mateusz';
    
    const getName =() => name;
    
    return getName();
  }
  console.log(showName());
};
  
  // 2. Please write a function that returns a sum of array items
{
  // example input [9, 1, 22, 0, 2]
  const array = [9, 1, 22, 0, 2];
    
  const sumOfArray = (arr) => {
  const reduce = arr.reduce((total, current) => total + current);
    return reduce;
  }
  console.log(sumOfArray(array));
  // example output 34
};
  
    // 3. Please write a recursive function that flattens a list of items
{
    // example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
      const array = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5];
    
      const flatten = (arr) => {
        const flat = arr.reduce((total, item) => {
            if (Array.isArray(item)) {
                total = total.concat(flatten(item));
            } else {
                total = [...total, item];
            }
            return total
        },[])

        return flat;
      }
      
      console.log(flatten(array));
    // example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
};
  
  // 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
{
  // example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
  const array1 = ['b', 3, 4, 76, 'c'];
  const array2 = ['a', 'b', 4, 76, 21, 'e'];
  
  const getCommonValue = (arr1, arr2) => {
    const commonValue = arr1.filter(value => arr2.includes(value));
    return  commonValue;
  };
  console.log(getCommonValue(array1, array2));
  // example output ['b', 4, 76]
};
  
  // 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
{
  // example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
  const array1 = ['b', 3, 4, 76, 'c'];
  const array2 = ['a', 'b', 4, 76, 21, 'e'];
  
  const getDifferentValue = (arr1, arr2) => {
    const differentValue = arr1.filter(value => !arr2.includes(value)).concat(arr2.filter(value => !arr1.includes(value)));
    return differentValue;
  };
  
  console.log(getDifferentValue(array1, array2));
  // example output ['a', 3, 21, 'c', 'e']
};
  
  // 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
{
  // example input [1,2,3], [4,5,6,7]
  const array1 = [1,2,3];
  const array2 = [4,5,6,7];
  
  const tuplesArray = (arr1, arr2) => {
    const newArray= [];
      if (arr1.length > arr2.length) {
        for ( let key in arr2) {
          newArray.push([arr2[key]].concat([arr1[key]]));
        };
        return  newArray;
      } ;
  
    for ( let key in arr1) {
      newArray.push([arr1[key]].concat([arr2[key]]));
    };
    return  newArray;
  };
  console.log(tuplesArray(array1, array2));
  // example output [[1,4], [2,5], [3,6]]
};
  
  // 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
{
  // example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
  const array = ['a', 'b', 'c', 'd'];
  const obj = {a: {b: {c: {d: '23'}}}};
    
    const showValue = (array, obj) => {
    let newArray = obj;
  
    array.forEach(item => {
      newArray = newArray[item];
    });
  
    return newArray;
  }
  
  console.log(showValue(array, obj));
  // example output '23'
};
  
  
  // 8. Please write compare function which compares 2 objects for equality.
{
  // example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
  const object1 = { a: 'b', c: 'd' };
  const object2 = { c: 'd', a: 'b' };
  
  const object3 = { a: 'c', c: 'a' };
  const object4 = { c: 'd', a: 'b', q: 's' };
  
  const compareObject = (obj1, obj2) => {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      
      if ( keys1.length !== keys2.length) return false;
  
      for ( let key of keys1) {
          if ( obj1[key] !== obj2[key]) return false;
      };
      return true;
  };
  
  console.log(compareObject(object1, object2));
  console.log(compareObject(object3, object4));
  // example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
};
  
  // 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
{
  // example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
  const keys = ['color', 'size'];
  const object = { color: 'Blue', id: '22', size: 'xl' };
  
  const getNotUsingObject = (keys, obj) => {
    const objectKeys = Object.keys(obj);
    const newObj = obj;
  
    keys.forEach(item => {
      objectKeys.forEach(key => {
        if (key === item) {
          delete newObj[key];
        };
      });
    });
  
    return newObj;
  };
  
  console.log(getNotUsingObject(keys, object));
  // example output { id: '22' }
};
  