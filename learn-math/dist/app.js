"use strict";
//? Define sets you want
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8, 9, 0]);
//! function Union of you set
function union(set1, set2) {
    return new Set([...set1, ...set2]);
}
//todo input your set in function Union
const UnionResult = union(setA, setB);
console.log("My result when union finished : ", UnionResult);
//! function Intersection of your set
function intersection(set1, set2) {
    return new Set([...set1].filter((x) => set2.has(x)));
}
//* input your set in function Union
const IntersectResult = intersection(setA, setB);
console.log("My result when intersect finished : ", IntersectResult);
// A′ = {x | x ∈ 𝒰 & x ∉ A}
function complement(set1, set2) {
    const Complement = new Set();
    for (const element of set1) {
        if (!set2.has(element)) {
            Complement.add(element);
        }
    }
    return Complement;
}
