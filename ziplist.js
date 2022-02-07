function zipList(list1, list2) {
  const list3 = [];
  let i = 0;
  let j = 0;
  while (i < list1.length) {
    list3[j] = list1[i];
    j++;
    list3[j] = list2[i];
    j++;
    i++;
  }
  return list3;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const num = [1, 2, 3, 4];
const letter = ['a', 'b', 'c', 'd'];
console.log(zipList(num, letter));
console.log(zipListTheSimpleWay(num, letter));
