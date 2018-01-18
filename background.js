const BASE_URL = "https://www.youtube.com/results?search_query=";

browser.omnibox.setDefaultSuggestion({
    description: 'Search youtube by typing "youtube <search query>"'
});

// Open the page based on how the user clicks on a suggestion.
browser.omnibox.onInputEntered.addListener((text, disposition) => {
    let url = BASE_URL + text
    browser.tabs.update({
        url
    });
});
