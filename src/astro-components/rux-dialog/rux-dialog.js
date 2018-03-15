import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxDialog extends PolymerElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      message: {
        type: String
      },
      confirmText: {
        type: String,
        value: false
      },
      denyText: {
        type: String,
        value: false
      },
      icon: {
        type: String,
        value: "default:caution"
      }
    };
  }
  static get template() {
    return html`
      <style>
    


      :host {
        display: none;
        box-sizing: border-box;
      }

      :host([open]) {
        display: block;
      }

      *,
      *:before,
      *:after {
          box-sizing: inherit;
      }

      *[hidden] {
        display: none !important;
      }


      .rux-modal-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11001;
      }

      
      .rux-modal {
        position: relative;
        display: flex;
        font-size: 0.875rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: black;
        
        
        width: 27.5rem;
        min-height: 12.5rem;
        border: 2px solid #5CB3FF;
        border-radius: 4px;
        margin: auto;
        padding: 1rem;

      }


      .rux-modal__message {
        display: flex;
        align-items: top;
        margin-top: auto;
        width:70%;
        color: #fff;
      }

      rux-icon {
        margin-right: 0.75rem;
      }


      .rux-button-group {
        margin-left: auto;
        margin-top: auto;
      }

      .rux-modal::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
      }

 

      </style>
      
      <div class="rux-modal-container">
        <dialog class="rux-modal" {{open}}>
          <div class="rux-modal__message"><rux-icon icon=[[icon]] size="22" color="#fff"></rux-icon>[[message]]</div>
          <div class="rux-button-group">
            <span hidden="[[!denyText]]"><rux-button on-click="_handleModalDeny" default>[[denyText]]</rux-button></span>
            <span hidden="[[!confirmText]]"><rux-button on-click="_handleModalConfirm">[[confirmText]]</rux-button></span>
          </div>
        </dialog>
      </div>
    `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();

    // in the event neither Confirm/Deny text is supplied provide
    // a default cancel button to get out of the
    if (!this.denyText && !this.confirmText) {
      this.denyText = "Cancel";
      console.warn(
        "No confirm or deny actions have been passed to the modal dialog box. User has been presented with a Cancel button"
      );
    }

    // get the total button set
    const buttonSet = this.shadowRoot.querySelectorAll("rux-button");
    const defaultButton = buttonSet[buttonSet.length - 1];
    defaultButton.setAttribute("default", "");
    defaultButton.focus();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _handleModalConfirm() {
    window.dispatchEvent(
      new CustomEvent("modal-event", { detail: { confirm: true } })
    );
    this.open = false;
  }
  _handleModalDeny() {
    window.dispatchEvent(
      new CustomEvent("modal-event", { detail: { confirm: false } })
    );
    this.open = false;
  }
}
customElements.define("rux-dialog", RuxDialog);
