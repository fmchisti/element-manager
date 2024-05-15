type EventType = keyof HTMLElementEventMap | string;

export default class ElementManager {
  element: Element | null = null;

  constructor(item: string | Element) {
    if (typeof item === "string") {
      this.element = document.querySelector(item);
    } else {
      this.element = item;
    }
  }

  addClass(className: string) {
    if (this.element) {
      this.element.classList.add(className);
    }
    return this;
  }

  removeClass(className: string) {
    if (this.element) {
      this.element.classList.remove(className);
    }
    return this;
  }

  append(child: Element) {
    if (this.element) {
      this.element.appendChild(child);
    }
    return this;
  }

  prepend(child: Element) {
    if (this.element) {
      this.element.insertBefore(child, this.element.firstChild);
    }
    return this;
  }

  insertHTML(position: InsertPosition, html: string) {
    if (this.element) {
      this.element.insertAdjacentHTML(position, html);
    }
    return this;
  }

  getChildren(): Element[] {
    return this.element ? Array.from(this.element.children) : [];
  }

  getSiblings(): Element[] {
    if (!this.element || !this.element.parentElement) return [];
    return Array.from(this.element.parentElement.children).filter(
      (child) => child !== this.element,
    );
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
    return this;
  }

  setTextContent(text: string) {
    if (this.element) {
      this.element.textContent = text;
    }
    return this;
  }

  setHTMLContent(html: string) {
    if (this.element) {
      this.element.innerHTML = html;
    }
    return this;
  }

  getAttribute(attr: string): string | null {
    return this.element ? this.element.getAttribute(attr) : null;
  }

  setAttribute(attr: string, value: string) {
    if (this.element) {
      this.element.setAttribute(attr, value);
    }
    return this;
  }

  removeAttribute(attr: string) {
    if (this.element) {
      this.element.removeAttribute(attr);
    }
    return this;
  }

  on(eventType: EventType, callback: EventListenerOrEventListenerObject) {
    if (this.element) {
      this.element.addEventListener(eventType, callback);
    }
    return this;
  }

  off(eventType: EventType, callback: EventListenerOrEventListenerObject) {
    if (this.element) {
      this.element.removeEventListener(eventType, callback);
    }
    return this;
  }

  observe(
    callback: MutationCallback,
    options: MutationObserverInit = { childList: true, subtree: true },
  ) {
    if (this.element) {
      const observer = new MutationObserver(callback);
      observer.observe(this.element, options);
    }
    return this;
  }

  trigger(eventType: EventType) {
    if (this.element) {
      const event = new Event(eventType);
      this.element.dispatchEvent(event);
    }
    return this;
  }

  cloneElement(deep: boolean = true): Element | null {
    return this.element ? (this.element.cloneNode(deep) as Element) : null;
  }

  replaceWith(newElement: Element) {
    if (this.element) {
      this.element.replaceWith(newElement);
    }
    return this;
  }

  closest(selector: string): Element | null {
    return this.element ? this.element.closest(selector) : null;
  }

  matches(selector: string): boolean {
    return this.element ? this.element.matches(selector) : false;
  }

  toggleClass(className: string) {
    if (this.element) {
      this.element.classList.toggle(className);
    }
    return this;
  }

  getComputedStyle(property: string): string | null {
    if (this.element) {
      const styles = window.getComputedStyle(this.element);
      return styles.getPropertyValue(property);
    }
    return null;
  }

  scrollIntoView(options?: ScrollIntoViewOptions) {
    if (this.element) {
      this.element.scrollIntoView(options);
    }
    return this;
  }

  addEventDelegate(
    selector: string,
    eventType: EventType,
    callback: EventListenerOrEventListenerObject,
  ) {
    if (this.element) {
      this.element.addEventListener(eventType, (event) => {
        const target = event.target as Element;
        if (target.matches(selector)) {
          if (typeof callback === "function") {
            callback(event);
          } else {
            callback.handleEvent(event);
          }
        }
      });
    }
    return this;
  }

  hasClass(className: string): boolean {
    return this.element ? this.element.classList.contains(className) : false;
  }

  getData(dataAttr: string): string | null {
    return this.element ? this.element.getAttribute(`data-${dataAttr}`) : null;
  }

  getAllData(): Record<string, string> {
    if (!this.element || !(this.element instanceof HTMLElement)) return {};
    const dataset: Record<string, string> = {};

    for (const key in this.element.dataset) {
      if (this.element.dataset.hasOwnProperty(key)) {
        dataset[key] = this.element.dataset[key] || "";
      }
    }
    return dataset;
  }
}
