import '../css/style.css';
import TablFilms from './tablFilmsClass.js';

const tablFilms = new TablFilms();

const films = [
  {
    id: 26, title: 'Побег из Шоушенка', imdb: 9.30, year: 1994,
  },
  {
    id: 25, title: 'Крестный отец', imdb: 9.20, year: 1972,
  },
  {
    id: 27, title: 'Крестный отец 2', imdb: 9.00, year: 1974,
  },
  {
    id: 1047, title: 'Темный рыцарь', imdb: 9.00, year: 2008,
  },
  {
    id: 223, title: 'Криминальное чтиво', imdb: 8.90, year: 1994,
  },
];

tablFilms.init(films);
