<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-text>
            <div :class="{ privacyDark: $global.darkMode, privacy: !$global.darkMode }">
              <h1>Datenschutzerklärung</h1>
              <br />

              <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
              <p>
                Max Henkel
                <br />
                <br />E-Mail:
                <br />
                <client-only>
                  <img v-if="$global.darkMode" :src="require('@/assets/mail.svg')" height="14px" />
                  <img v-else :src="require('@/assets/mail-black.svg')" height="14px" />
                </client-only>
              </p>

              <h2>Ihre Betroffenenrechte</h2>
              <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
              </ul>
              <p></p>
              <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
              <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
              <p>
                Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                  target="_blank"
                  rel="nofollow noopener"
                >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
              </p>
              <p></p>
              <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
              <h3>Art und Zweck der Verarbeitung:</h3>
              <p>
                Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Mehr Informatione hierzu finden Sie auf
                <a
                  href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                  target="_blank"
                  rel="nofollow noopener"
                >GitHub Privacy Statement</a>.
              </p>
              <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
              <ul>
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken.</li>
              </ul>
              <p></p>
              <p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
              <h3>Rechtsgrundlage:</h3>
              <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>
              <h3>Empfänger:</h3>
              <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>
              <h3>Speicherdauer:</h3>
              <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>
              <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
              <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.</p>
              <p></p>
              <p></p>
              <h2>Cookies und LocalStorage</h2>
              <h3>Art und Zweck der Verarbeitung:</h3>
              <p>Wie viele andere Webseiten verwenden wir auch so genannte "Cookies" und den LocalStorage. Bei Cookies bzw. LocalStorage handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.</p>
              <p>Hierdurch erhalten wir bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser und Betriebssystem.</p>
              <p>Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies oder dem LocalStorage enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.</p>
              <p>In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.</p>
              <p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies oder localStorage betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies und LocalStorage akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies oder dem LocalStorage deaktiviert haben.</p>
              <h3>Speicherdauer und eingesetzte Cookies:</h3>
              <p>Soweit Sie uns durch Ihre Zustimmung die Verwendung von Cookies und dem LocalStorage erlauben, können folgende dinge gespeichert werden:</p>
              <ul>
                <li>Die Einstellung des DarkModes</li>
              </ul>
              <p></p>
              <p>Soweit diese Cookies bzw. der LocalStorage (auch) personenbezogene Daten betreffen können, informieren wir Sie darüber in den folgenden Abschnitten.</p>
              <p>Sie können über Ihre Browsereinstellungen einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
              <ul>
                <li>
                  Mozilla Firefox:
                  <a
                    href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen"
                    target="_blank"
                    rel="nofollow noopener"
                  >https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a>
                </li>
                <li>
                  Internet Explorer:
                  <a
                    href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"
                    target="_blank"
                    rel="nofollow noopener"
                  >https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
                </li>
                <li>
                  Google Chrome:
                  <a
                    href="https://support.google.com/accounts/answer/61416?hl=de"
                    target="_blank"
                    rel="nofollow noopener"
                  >https://support.google.com/accounts/answer/61416?hl=de</a>
                </li>
                <li>
                  Opera:
                  <a
                    href="http://www.opera.com/de/help"
                    target="_blank"
                    rel="nofollow noopener"
                  >http://www.opera.com/de/help</a>
                </li>
                <li>
                  Safari:
                  <a
                    href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE"
                    target="_blank"
                    rel="nofollow noopener"
                  >https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</a>
                </li>
              </ul>
              <p></p>
              <h2>SSL-Verschlüsselung</h2>
              <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
              <p></p>
              <h2>Eingesetzte Auftragsverarbeiter</h2>

              <p>Folgende Organisationen, Unternehmen bzw. Personen wurden vom Betreiber dieser Website mit der Verarbeitung von Daten beauftragt:</p>
              <p></p>
              <ul>
                <li>GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107</li>
                <li>GitHub B.V., Vijzelstraat 68-72, 1017 HL Amsterdam, The Netherlands</li>
                <li>netcup GmbH, Daimlerstraße 25, D-76185 Karlsruhe</li>
              </ul>
              <p></p>
              <p>
                Diese Website wird über GitHub Pages gehostet. Mehr Informationen auf
                <a
                  href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
                  target="_blank"
                  rel="nofollow noopener"
                >GitHub Global Privacy Practices</a>
                und
                <a
                  href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                  target="_blank"
                  rel="nofollow noopener"
                >GitHub Privacy Statement</a>.
              </p>

              <h2>Änderung unserer Datenschutzbestimmungen</h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
              <h2>Fragen an den Datenschutzbeauftragten</h2>
              <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person.</p>
              <br />
              <p>
                <em>
                  Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für
                  <a
                    href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
                    target="_blank"
                    rel="nofollow noopener"
                  >externe Datenschutzbeauftragte</a> (
                  <a
                    href="https://www.activemind.de/datenschutz/generatoren/datenschutzerklaerung/"
                    target="_blank"
                    rel="nofollow noopener"
                  >Version #2019-04-10</a> ).
                </em>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.privacy {
  color: black;
}
.privacyDark {
  color: white;
}
a {
  text-decoration: none;
}
</style>
