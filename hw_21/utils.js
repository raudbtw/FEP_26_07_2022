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
