<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex cols="12">
        <v-card>
          <v-card-text>
            <div :class="{ privacyDark: darkMode, privacy: !darkMode }">
              <h1>Datenschutzerklärung</h1>
              <br />

              <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
              <p>
                Max Henkel
                <br />
                <br />E-Mail:
                <br />
                <img v-if="darkMode" :src="require('@/assets/mail.svg')" height="14px" />
                <img v-else :src="require('@/assets/mail-black.svg')" height="14px" />
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
              <p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.</p>
              <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
              <ul>
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken.</li>
              </ul>
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
              <h2>SSL-Verschlüsselung</h2>
              <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
              <p></p>
              <h2>Änderung unserer Datenschutzbestimmungen</h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
              <h2>Fragen an den Datenschutzbeauftragten</h2>
              <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
              <h2>Auftragsdatenverarbeitung</h2>

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
              <p>Wenn Sie unsere Webseite aufrufen, werden Daten über die sicheren Server von GitHub (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107 oder GitHub B.V., Vijzelstraat 68-72, 1017 HL Amsterdam, The Netherlands) und netcup GmbH (Daimlerstraße 25, D-76185 Karlsruhe), verschlüsselt per SSL zwischen den Servern von GitHub/netcup und Ihrem Endgerät ausgetauscht. Auf den sicheren Servern wird temporär jeden Zugriff in einer Protokolldatei gespeichert.</p>
              <br />
              <a
                href="https://www.activemind.de/datenschutz/generatoren/datenschutzerklaerung/"
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
