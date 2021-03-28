# Day 2: Conditional Statements: Switch

## Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

## Task

Complete the `getLetter(s)` function in the editor. It has one parameter: a string, `s`, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

- If the first character in string `s` is in the set `{a,e,i,o,u}`, then return A.
- If the first character in string `s` is in the set `{b,c,d,f,g}`, then return B.
- If the first character in string `s` is in the set `{h,j,k,l,m}`, then return C.
- If the first character in string `s` is in the set `{n,p,q,r,s,t,v,w,x,y,z}`, then return D.

> Hint: You can get the letter at some index `i` in `s` using the syntax `s[i]` or `s.charAt(i)`.

## Input/Output

Input Format: Stub code in the editor reads a single string denoting `s` from `stdin`.
Output Format: Return either A, B, C, or D according to the criteria given above.

### Example

Sample Input: `adfgt`
Sample Output: `A`
Explanation: The first character of string `a=adgt` is `a` because the given criteria stipulate that we print `A` any time the first character is in `{a,e,i,o,u}`, we return `A` as our answer.

## Constraints

1. `s >= 1 || s <= 100`, where `s` is the length of the string `s`.
2. String `s` contains lowercase English alphabetic letters (i.e., a through z) only.

>
