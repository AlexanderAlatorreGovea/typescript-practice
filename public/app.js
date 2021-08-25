import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/invoice.js";
//call ! at the end of the querySelectore
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
//to get the form element reference just hover over the thing
//and get the method
let docOne;
let docTwo;
docOne = new Invoice("Yoshi", "web work", 250);
docTwo = new Payment("Mario", "plumbing work", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const me = {
    name: "alex",
    age: 33,
    speak: text => {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
const invOne = new Invoice("Owen", "work on the site", 250);
const invTwo = new Invoice("Mario", "work on the other site", 200);
//only Objects created in this invoice class can be added to this
//array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
//console.log(form.children);
//inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, +amount.value);
    }
    else {
        doc = new Payment(toFrom.value, details.value, +amount.value);
    }
    list.render(doc, type.value, 'end');
});
