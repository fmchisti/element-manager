# element-manager

`element-manager` is a utility class for DOM manipulation and event handling. It provides a chainable API to simplify working with HTML elements.

## Installation

You can install `element-manager` via npm:

```bash
npm install element-manager
```

## Usage

### Importing the Class

To use `element-manager`, you need to import it into your project:

```typescript
import ElementManager from "element-manager";
```

### Creating an Instance

You can create an instance of `element-manager` by passing a CSS selector string or an HTML element:

```typescript
// Using a CSS selector
const elementManager = new ElementManager("#my-element");

// Using an HTML element
const element = document.getElementById("my-element");
const elementManager = new ElementManager(element);
```

### Methods

#### `addClass(className: string): this`

Adds a class to the selected element.

```typescript
elementManager.addClass("active");
```

#### `removeClass(className: string): this`

Removes a class from the selected element.

```typescript
elementManager.removeClass("inactive");
```

#### `append(child: Element): this`

Appends a child element to the selected element.

```typescript
const newDiv = document.createElement("div");
elementManager.append(newDiv);
```

#### `prepend(child: Element): this`

Prepends a child element to the selected element.

```typescript
const newSpan = document.createElement("span");
elementManager.prepend(newSpan);
```

#### `insertHTML(position: InsertPosition, html: string): this`

Inserts HTML at the specified position relative to the selected element.

```typescript
elementManager.insertHTML("beforeend", "<p>Inserted HTML</p>");
```

#### `getChildren(): Element[]`

Returns an array of the selected element's children.

```typescript
const children = elementManager.getChildren();
console.log(children);
```

#### `getSiblings(): Element[]`

Returns an array of the selected element's siblings.

```typescript
const siblings = elementManager.getSiblings();
console.log(siblings);
```

#### `remove(): this`

Removes the selected element from the DOM.

```typescript
elementManager.remove();
```

#### `setTextContent(text: string): this`

Sets the text content of the selected element.

```typescript
elementManager.setTextContent("Updated Text");
```

#### `setHTMLContent(html: string): this`

Sets the HTML content of the selected element.

```typescript
elementManager.setHTMLContent("<span>New HTML Content</span>");
```

#### `getAttribute(attr: string): string | null`

Gets the value of the specified attribute from the selected element.

```typescript
const attrValue = elementManager.getAttribute("data-id");
console.log(attrValue);
```

#### `setAttribute(attr: string, value: string): this`

Sets the value of the specified attribute on the selected element.

```typescript
elementManager.setAttribute("data-id", "123");
```

#### `removeAttribute(attr: string): this`

Removes the specified attribute from the selected element.

```typescript
elementManager.removeAttribute("data-id");
```

#### `on(eventType: EventType, callback: EventListenerOrEventListenerObject): this`

Adds an event listener to the selected element.

```typescript
elementManager.on("click", () => console.log("Element clicked"));
```

#### `off(eventType: EventType, callback: EventListenerOrEventListenerObject): this`

Removes an event listener from the selected element.

```typescript
const clickHandler = () => console.log("Element clicked");
elementManager.on("click", clickHandler);
elementManager.off("click", clickHandler);
```

#### `observe(callback: MutationCallback, options: MutationObserverInit = { childList: true, subtree: true }): this`

Sets up a MutationObserver to watch for changes to the selected element.

```typescript
elementManager.observe((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation);
  });
});
```

#### `trigger(eventType: EventType): this`

Dispatches an event of the specified type on the selected element.

```typescript
elementManager.trigger("click");
```

#### `cloneElement(deep: boolean = true): Element | null`

Clones the element.

```typescript
const clone = elementManager.cloneElement();
console.log(clone);
```

#### `replaceWith(newElement: Element): this`

Replaces the element with another element.

```typescript
const newElement = document.createElement("div");
elementManager.replaceWith(newElement);
```

#### `closest(selector: string): Element | null`

Finds the closest ancestor that matches the given selector.

```typescript
const closestParent = elementManager.closest(".parent-class");
console.log(closestParent);
```

#### `matches(selector: string): boolean`

Checks if the element matches the given selector.

```typescript
const doesMatch = elementManager.matches(".active");
console.log(doesMatch);
```

#### `toggleClass(className: string): this`

Toggles a class on the element.

```typescript
elementManager.toggleClass("hidden");
```

#### `getComputedStyle(property: string): string | null`

Gets the computed style of the element.

```typescript
const color = elementManager.getComputedStyle("color");
console.log(color);
```

#### `scrollIntoView(options?: ScrollIntoViewOptions): this`

Scrolls the element into view.

```typescript
elementManager.scrollIntoView({ behavior: "smooth" });
```

#### `addEventDelegate(selector: string, eventType: EventType, callback: EventListenerOrEventListenerObject): this`

Adds an event listener that delegates events to a child selector.

```typescript
elementManager.addEventDelegate(".child", "click", (event) =>
  console.log("Child clicked"),
);
```

#### `hasClass(className: string): boolean`

Checks if the element has a specific class.

```typescript
const hasActiveClass = elementManager.hasClass("active");
console.log(hasActiveClass);
```

#### `getData(dataAttr: string): string | null`

Gets the value of a data attribute.

```typescript
const dataValue = elementManager.getData("id");
console.log(dataValue);
```

### Example

Here's an example demonstrating the usage of `ElementManager`:

```typescript
import ElementManager from "element-manager";

const elementManager = new ElementManager("#my-element");

elementManager
  .addClass("active")
  .removeClass("inactive")
  .append(document.createElement("div"))
  .prepend(document.createElement("span"))
  .insertHTML("beforeend", "<p>Inserted HTML</p>")
  .setTextContent("Updated Text")
  .setHTMLContent("<span>New HTML Content</span>")
  .on("click", () => console.log("Element clicked"))
  .observe((mutations) => {
    mutations.forEach((mutation) => {
      console.log(mutation);
    });
  })
  .scrollIntoView({ behavior: "smooth" });

console.log(elementManager.getChildren());
console.log(elementManager.getSiblings());
console.log(elementManager.cloneElement());
console.log(elementManager.closest(".parent-class"));
console.log(elementManager.matches(".active"));
console.log(elementManager.toggleClass("hidden"));
console.log(elementManager.getComputedStyle("color"));
console.log(elementManager.hasClass("active"));
console.log(elementManager.getData("id"));
```

## License

This project is licensed under the MIT License.
