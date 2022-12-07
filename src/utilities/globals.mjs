export function getCSSVariable(variable) {
    return getComputedStyle(document.body).getPropertyValue('--' + variable);
}
