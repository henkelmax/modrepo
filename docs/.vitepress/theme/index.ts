import DefaultTheme from 'vitepress/theme'
import FAQ from '../../components/FAQ.vue'
import GeneralFAQ from '../../components/GeneralFAQ.vue'
import Credits from '../../components/Credits.vue'
import WikiTracker from '../../components/WikiTracker.vue'
import Popup from '../../components/Popup.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('FAQ', FAQ)
    ctx.app.component('GeneralFAQ', GeneralFAQ)
    ctx.app.component('Credits', Credits)
    ctx.app.component('WikiTracker', WikiTracker)
    ctx.app.component('Popup', Popup)
  }
}