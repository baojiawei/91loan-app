import Vue from 'vue'

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  Input,
  Textarea,
  Scroll,
  Slide,
  Toast,
  checker
} from 'cube-ui'

Vue.use(Input)
Vue.use(Toast)
Vue.use(Textarea)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(checker)
