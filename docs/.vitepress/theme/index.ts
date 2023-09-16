import DefaultTheme from 'vitepress/theme'
import FAQ from '../../components/FAQ.vue'
import GeneralFAQ from '../../components/GeneralFAQ.vue'
import Credits from '../../components/Credits.vue'
import WikiTracker from '../../components/WikiTracker.vue'
import Popup from '../../components/Popup.vue'
import ServerHosting from '../../components/ServerHosting.vue'
import ServerHoster from '../../components/ServerHoster.vue'
import Redirect from '../../components/Redirect.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('FAQ', FAQ)
    ctx.app.component('GeneralFAQ', GeneralFAQ)
    ctx.app.component('Credits', Credits)
    ctx.app.component('WikiTracker', WikiTracker)
    ctx.app.component('Popup', Popup)
    ctx.app.component('ServerHosting', ServerHosting)
    ctx.app.component('ServerHoster', ServerHoster)
    ctx.app.component('Redirect', Redirect)
  }
}