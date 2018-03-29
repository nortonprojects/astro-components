import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineTrack extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String
      },
      regions: {
        type: Object
      },
      scale: {
        type: Number
      },
      duration: {
        type: Number
      },
      selectedRegion: {
        type: Object,
        value: null,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline-track.css">
      <div class="rux-timeline__track">
        <ol>
          <template is="dom-repeat" id="regionsElements" items={{regions}}>
            <li>
              <rux-timeline-region class="rux-timeline-region"
                title=[[item.label]]
                status=[[item.status]]
                start-time=[[item.startTime]]
                end-time=[[item.endTime]]
                scale=[[scale]]
                track-width=[[trackWidth]]
                duration=[[duration]]>
              </rux-timeline-region>
            </li>
          </template>
        <ol>
      </div>
      `;
  }
  constructor() {
    super();

    this._windowListener = this._onWindowResize.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // this._base = this.shadowRoot.querySelectorAll(".rux-timeline__track")[0];
    this.trackWidth = this.shadowRoot.querySelectorAll(
      ".rux-timeline__track"
    )[0].offsetWidth;

    this.parentElement.addEventListener("playhead", this._test);

    window.addEventListener("resize", this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener("resize");
  }

  _onWindowResize() {
    this.trackWidth = this.shadowRoot.querySelectorAll(
      ".rux-timeline__track"
    )[0].offsetWidth;
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
