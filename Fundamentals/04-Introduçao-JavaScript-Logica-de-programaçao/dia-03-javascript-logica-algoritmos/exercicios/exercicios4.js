let n = 5;
let stars = [];
for (index = 0; index < n; index += 1) {
    stars.push("");
}
let y = (n - 1) / 2;
for (index = 0; index <= y; index += 1) {
    stars[y] = "*";
    stars[y + index] = "*";
    stars[y - index] = "*";
    console.log(stars);
}