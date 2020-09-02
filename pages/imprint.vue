<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-text>
            <div :class="{ imprintDark: $global.darkMode, imprint: !$global.darkMode }">
              <h1>Impressum</h1>
              <br />
              <div>Angaben gemäß § 5 TMG</div>
              <br />
              <div>
                <client-only>
                  <img v-if="$global.darkMode" :src="require('~/assets/address.svg')" height="75px" />
                  <img v-else :src="require('~/assets/address-black.svg')" height="75px" />
                </client-only>
              </div>
              <br />
              <div>
                <h2>Kontakt:</h2>E-Mail:
                <br />
                <client-only>
                  <img v-if="$global.darkMode" :src="require('~/assets/mail.svg')" height="16px" />
                  <img v-else :src="require('~/assets/mail-black.svg')" height="16px" />
                </client-only>
              </div>
              <br />
              <br />
              <div>
                <h2>Haftungsausschluss</h2>
                <br />
                <strong>Haftung für Inhalte</strong>
                <br />
                <br />Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                <br />
                <br />
                <strong>Haftung für Links</strong>
                <br />
                <br />Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                <br />
                <br />
                <strong>Urheberrecht</strong>
                <br />
                <br />Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </div>
              <br />
              <a
                href="https://www.impressum-generator.de/impressum-generator/"
                target="_blank"
                rel="nofollow noopener"
              >Quelle</a>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Imprint",
      description: "",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "itemprop:name",
          itemprop: "name",
          content: this.title,
        },
        {
          hid: "itemprop:description",
          itemprop: "description",
          content: this.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
.imprint {
  color: black;
}
.imprintDark {
  color: white;
}
a {
  text-decoration: none;
}
</style>
