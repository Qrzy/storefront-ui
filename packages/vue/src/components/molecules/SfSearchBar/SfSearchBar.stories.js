import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfSearchBar from "./SfSearchBar.vue";
storiesOf("Molecules|SearchBar", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props")
      },
      ariaLabel: {
        default: text("ariaLabel", "Search", "Props")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      v-model="value"/>`
  }))
  .add("[slot] icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props")
      },
      ariaLabel: {
        default: text("ariaLabel", "Search", "Props")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      v-model="value">
      <template #icon>👀</template>
    </SfSearchBar>`
  }))
  .add("[slot] clear-icon", () => ({
    components: { SfSearchBar },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-search-bar--position-right": "sf-search-bar--position-right",
            "sf-search-bar--no-icon": "sf-search-bar--no-icon"
          },
          "null",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      placeholder: {
        default: text("placeholder", "Search for items", "Props")
      },
      ariaLabel: {
        default: text("ariaLabel", "Search", "Props")
      }
    },
    data() {
      return {
        value: ""
      };
    },
    template: `<SfSearchBar
      :class="customClass"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      v-model="value">
      <template #clear-icon>
        <span class="sf-search-bar__clear-icon">🧹</span>
      </template>
    </SfSearchBar>`
  }));
