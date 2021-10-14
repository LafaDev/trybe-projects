let n = 5;
let stars = [];
for (let index = 0; index < n; index += 1) {
    stars.push("");
}
for (let i = 0; i < stars.length; i += 1) {
     stars[n - i] = "*";
     console.log(stars);
}

// stars[5] = 4;
