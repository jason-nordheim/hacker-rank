function getLetter(s) {
  const firstLetter = s[0];
  if ("aeiou".includes(firstLetter)) {
    return "A";
  } else if ("bcdfg".includes(firstLetter)) {
    return "B";
  } else if ("hjklm".includes(firstLetter)) {
    return "C";
  } else if ("npqrstuvwxyz".includes(firstLetter)) {
    return "D";
  } else throw new Error("invalid letter");
}
