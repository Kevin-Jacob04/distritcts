import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mockData = [
  {
    id: 1,
    title: 'Thiruvananthapuram',
    description: 'The capital district of Kerala, known for Kovalam beach, Padmanabhaswamy temple, and cultural landmarks.',
    image: 'triv.png',
    link: 'https://en.wikipedia.org/wiki/Thiruvananthapuram_district'
  },
  {
    id: 2,
    title: 'Kollam',
    description: 'Renowned for its historic trade routes, backwaters, and cashew processing industry.',
    image: 'kollam.png',
    link: 'https://en.wikipedia.org/wiki/Kollam_district'
  },
  {
    id: 3,
    title: 'Pathanamthitta',
    description: 'Known for Sabarimala pilgrimage and its serene forested landscapes.',
    image: 'pathanm.png',
    link: 'https://en.wikipedia.org/wiki/Pathanamthitta_district'
  },
  {
    id: 4,
    title: 'Alappuzha',
    description: 'Famous for its houseboats, coir industries, and picturesque backwaters.',
    image: 'allapy.png',
    link: 'https://en.wikipedia.org/wiki/Alappuzha_district'
  },
  {
    id: 5,
    title: 'Kottayam',
    description: 'A hub of education, publishing, and rubber plantations in Kerala.',
    image: 'kottayam.png',
    link: 'https://en.wikipedia.org/wiki/Kottayam_district'
  },
  {
    id: 6,
    title: 'Idukki',
    description: 'A high-range district known for its arch dam, tea estates, and wildlife sanctuaries.',
    image: 'idukki.png',
    link: 'https://en.wikipedia.org/wiki/Idukki_district'
  },
  {
    id: 7,
    title: 'Ernakulam',
    description: 'The commercial capital of Kerala, home to Kochi, a major port city.',
    image: 'kochi.png',
    link: 'https://en.wikipedia.org/wiki/Ernakulam_district'
  },
  {
    id: 8,
    title: 'Thrissur',
    description: 'Cultural capital of Kerala, famed for its temples, festivals, and art.',
    image: 'thri.png',
    link: 'https://en.wikipedia.org/wiki/Thrissur_district'
  },
  {
    id: 9,
    title: 'Palakkad',
    description: 'Known for its paddy fields, historic forts, and the Palakkad Gap.',
    image: 'palak.png',
    link: 'https://en.wikipedia.org/wiki/Palakkad_district'
  },
  {
    id: 10,
    title: 'Malappuram',
    description: 'A hilly district rich in heritage, sports, and educational institutions.',
    image: 'mala.png',
    link: 'https://en.wikipedia.org/wiki/Malappuram_district'
  },
  {
    id: 11,
    title: 'Kozhikode',
    description: 'Historic port city known for the spice trade, beaches, and unique cuisine.',
    image: 'kozhi.png',
    link: 'https://en.wikipedia.org/wiki/Kozhikode_district'
  },
  {
    id: 12,
    title: 'Wayanad',
    description: 'A scenic hill district with tribal communities, waterfalls, and wildlife sanctuaries.',
    image: 'Wayanad.png',
    link: 'https://en.wikipedia.org/wiki/Wayanad_district'
  },
  {
    id: 13,
    title: 'Kannur',
    description: 'Famous for Theyyam rituals, handloom textiles, and beautiful beaches.',
    image: 'kannur.png',
    link: 'https://en.wikipedia.org/wiki/Kannur_district'
  },
  {
    id: 14,
    title: 'Kasaragod',
    description: 'Northernmost district of Kerala, known for Bekal Fort and linguistic diversity.',
    image: 'kasar.png',
    link: 'https://en.wikipedia.org/wiki/Kasaragod_district'
  }
];


}
