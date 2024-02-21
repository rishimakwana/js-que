// Ques:1
function transformStudents(students) {
    const result = {};
    for (const student of students) {
        for (const subject of student.subjects) {
            if (!result[subject]) {
                result[subject] = [];
            }
            result[subject].push(student.name);
        }
    }
    return result;
}


const students = [
    { name: "John", grade: 9, subjects: ["Math", "Science", "History"] },
    { name: "Alice", grade: 10, subjects: ["Math", "Biology", "Physics"] },
    { name: "Bob", grade: 11, subjects: ["Chemistry", "Physics", "Literature"] }
];

console.log(transformStudents(students));

// Ques:2
function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = arr[1];
    if (secondMax > max) {
        [max, secondMax] = [secondMax, max];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}


const unSortedArray = [2, 1, 7, 3, 8, 9, 4, 3];
console.log(findSecondLargest(unSortedArray));
