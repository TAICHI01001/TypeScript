//? Define sets you want
const setA = new Set<number>([1, 2, 3, 4, 5]);
const setB = new Set<number>([4, 5, 6, 7, 8, 9, 0]);

// A ∪ B = {x || x ∈ A && x ∈ B}

//! function Union of you sets
function union(set1: Set<number>, set2: Set<number>): Set<number> {
  return new Set([...set1, ...set2]);
}

//todo input your set in function Union
const UnionResult = union(setA, setB);
console.log("My result when union finished : ", UnionResult);

//A ∩ B = {x || x ∈ A && x ∈ B}

//! function Intersection of your sets
function intersection(set1: Set<number>, set2: Set<number>): Set<number> {
  return new Set([...set1].filter((x) => set2.has(x)));
}

//* input your set in function Intersection
const IntersectResult = intersection(setA, setB);
console.log("My result when intersect finished : ", IntersectResult);

// A′ = {x || x ∈ 𝒰 && x ∉ A}

//! function Complement of your sets
function complement(set1: Set<number>, set2: Set<number>): Set<number> {
  const Complement = new Set<number>();

  for (const element of set1) {
    if (!set2.has(element)) {
      Complement.add(element);
    }
  }
  return Complement;
}

// input your set in function Complement
const ComplementResult = complement(setA, setB);
console.log("My result when Complement finished", ComplementResult);

//A – B = {x || x ∈ A && x ∉ B}

//! Difference of your sets
function difference(set1: Set<number>, set2: Set<number>): Set<number> {
  return new Set([...set1].filter((x) => !set2.has(x)));
}

// input your set in function Difference of sets
const DifferenceResult = difference(setA, setB);
console.log(
  "My result when i calculate difference Set finished : ",
  DifferenceResult
);

//! CartesianProduct of your sets
function cartesianProduct<T, U>(set1: Set<T>, set2: Set<U>): Set<[T, U]> {
  const CartesianProduct: Set<[T, U]> = new Set();
  for (const element1 of set1) {
    for (const element2 of set2) {
      CartesianProduct.add([element1, element2]);
    }
  }
  return CartesianProduct;
}

const CartesianProductResult = cartesianProduct(setA, setB);
console.log("My result when compute finished", CartesianProductResult);
