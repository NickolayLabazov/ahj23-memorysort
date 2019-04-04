export default class TablFilms {
  constructor() {
    this.films = 0;
    this.counter = 0;
    this.div = 0;
  }

  tablCreate() {
    if (this.counter > 0) {
      document.body.removeChild(this.div);
      this.div = 0;
    }
    if (this.counter === 8) {
      this.counter = 0;
    }
    const filmRows = [];
    this.div = document.createElement('div');
    this.div.appendChild(this.titleRow());
    document.body.appendChild(this.div);
    for (const film of this.films) {
      const filmRow = document.createElement('tr');
      filmRow.setAttribute('data-id', film.id);
      filmRow.setAttribute('data-title', film.title);
      filmRow.setAttribute('data-year', film.year);
      filmRow.setAttribute('data-imdb', film.imdb);
      for (const elem in film) {
        const cell = document.createElement('td');
        if (elem === 'imdb') {
          cell.innerHTML = film[elem].toFixed(2);
        } else {
          cell.innerHTML = film[elem];
        }
        cell.style.padding = '5px';
        cell.style.border = '1px solid black';
        filmRow.appendChild(cell);
      }
      filmRows.push(filmRow);
    }
    for (const filmRow of filmRows) {
      this.div.appendChild(filmRow);
    }

    const arrowSpan = document.createElement('span');
    if (this.counter === 0) {
      arrowSpan.innerHTML = '&#8595';
      this.div.childNodes[0].childNodes[0].appendChild(arrowSpan);
    } else if (this.counter === 1) {
      arrowSpan.innerHTML = '&#8593';
      this.div.childNodes[0].childNodes[0].appendChild(arrowSpan);
    } else if (this.counter === 2) {
      arrowSpan.innerHTML = '&#8595';
      this.div.childNodes[0].childNodes[1].appendChild(arrowSpan);
    } else if (this.counter === 3) {
      arrowSpan.innerHTML = '&#8593';
      this.div.childNodes[0].childNodes[1].appendChild(arrowSpan);
    } else if (this.counter === 4) {
      arrowSpan.innerHTML = '&#8595';
      this.div.childNodes[0].childNodes[2].appendChild(arrowSpan);
    } else if (this.counter === 5) {
      arrowSpan.innerHTML = '&#8593';
      this.div.childNodes[0].childNodes[2].appendChild(arrowSpan);
    } else if (this.counter === 6) {
      arrowSpan.innerHTML = '&#8595';
      this.div.childNodes[0].childNodes[3].appendChild(arrowSpan);
    } else if (this.counter === 7) {
      arrowSpan.innerHTML = '&#8593';
      this.div.childNodes[0].childNodes[3].appendChild(arrowSpan);
    }
  }

  sortTabl() {
    const compare = (a, b) => {
      if (this.counter === 0) {
        return a.id - b.id;
      }
      if (this.counter === 1) {
        return b.id - a.id;
      }
      if (this.counter === 2) {
        for (let i = 0; i < Math.min(a.title.length, b.title.length); i += 1) {
          if (a.title[i] > b.title[i]) {
            return 1;
          } if (b.title[i] > a.title[i]) {
            return -1;
          }
        }
        if (a.title.length < b.title.length) { return -1; }
        return 1;
      }
      if (this.counter === 3) {
        for (let i = 0; i < Math.min(a.title.length, b.title.length); i += 1) {
          if (a.title[i] < b.title[i]) {
            return 1;
          } if (b.title[i] < a.title[i]) {
            return -1;
          }
        }
        if (a.title.length < b.title.length) { return 1; }
        return -1;
      }
      if (this.counter === 4) {
        return a.imdb - b.imdb;
      }
      if (this.counter === 5) {
        return b.imdb - a.imdb;
      }
      if (this.counter === 6) {
        return a.year - b.year;
      }
      if (this.counter === 7) {
        return b.year - a.year;
      }
    };

    this.films.sort(compare);
    setTimeout(() => {
      this.counter += 1;
      this.tablCreate();
      this.sortTabl();
    }, 2000);
  }

  titleRow() {
    const head = document.createElement('tr');
    for (const elem in this.films[0]) {
      const cell = document.createElement('td');
      cell.innerHTML = elem;
      cell.style.padding = '5px';
      cell.style.border = '1px solid black';
      head.appendChild(cell);
    }
    return head;
  }

  init(films) {
    this.films = films;
    this.tablCreate();
    this.sortTabl();
  }
}
