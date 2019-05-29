/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxTabs } from '../src/components/rux-tabs/rux-tabs.js';
import Readme from '../src/components/rux-tabs/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Tabs', module)
  .addDecorator(withKnobs)
  .add(
    'Tabs',
    () => {
      const smallKnob = boolean('Small', false);
      const disabledKnob = boolean('Disabled 3rd Tab', true);

      return html`
        <style>
          pre {
            margin: 0;
          }
        </style>
        <div style="display: flex; flex-flow: column;">

          <rux-tabs ?small="${smallKnob}" id="tab-set-id-1">
            <rux-tab id="tab-id-1">Tab 1</rux-tab>
            <rux-tab id="tab-id-2">Tab 2</rux-tab>
            <rux-tab ?disabled="${disabledKnob}" id="tab-id-3">Tab 3</rux-tab>
          </rux-tabs>

          <rux-tab-panels aria-labelledby="tab-set-id-1">
            <rux-tab-panel aria-labelledby="tab-id-1">
              <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
              <pre><<span>!-- Tab 1 HTML Content --</span>></pre>
              </div>
            </rux-tab-panel>
            <rux-tab-panel aria-labelledby="tab-id-2">
              <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
              <pre><<span>!-- Tab 2 HTML Content --</span>></pre>
              </div>
            </rux-tab-panel>
            <rux-tab-panel aria-labelledby="tab-id-3">
              <div style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; font-family: monospace;">
              <pre><<span>!-- Tab 3 HTML Content --</span>></pre>
              </div>
            </rux-tab-panel>
          </rux-tab-panels>

        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  )
  .add(
    'Tabs Variants',
    () => {

      return html`
        <div style="display: flex; flex-flow: column;">

        <div style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;">

            <rux-tabs id="tab-set-id-1">
              <rux-tab id="tab-id-1-1">Tab 1</rux-tab>
              <rux-tab id="tab-id-1-2" selected>Tab 2 (Selected on load)</rux-tab>
              <rux-tab id="tab-id-1-3" disabled>Tab 3 (Disabled)</rux-tab>
            </rux-tabs>

            <rux-tab-panels aria-labelledby="tab-set-id-1">
              <rux-tab-panel aria-labelledby="tab-id-1-1">
              <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Tab 1 HTML Content --</span>></pre>
              </rux-tab-panel>
              <rux-tab-panel aria-labelledby="tab-id-1-2">
              <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Tab 2 HTML Content --</span>></pre>
              </rux-tab-panel>
              <rux-tab-panel aria-labelledby="tab-id-1-3">
              <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Tab 3 HTML Content --</span>></pre>
              </rux-tab-panel>
            </rux-tab-panels>

          </div>
          <div style="border: rgba(255,255,255, .25) dashed 1px; margin: 1vw 1vw 0; padding: 2px;">

            <rux-tabs small id="tab-set-id-2">
              <rux-tab id="tab-id-2-1">Tab 1</rux-tab>
              <rux-tab id="tab-id-2-2">Tab 2</rux-tab>
              <rux-tab id="tab-id-2-3" disabled>Tab 3 (disabled) </rux-tab>
            </rux-tabs>

            <rux-tab-panels aria-labelledby="tab-set-id-2">
              <rux-tab-panel aria-labelledby="tab-id-2-1">
                <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Compact Tab 1 HTML Content --</span>></pre>
              </rux-tab-panel>
              <rux-tab-panel aria-labelledby="tab-id-2-2">
                <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Compact Tab 2 HTML Content --</span>></pre>
              </rux-tab-panel>
              <rux-tab-panel aria-labelledby="tab-id-2-3">
                <pre style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"><<span>!-- Compact Tab 3 HTML Content --</span>></pre>
              </rux-tab-panel>
            </rux-tab-panels>

            </div>

        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  );
