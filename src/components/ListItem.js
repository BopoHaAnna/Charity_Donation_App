import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    const dateText = `${this.state.date.toLocaleString()} - `;
    const amountText = `$${this.state.amount}`;

    const amountElement = document.createElement("b");
    amountElement.textContent = amountText;

    this.$rootElement.textContent = dateText;
    this.$rootElement.appendChild(amountElement);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "delete-button";
    deleteButton.textContent = "Удалить";
    this.$rootElement.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      props.onItemDelete(this.state.amount);
      this.$rootElement.remove();
    });
  }
}
