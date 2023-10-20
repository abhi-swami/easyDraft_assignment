export const NameGenerator = () => {
  const min = 4;
  const max = 8;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  let lower = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  let count = 0;
  let userName = "";
  for (let i = 0; i < rand; i++) {
    const min = 1;
    const max = 26;
    const variable = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(variable);
    if (count === 0) {
      userName += lower[variable].toUpperCase();
      count++;
    } else {
      userName += lower[variable];
    }
  }

  //   console.log(userName)
  return userName;
};

export const AgeGenerator = () => {
  const min = 18;
  const max = 60;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
};
