const artist = [
    { id: 12, Name: 'Sefuda' },
    { id: 13, Name: 'Tamima' },
    { id: 14, Name: 'Nasir' },
    { id: 15, Name: 'Subah' }
];

const names = artist.map(s => s.Name);
const Ids = artist.map(s => s.id);
const bigger = artist.filter(s => s.id > 13);
const biggerOne = artist.find(s => s.id > 13);
console.log(biggerOne);