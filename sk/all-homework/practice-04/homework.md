# Homework Exercise: Web Components & Reactive Pattern (Part 2)

## Goal
Build small, reusable Web Components and compose them into a simple product demo using Shadow DOM, templates, slots, and **custom events** to demonstrate a reactive pattern across multiple components.

## Task (deliverables)
1. Create a small static project (single page) with components in separate JS files (for example `src/js/components/product-image.js`).
2. Implement the following components:

   - `<product-image>`
     - Attributes: `src`, `alt`, `size` (`sm|md|lg`)
     - Renders an image inside a shadow root and exposes a CSS custom property for border-radius.
   - `<price-badge>`
     - Attributes: `price`, `currency` (default `"CAD"`), `variant` (`default|sale`)
     - Uses a template and shadow DOM for scoped styles.
   - `<product-card>`
     - Attributes: `name`, `sku`, `description`
     - Composes `<product-image>` and `<price-badge>`
     - Provides a named slot `"actions"` for buttons/controls, and a slot `"extra"` for metadata.
     - Dispatches a custom event `product-purchase` with detail `{ sku, name }` when a Purchase button is clicked.
   - `<cart-summary>`
     - Maintains internal state for total purchases and the most recently purchased product.
     - Reacts to the `product-purchase` custom event.
     - Re-renders automatically when its internal state changes.
   - **NEW** `<product-filters>`
     - Renders a small filter form (inside Shadow DOM) that includes at minimum:
       - Search input (search by product name or SKU)
       - A checkbox for `saleOnly`
     - Emits a `product-filters-changed` custom event when the form is submitted.
   - **NEW** `<product-list>`
     - Owns the full dataset (an array of product objects)
     - Renders a list of `<product-card>` components based on the current filter state
     - Exposes a method/property such as `.setFilters(filters)` or `.filters = filters` that updates internal filter state and re-renders

> Note: You may hard-code the product data in `<product-list>` for this exercise.

## Data Shape

A single object:

```js
{
  sku: 'TB-01',
  name: 'Trail Bottle',
  description: 'Insulated stainless steel water bottle.',
  price: 24.99,
  currency: 'CAD',
  image: {
    src: 'images/bottle.jpg',
    alt: 'Trail Bottle'
  },
  sale: false
}
```
An array of objects:

```js
const products = [
  {
    sku: 'TB-01',
    name: 'Trail Bottle',
    description: 'Insulated stainless steel water bottle.',
    price: 24.99,
    currency: 'CAD',
    image: {
      src: 'images/bottle.jpg',
      alt: 'Trail Bottle'
    },
    sale: false
  },
  {
    sku: 'BP-02',
    name: 'Daypack Backpack',
    description: 'Lightweight backpack for day hikes.',
    price: 79.99,
    currency: 'CAD',
    image: {
      src: 'images/backpack.jpg',
      alt: 'Daypack Backpack'
    },
    sale: true
  },
  {
    sku: 'MK-03',
    name: 'Camping Mug',
    description: 'Enamel mug for campfires and coffee.',
    price: 14.5,
    currency: 'CAD',
    image: {
      src: 'images/mug.jpg',
      alt: 'Camping Mug'
    },
    sale: false
  }
];
```

## Event Contracts

This exercise uses explicit event contracts. Your UI should work by emitting events and reacting to them, not by components directly reaching into each other.

### Event: `product-purchase` (Previously Completed)

- **Emitted by:** `<product-card>`
- **When:** The Purchase button is clicked
- **Event configuration:**
  - `bubbles: true`
  - `composed: true`
- **Detail payload:**

```js
{
  sku: string,
  name: string
}
```

- **Who listens:**
  - The demo page (for example `main.js`)
- **What happens next:**
  - The listener updates `<cart-summary>` by calling a public method (for example `recordPurchase(detail)`)

### Event: `product-filters-changed` (NEW)

- **Emitted by:** `<product-filters>`
- **When:** The filter form is submitted
- **Event configuration:**
  - `bubbles: true`
  - `composed: true`
- **Detail payload:**

```js
{
  query: string,
  saleOnly: boolean
}
```

- **Who listens:**
  - The demo page (for example `main.js`)
- **What happens next:**
  - The listener calls a method on `<product-list>` (for example `productList.setFilters(filters)`)
  - `<product-list>` re-filters the dataset and re-renders the displayed cards

## Example usage

This is an example of how the page might be composed. Your exact layout can vary (be creative).

```html
<cart-summary></cart-summary>
<product-filters></product-filters>
<product-list></product-list>
```

Within `<product-list>`, you will render multiple `<product-card>` instances based on the data.

## Acceptance Criteria

- Each component uses Shadow DOM and a template for markup/styles.
- Attributes map to rendered content (image `src/alt`, `name`, `sku`, `price`).
- `<product-card>` composes `<product-image>` + `<price-badge>` + slots and dispatches `product-purchase` when Purchase is activated.
- Slots accept fallback content and work when children are provided.
- Buttons are keyboard-accessible and include visible focus styles.
- The demo page includes a `<product-filters>`, a `<product-list>`, and a `<cart-summary>`.

Event-driven behavior:

- `product-purchase` is dispatched with the correct payload.
- The demo page listens for `product-purchase` and updates `<cart-summary>`.
- `<cart-summary>` maintains state and re-renders when purchases occur.

Reactive filtering:

- `<product-filters>` dispatches `product-filters-changed` on submit with the correct payload.
- The demo page listens for `product-filters-changed` and updates `<product-list>`.
- `<product-list>` filters without mutating the original dataset.
- Changing filters results in visible UI updates (i.e., different cards are shown).

## Stretch Challenges (optional)

- Support live filtering (emit `product-filters-changed` on `input` / `change`), and debounce the search input.
- Add additional filters like min/max price.
- Display a result count, and update it reactively as filters change.
- Persist a "recently viewed" product list in localStorage.

## Estimated time

- 90-180 minutes

## Submission

- Commit your files to your workbook repo and push to GitHub.
- Include README.md with run instructions and a short note describing which components you built, and any options applicable or config settings (for example CSS properties).