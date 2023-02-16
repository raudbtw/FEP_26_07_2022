class Form {
  constructor(fields, onSubmit) {
    this.fields = fields;
    this.onSubmit = onSubmit;
  }

  renderForm = (id, parentEl) => {
    const formEl = createElement("form", { class: "form", id: id });

    formEl.addEventListener("submit", this.onSubmit);

    this.fields.forEach((field) => {
      const fieldItem = field.create();
      formEl.append(fieldItem);
    });

    parentEl.append(formEl);
  };
}

class Field {
  constructor(
    type,
    id,
    labelText = "",
    placeHolder = "",
    spanText,
    listeners = null,
    options = []
  ) {
    this.type = type;
    this.id = id;
    this.labelText = labelText;
    this.listeners = listeners;
    this.placeHolder = placeHolder;
    this.spanText = spanText;
    this.options = options;
  }
  create() {
    const div = createElement("div", {
      class: "form__group",
    });

    const label = createElement(
      "label",
      {
        class: "form__label",
        for: this.id,
      },
      this.labelText
    );
    div.append(label);

    if (this.type != "select") {
      const field = createElement("input", {
        class: `input__${this.type}`,
        type: this.type,
        id: this.id,
        placeHolder: this.placeHolder,
      });

      if (this.spanText) {
        const inputSpanWrapper = createElement("div", {
          class: "checkbox__wrapper",
        });

        const span = createElement(
          "span",
          {
            class: "input__span-text",
          },
          this.spanText
        );

        inputSpanWrapper.append(field);
        inputSpanWrapper.append(span);
        div.append(inputSpanWrapper);
      } else {
        div.append(field);
      }
    } else if (this.type == "select") {
      // do some select magic
      const select = createElement("select", {
        class: `input__${this.type}`,
        type: this.type,
        id: this.id,
      });

      this.options.forEach((option) => {
        const optionElement = createElement(
          "option",
          {
            value: option.value,
          },
          option.label
        );

        select.append(optionElement);
      });

      div.append(select);
    }

    if (this.listeners) {
      this.addEventListeners(field);
    }
    return div;
  }

  addEventListeners(fieldEL) {
    Object.entries(this.listeners).forEach(([event, callback]) => {
      fieldEL.addEventListener(event, callback);
    });
  }
}

class TitleField {
  constructor(text, type = "h1") {
    this.text = text;
    this.type = type;
  }
  create() {
    const title = createElement(
      this.type,
      {
        class: "form__title",
      },
      this.text
    );
    return title;
  }
}

class TextField extends Field {
  constructor(
    id,
    labelText = "",
    placeHolder = "",
    spanText = "",
    listeners = null
  ) {
    super("text", id, labelText, placeHolder, spanText, listeners);
  }
}

class CheckBoxField extends Field {
  constructor(
    id,
    labelText = "",
    placeHolder = "",
    spanText = "",
    listeners = null
  ) {
    super("checkbox", id, labelText, placeHolder, spanText, listeners);
  }
}

class SelectField extends Field {
  constructor(
    id,
    labelText = "",
    options = [],
    placeHolder = "",
    spanText = "",
    listeners = null
  ) {
    super("select", id, labelText, placeHolder, spanText, listeners, options);
  }
}
