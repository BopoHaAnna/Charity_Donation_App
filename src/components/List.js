import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const donatesContainerTitle = document.createElement("h2");
    donatesContainerTitle.classList = "donates-container__title";
    donatesContainerTitle.textContent = "Список донатов";

    const donatesContainerDonates = document.createElement("div");
    donatesContainerDonates.classList = "donates-container__donates";

    this.$rootElement.append(donatesContainerTitle, donatesContainerDonates);

    this.$listContainer = donatesContainerDonates;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}
