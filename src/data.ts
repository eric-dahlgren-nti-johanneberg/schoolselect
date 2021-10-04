import { Category, Program, School } from './types'

const categories: Category[] = [
  {
    slug: 'civil/mjukvara',
    name: 'Civilingenjör - Mjukvara',
  },
]

const skolor: School[] = [
  {
    name: 'Blekinge tekniska högskola',
    locationName: 'Karlskrona',
  },
]
const programs: Program[] = [
  {
    name: 'Civilingenjör i mjukvaruutveckling',
    credits: 300,
    school: skolor[0],
    code: 'BTH-87053',
    exam: 'Civilingenjörsexamen',
    language: 'Svenska',
    level: 'Grund-avancerad',
    open: false,
    pace: 'Helfart',
    teachingForm: 'Program, Normal',
    requirements:
      'Grundläggande behörighet samt Matematik 4, Fysik 2, och Kemi 1.',
    tags: [
      'Datateknik',
      'Datavetenskap',
      'Informationsteknik',
      'Människa- datorinteraktion',
    ],
    link: 'https://www.bth.se/utbildning/program/paamj/?val=PAAMJ22H',
    startPeriod: 'Hösten 2022 Period 1',
    teachingTime: 'Dagtid',
    category: [categories[0]],
  },
  {
    name: 'Civilingenjör i industriell ekonomi',
    credits: 300,
    school: skolor[0],
    code: 'BTH-23481',
    exam: 'Civilingenjörsexamen',
    language: 'Svenska',
    level: 'Grund-avancerad',
    open: false,
    pace: 'Helfart',
    teachingForm: 'Program, Normal',
    requirements:
      'Grundläggande behörighet samt Matematik 4, Fysik 2, och Kemi 1.',
    tags: [
      'Industriell ekonomi',
      'industriell',
      'Informationsteknik',
      'Människa- datorinteraktion',
    ],
    link: 'https://www.bth.se/utbildning/program/paamj/?val=PAAMJ22H',
    startPeriod: 'Hösten 2022 Period 1',
    teachingTime: 'Dagtid',
    category: [categories[0]],
  },
]

export { skolor, programs }
