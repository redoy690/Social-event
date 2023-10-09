<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: A</b></summary>

<p>

#### Answer: A

<i>Explanation: Java Script give empty object, In this case at first we take (greetign) a empty object. then console it. The output we get empty object. Because the object do not have any element. If any obejct do not have any element the obejct called by empty obejct. So the out put is empty object </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C</b></summary>

<p>

#### Answer: C

<i>Explanation: The output is 12. The function have 2 paremater. The first paremater type is number. But the second paremater type is String.  Javascript give output Side by side. If 2 paremater are number javascript plus those parameter and give total sum output. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer:A</b></summary>

<p>

#### Answer: A

<i>Explanation: In this Case the out put is number A. Here Food array have 4 element, then info object select Food array first element, then infor.favoriteFood change Food first element. So Info have new element, but Food object unchanged. If here you console info, you get new element. But food element is unchangeable</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B</b></summary>

<p>

#### Answer: ?

<i>Explanation: Here the Correct answer is number B. Because in this function name is not called any where. In javascript if we called any paremater or variable who is not available , then we get undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer:C</b></summary>

<p>

#### Answer: C

<i>Explanation: Here the correct answer is number C. Here the for each function will start 4 times. But in javascript we start count from 0. So in this case the function play 4 times. but it count 0,1,2,3. So the Result is: C (3)</i>

</p>
</details>
