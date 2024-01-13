import { expect } from "chai";
import Checkout from "../src/checkout.js";

let checkout;

beforeEach(() => {
    checkout = new Checkout();
});

it("Can create an instance of Checkout class", () => {
    expect(checkout).to.be.an.instanceof(Checkout);
});

it("Can add item price", () => {
    checkout.addItemPrice("A", 50);
});

it("Can add item", () => {
    checkout.addItemPrice("A", 50);
    checkout.addItem("A");
});

it("Can calculate the current total", () => {
    checkout.addItemPrice("A", 50);
    checkout.addItem("A");
    expect(checkout.calculateTotal()).to.equal(50);
});

it("Can add multiple items and get correct total", () => {
    checkout.addItemPrice("A", 50);
    checkout.addItemPrice("B", 30);
    checkout.addItemPrice("C", 20);
    checkout.addItemPrice("D", 15);
    checkout.addItem("A");
    checkout.addItem("B");
    checkout.addItem("C");
    checkout.addItem("D");
    expect(checkout.calculateTotal()).to.equal(115);
});

it("Can add multiple items of each product and get correct total", () => {
    checkout.addItemPrice("A", 50);
    checkout.addItemPrice("B", 30);
    checkout.addItemPrice("C", 20);
    checkout.addItemPrice("D", 15);
    checkout.addItem("A");
    checkout.addItem("A");
    checkout.addItem("A");
    checkout.addItem("B");
    checkout.addItem("B");
    checkout.addItem("C");
    checkout.addItem("C");

    checkout.addItem("C");
    checkout.addItem("D");
    checkout.addItem("D");
    checkout.addItem("D");
    checkout.addItem("D");
    expect(checkout.calculateTotal()).to.equal(330);
});

it("Exception is thrown when adding item without price", () => {
    expect(() => {
        checkout.addItem("A");
    }).to.throw();
});