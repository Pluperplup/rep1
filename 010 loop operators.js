// for

//for (инициализация;условие;финальное выражение){выражение;}
for (let count = 0; count < 10; count++) {
  console.log(count);
}

// continue, break;

let arr = [5, 45, 73, 753, 7654, 8878, 5644];
for (let i = 0; i < arr.length; i++) {
  if (i == 2) continue;
  console.log(arr[i]);
  if (arr[i] == 8878) break;
}

// До тех пор пока
let cnt = 0;
while (cnt < 10) {
  console.log(Math.pow(cnt, 2));
  cnt++;
}

// Хотя бы 1 раз
let s = 0;
do {
  console.log(Math.sqrt(s));
  s++;
} while (s < 10);

// Просить вводить имя, до тех пор пока не ввелдут пустую строку.
