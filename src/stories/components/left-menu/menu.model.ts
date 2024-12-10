import { sep } from 'node:path';

export const Menu = [
  {
    label: 'Mana darba vieta',
    expanded: true,
    items: [
      {
        label: 'Alga',
        items: [],

        route: '',
      },
      {
        label: 'Atvaļinājumi',

        items: [],
        route: '',
      },
      {
        label: 'Mācību pieteikumi',
        items: [],
        route: '',
      },
      {
        label: 'Izdevumi',

        items: [],
        route: '',
      },
      {
        label: 'Komandējumi',

        items: [],
        route: '',
      },
      {
        label: 'Noderīgi',
        seperator: true,
      },
      {
        label: 'Atskaites',
        items: [],
        route: '',
      },
      {
        label: 'Meklēt kolēģi',
        items: [],

        route: '',
      },
      {
        label: 'Prombūtnes kalendārs',
        items: [],

        route: '',
      },
      {
        label: 'Ārējās saites',
        items: [],
        route: '',
      },
    ],
  },
  {
    label: 'Darba rīki',
    expanded: false,
    items: [
      {
        label: 'Rēķini',
        items: [],
        route: '',
      },
      {
        label: 'Esmu iepazinies',
        items: [],

        route: '',
      },
      {
        label: 'Darbinieki',
        items: [],

        route: '',
      },
      {
        label: 'Materiālie resursi',
        items: [],

        route: '',
      },
      {
        label: 'Krājumu norakstīšana',

        items: [],
        route: '',
      },
      {
        label: 'Darba laika uzskaite',
        items: [],
        route: '',
      },
      {
        label: 'Darba laika plānošana',

        items: [],
        route: '',
      },
      {
        label: 'Darba plūsmas',

        items: [],
        route: '',
      },
    ],
  },
  {
    label: 'Administrēšana',
    expanded: false,
    items: [
      {
        label: 'Sistēma un uzstādījumi',
        seperator: true,
      },
      {
        label: 'Lietotāju pārvaldība',

        items: [],
        route: '',
      },
      {
        label: 'Licences pārvaldība',

        items: [],
        route: '',
      },
      {
        label: 'Moduļi',

        items: [],
        route: '',
      },
      {
        label: 'Darba laika plānošana',

        items: [],
        route: '',
      },
      {
        label: 'Pārvaldība',
        seperator: true,
      },

      {
        label: 'Organizācijas',

        items: [],
        route: '',
      },
      {
        label: 'Serviss',

        items: [],
        route: '',
      },
    ],
  },
];
