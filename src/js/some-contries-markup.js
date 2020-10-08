import refs from './refs';
import someCountriesTpl from '../templates/some-counties.hbs';

function updateSomeCountriesMarkup(country) {
  const markup = someCountriesTpl(country);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
}

export default updateSomeCountriesMarkup;
