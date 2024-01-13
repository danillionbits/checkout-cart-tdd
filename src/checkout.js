export default class Checkout {
    constructor() {
        this.prices = new Object();
        this.items = new Object();
    }

    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item) {
        if (this.prices[item] === undefined) {
            throw "No price for item " + item;
        }
        if (this.items[item] === undefined) {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }

    calculateTotal() {
        let total = 0;

        for (let item in this.items) {
            total += this.prices[item] * this.items[item];
        }

        return total;
    }
};