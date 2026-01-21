// ~/js/components/resource-header.js
const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" />
    <header class="mb-4">
      <div class="d-flex flex-wrap justify-content-between align-items-end gap-2">
        <div>
          <h1 class="h3 mb-1">NAIT Resource Directory</h1>
          <p class="text-body-secondary mb-0">
            Find student support services, labs, and campus resources.
          </p>
        </div>
      </div>
    </header>`;

class ResourceHeader extends HTMLElement {
    // The constructor's job is to make sure the object (aka, the <resource-header>) has "meaningful" information/state
    constructor() {
        super(); // calling the constructor of the base class (HTMLElement) is the first thing you should do
        this.attachShadow({ mode: 'open' }); // A better place to put this
    }
    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('resource-header', ResourceHeader);