const
    SearchInput = document.getElementById('searchInput'),
    SearchButton = document.getElementById('searchBtn'),
    flagSection = document.querySelector('.flag-section');
loadingAnimation = document.querySelector('.loading-animation');

SearchInput.addEventListener('input', () => {
    SearchInput.classList.toggle('filled', (SearchInput.value.trim() !== ""))
});

SearchButton.onclick = async () => {

    let CountryName = SearchInput.value;
    const FinalURL = `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`;

    const response = await fetch(FinalURL);
    const data = await response.json();

    if (response.ok) {
        loadingAnimation.classList.add('load');
        setTimeout(() => {
            const flagURL = data[0].flags.png;
            flagSection.innerHTML =
                `<img src = "${flagURL}">`
            loadingAnimation.classList.remove('load');
        }, 1200);
    } else {
        alert("Invalid Country Name");
    }
    SearchInput.value = "";
}
