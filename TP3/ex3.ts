let id :number|string;
type A =string;
type B =number
type C = A&B;
type Status = "pending" | "done" | "canceled";
let k: unknown;
if(typeof k === "string"){
    console.log(k.length);
}