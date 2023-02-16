const createElement = (tagName, attributes, text) => {
  const el = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).forEach(([attribute, value]) => {
      el.setAttribute(attribute, value);
    });
  }

  if (text) {
    el.textContent = text;
  }
  return el;
};

class Form {
  constructor(fields, onSubmit) {
    this.fields = fields;
    this.onSubmit = onSubmit;
  }

  renderForm = (id, parentEl) => {
    const form = createElement("form", { class: "form", id: id });
    this.fields.forEach((field) => {
      const fieldItem = field.create();
      form.append(fieldItem);
    });
    parentEl.append(form);
  };
}

class Field {
  constructor(type, listeners, id) {
    this.type = type;
    this.listeners = listeners;
    this.id = id;
  }
  create() {
    const field = createElement("input", {
      class: `input__${this.type}`,
      type: this.type,
      id: this.id,
    });

    if (this.listeners) {
      this.addEventListeners(field);
    }
    return field;
  }

  addEventListeners(field) {
    Object.entries(this.listeners).forEach(([event, callback]) => {
      field.addEventListener(event, callback);
    });
  }
}

class TextField extends Field {
  constructor(type, listeners, id, value) {
    super(type, listeners, id);
    this.value = value;
  }
  create() {
    return super.create(this.value);
  }
}
class CheckBoxField extends Field {
  create() {
    return super.create();
  }
}

const userNameField = new TextField("text", null, "userNameField");
const privacyField = new CheckBoxField("checkbox", null, "privacyField");

const form = new Form([userNameField, privacyField], () => {});
const formWrapper = document.querySelector(".form__wrapper");
form.renderForm("formId", formWrapper);
