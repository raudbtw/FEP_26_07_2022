const title = new TitleField("Покупка автомобилей");
const firstQuestionField = new TextField(
  "firstQuestionField",
  "Ваше имя:",
  "Ваше имя"
);
const secondQuestionField = new TextField(
  "lastNameField",
  "Ваша машина:",
  "Ваша машина"
);
const checkbox = new CheckBoxField(
  "checkbox",
  "Какого цвета?",
  "",
  "Черного цвета"
);
const checkbox2 = new CheckBoxField("checkbox", "", "", "Белого цвета");
const checkbox3 = new CheckBoxField(
  "checkbox",
  "Какой привод?",
  "",
  "Задний привод"
);
const checkbox4 = new CheckBoxField("checkbox", "", "", "Передний привод");
const select = new SelectField("Оплата", "Оплата", [
  {
    value: "1",
    label: "Наличными",
  },
  {
    value: "2",
    label: "Картой",
  },
]);

const form = new Form(
  [
    title,
    firstQuestionField,
    secondQuestionField,
    checkbox,
    checkbox2,
    checkbox3,
    checkbox4,
    select,
  ],
  (e) => {
    e.preventDefault();
    alert("submit");
  }
);
const formWrapper = document.querySelector(".form__wrapper");
form.renderForm("formId", formWrapper);
