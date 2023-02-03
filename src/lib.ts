import { ToastAction, ToastMessage } from './types.js';

export function renderBlock(elementId: string, html: string): void {
  const element: HTMLElement | null = document.getElementById(elementId);
  if (element == null) {
    return;
  }
  element.innerHTML = html;
}

export function renderToast(message: ToastMessage | null, action?: ToastAction | null): void {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, null);
    };
  }
}
