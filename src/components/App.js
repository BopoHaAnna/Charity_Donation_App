import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0, // сумма всех донатов
      donates: [], // список донатов
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const totalAmount = document.createElement("h1");
    totalAmount.className = "total-amount";
    totalAmount.textContent = "Итого: $";

    const totalAmountSpan = document.createElement("span");
    totalAmountSpan.textContent = this.state.total;

    totalAmount.append(totalAmountSpan);
    this.$rootElement.appendChild(totalAmount);

    this.$total = totalAmountSpan;

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) }); // 15 шаг спросить у Вани
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({ onItemDelete: this.onItemDelete }); // спросить у Вани
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const newItem = new ListItem({ amount, onItemDelete: this.onItemDelete }); // Спросить у Вани
    this.state.donates.push(newItem);
    this.donateList.addItem(newItem);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete = (amount) => {
    this.state.total -= amount;
    this.$total.textContent = this.state.total;
  };
}
