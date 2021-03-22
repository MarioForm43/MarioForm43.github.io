class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
      'Copyrigth &copy; 2020 Mario Cortes Navarrete.';
  }
}
customElements.define("mi-footer", MiFooter);
