function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en', includedLanguages: 'en,fr,ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
      'google_translate_element'
    );
  }