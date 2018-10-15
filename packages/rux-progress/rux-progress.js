import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgress extends PolymerElement {
  static get properties() {
    return {
      max: {
        type: Number,
        value: 100
      },
      value: Number,
      label: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <style>

      :host {
        --progressPadding: 2px 0 0 2px;
        --progressRadius: 10px;
        --progressHeight: 14px;
        --progressWidth: calc(100% - 4px);
      }

      .rux-progress {

        display: flex;
        position: relative;
      
        justify-content: space-between;
        align-items: center;
      }
      
      .rux-progress progress[value] {
        appearance: none;
      
        /* background: #21384f; */
        background-color: var(
          --progressDeterminateTrackBackgroundColor,
          rgba(0,0,0,0.3)
        );
        border: 1px solid var(--progressDeterminateTrackBorderColor, rgb(20, 32, 44));
        border-radius: var(--progressRadius);
        height: 20px;
        width: 100%;
      }
      
      .rux-progress__value {
        margin-left: 0.25rem;
        width: 5.5rem;
        text-align: right;
        font-size: 24px;
        color: var(--controlLabelColor, #fff);
      }
      
      .rux-progress progress[value]::-webkit-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress[value]::-webkit-progress-value {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight);
        margin: var(--progressPadding);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-ms-fill {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight), 14px;
        margin: var(--progressPadding, 2px);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-moz-progress-bar {
        border-radius: var(--progressRadius);
      
        margin: 2px 2px 0 2px;
        height: var(--progressHeight);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      /* Indeterminate */
      .rux-progress progress:indeterminate {
        -webkit-appearance: none;
      
        position: relative;
      
        height: 5rem;
        width: 5rem;
        background-color: transparent;
        
        border: none;
      
        
       
        background-image: var(
          --progressIndeterminate,
          url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000000%22%20fill-opacity%3D%22.3%22%20stroke%3D%22%2314202c%22%20d%3D%22M32%2C63.5%20C49.3969696%2C63.5%2063.5%2C49.3969696%2063.5%2C32%20C63.5%2C14.6030304%2049.3969696%2C0.5%2032%2C0.5%20C14.6030304%2C0.5%200.5%2C14.6030304%200.5%2C32%20C0.5%2C49.3969696%2014.6030304%2C63.5%2032%2C63.5%20Z%20M32%2C56.5%20C18.4690236%2C56.5%207.5%2C45.5309764%207.5%2C32%20C7.5%2C18.4690236%2018.4690236%2C7.5%2032%2C7.5%20C45.5309764%2C7.5%2056.5%2C18.4690236%2056.5%2C32%20C56.5%2C45.5309764%2045.5309764%2C56.5%2032%2C56.5%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%234dacff%22%20fill-rule%3D%22nonzero%22%20d%3D%22M32%2C61.9354839%20C30.9333606%2C61.9354839%2030.0686785%2C61.0708018%2030.0686785%2C60.0041623%20C30.0686785%2C58.9375229%2030.9333606%2C58.0728408%2032%2C58.0728408%20C40.1954904%2C58.0728408%2047.7578267%2C54.2689176%2052.6662672%2C47.8987622%20C56.1526582%2C43.3741373%2058.0728408%2C37.8356396%2058.0728408%2C32%20C58.0728408%2C17.6003676%2046.3996324%2C5.92715921%2032%2C5.92715921%20C17.6003676%2C5.92715921%205.92715921%2C17.6003676%205.92715921%2C32%20C5.92715921%2C33.0666394%205.0624771%2C33.9313215%203.99583767%2C33.9313215%20C2.92919824%2C33.9313215%202.06451613%2C33.0666394%202.06451613%2C32%20C2.06451613%2C15.4670888%2015.4670888%2C2.06451613%2032%2C2.06451613%20C48.5329112%2C2.06451613%2061.9354839%2C15.4670888%2061.9354839%2C32%20C61.9354839%2C38.6961574%2059.7285058%2C45.0618765%2055.7259583%2C50.2563674%20C50.0938506%2C57.5656952%2041.4065535%2C61.9354839%2032%2C61.9354839%20Z%22%20%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E")
        );
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        
        animation-name: spin;
        animation-duration: 1.367s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      
      /* Removes the default animation from IE */
      .rux-progress progress:indeterminate::-ms-fill {
        animation-name: none;
      }
      
      .rux-progress progress:indeterminate::-moz-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress:indeterminate::-webkit-progress-value,
      .rux-progress progress:indeterminate::-webkit-progress-bar {
        background-color: transparent;
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    </style>      

      <div class="rux-progress">
        <progress value="[[value]]" max=[[max]]></progress>
        <div class="rux-progress__value" hidden="[[!label]]">[[value]]</div>
      </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-progress", RuxProgress);
