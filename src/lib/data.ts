export const TRIP_DESCRIPTION = `Willkommen zur Amsterdam Grachtenfahrt! Begleite uns auf einer malerischen Reise durch die historischen Grachten Amsterdams. Entlang der Route entdeckst du 10 ikonische Wahrzeichen, testest dein Wissen mit Grachten-Quizfragen und fängst deine eigenen Erinnerungen dieser unvergesslichen Tour ein. Lade an jedem Stop Fotos hoch, beantworte die Umfragen und teile deine Gedanken, um Punkte zu sammeln und in der Rangliste aufzusteigen!`;

export const PHOTO_SPOTS = [
  { label: 'Magere Brug', detail: 'Die berühmte schmale Brücke über den Amstel, eines der ikonischsten Wahrzeichen Amsterdams.' },
  { label: 'Anne-Frank-Haus', detail: 'Ein ergreifendes Museum, das der jüdischen Tagebuchschreiberin gewidmet ist, die während des Zweiten Weltkriegs vor der Verfolgung versteckt lebte.' },
  { label: 'Westerkerk', detail: 'Eine protestantische Kirche aus dem 17. Jahrhundert mit einem markanten Turm, gelegen am Prinsengracht-Kanal.' },
  { label: 'Negen Straatjes', detail: 'Die Neun Straßen — ein charmantes Einkaufsviertel mit Boutiquen und gemütlichen Cafés.' },
  { label: 'Bloemenmarkt', detail: 'Der einzige schwimmende Blumenmarkt der Welt, Heimat von lebhaften Tulpen und Souvenirs.' },
  { label: 'Rijksmuseum', detail: 'Das niederländische Nationalmuseum mit Meisterwerken von Rembrandt, Vermeer und anderen Großen.' },
  { label: 'Van-Gogh-Museum', detail: 'Die größte Sammlung von Gemälden und Briefen Van Goghs weltweit.' },
  { label: 'Leidseplein', detail: 'Ein lebhafter Platz, bekannt für sein Nachtleben, Straßenkünstler und fröhliche Terrassen.' },
  { label: 'Jordaan', detail: 'Ein malerisches Viertel mit engen Grachten, Hausbooten und versteckten Innenhöfen.' },
  { label: 'Amsterdam Centraal', detail: 'Der prachtvolle Bahnhof im Neo-Renaissance-Stil, der Reisende bei der Ankunft begrüßt.' },
];

export type PollQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const POLL_QUESTIONS: PollQuestion[] = [
  {
    question: 'Wie viele Grachten gibt es in Amsterdam?',
    options: ['Etwa 65', 'Etwa 100', 'Etwa 165', 'Etwa 250'],
    correctIndex: 2,
  },
  {
    question: 'Was bedeutet „gracht" auf Niederländisch?',
    options: ['Brücke', 'Gracht', 'Straße', 'Hafen'],
    correctIndex: 1,
  },
  {
    question: 'Welcher Fluss fließt durch Amsterdam?',
    options: ['Rhein', 'Maas', 'Amstel', 'IJssel'],
    correctIndex: 2,
  },
  {
    question: 'Wie viele Brücken gibt es in Amsterdam?',
    options: ['Etwa 400', 'Etwa 800', 'Etwa 1.200', 'Etwa 1.800'],
    correctIndex: 3,
  },
  {
    question: 'Wann wurde die Magere Brug erstmals gebaut?',
    options: ['1691', '1740', '1815', '1875'],
    correctIndex: 0,
  },
  {
    question: 'Welches Museum befindet sich am Museumplein?',
    options: ['Anne-Frank-Haus', 'Rijksmuseum', 'NEMO', 'Het Scheepvaartmuseum'],
    correctIndex: 1,
  },
  {
    question: 'Wofür werden die Hausboote auf den Grachten genutzt?',
    options: ['Nur Lagerung', 'Wohnräume', 'Touristenläden', 'Restaurants'],
    correctIndex: 1,
  },
  {
    question: 'Wie viele Fahrräder gibt es schätzungsweise in Amsterdam?',
    options: ['Etwa 300.000', 'Etwa 500.000', 'Etwa 881.000', 'Etwa 1,2 Millionen'],
    correctIndex: 2,
  },
  {
    question: 'Was ist ein „grachtenpand"?',
    options: ['Eine Art Boot', 'Ein Grachtenhaus', 'Ein Blumenmarkt', 'Eine Brücke'],
    correctIndex: 1,
  },
  {
    question: 'Welches UNESCO-Weltkulturerbe umfasst die Grachten?',
    options: ['Der Grachtengürtel', 'Der Dam-Platz', 'Das Rotlichtviertel', 'Der Hafen'],
    correctIndex: 0,
  },
];

import { MAX_BONUS_UPLOADS } from '@/lib/supabase';

export const MAX_POINTS = PHOTO_SPOTS.length + POLL_QUESTIONS.length + MAX_BONUS_UPLOADS + 1;
