const createTemplate = function() {
    const template = document.createElement('template');
    template.innerHTML = `<style>
    p {
      color: white;
      background-color: #666666;
      padding: 5px;
    }
  </style>
  <p>My Paragraph</p>`;
    return template;
}

customElements.define(
    'my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();
            let template = createTemplate();
            let templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(document.importNode(templateContent));
        }
    }
);
