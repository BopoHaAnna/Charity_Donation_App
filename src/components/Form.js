import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    /*this.object = {
      onSubmit: this.onItemCreate,
    };*/

    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const donateFormInputLabel = document.createElement("label");
    donateFormInputLabel.classList = "donate-form__input-label";
    donateFormInputLabel.textContent = "Введите сумму в $";

    const donateFormDonateInput = document.createElement("input");
    donateFormDonateInput.setAttribute("name", "amount");
    donateFormDonateInput.setAttribute("type", "number");
    donateFormDonateInput.setAttribute("max", "100");
    donateFormDonateInput.setAttribute("min", "1");
    donateFormDonateInput.setAttribute("required", "");

    donateFormInputLabel.append(donateFormDonateInput);

    const donateFormSubmitButton = document.createElement("button");
    donateFormSubmitButton.className = "donate-form__submit-button";
    donateFormSubmitButton.setAttribute("type", "submit");
    donateFormSubmitButton.setAttribute("disabled", "");
    donateFormSubmitButton.textContent = "Задонатить";

    this.$rootElement.append(donateFormInputLabel, donateFormSubmitButton);

    this.$input = donateFormDonateInput;
    this.$button = donateFormSubmitButton;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    return this.state.amount > 0 && this.state.amount < 101;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    //console.log(this.isValid);
    //console.log(event.target.value);
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount)); // 16 шаг
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
