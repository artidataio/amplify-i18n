import { useState } from "react";
import { I18n } from "aws-amplify";
import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
I18n.putVocabularies(translations);

const languages = [
  "en", // English
  "zh", // Chinese
  "nl", // Dutch
  "fr", // French
  "de", // German
  "id", // Indonesian
  "it", // Italian
  "ja", // Japanese
  "kr", // Korean
  "pl", // Polish
  "pt", // Portuguese
  "es", // Spanish
  "sv", // Swedish
  "tr" // Turkish
];
export default function App() {
  const [lang, setLang] = useState("en");

  I18n.setLanguage(lang);

  return (
    <>
      {languages.map((val) => (
        <button key={val} onClick={() => setLang(val)}>
          {val}
        </button>
      ))}
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </>
  );
}
