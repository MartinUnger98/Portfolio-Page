export function focusSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView();

  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
  }
  target.focus({ preventScroll: true });
}
