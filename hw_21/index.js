const form = document.getElementById("mainForm");

class InputParent {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", this.id);
    label.prepend(this.element);
    form.append(label);
  }

  createInput(attr) {
    this.element = document.createElement("input");
    this.element.type = this.type;
    this.element.setAttribute(attr, this.attrValue);
  }
}

class Input extends InputParent {
  constructor(name, type) {
    super(name, type);
  }
  addPlaceholder(placeholder) {
    this.element.placeholder = placeholder;
  }
}

const input = new Input("input", "input");
input.createInput();
input.addPlaceholder("Input smth...");
input.createLabel("Input text");

class Checkbox extends InputParent {
  constructor(name, type, id) {
    super(name, type);
    this.id = id;
  }
}

const checkbox = new Checkbox("checkbox", "checkbox", Date.now());
checkbox.createInput();
checkbox.createLabel("Checkbox");

class Radio extends InputParent {
  constructor(name, type, id) {
    super(name, type);
    this.id = id;
  }
}

const radio = new Radio("radio", "radio", Date.now());
radio.createInput();
radio.createLabel("First radio");

const radio1 = new Radio("radio", "radio", Date.now());
radio1.createInput();
radio1.createLabel("Second radio");
