export const TRIP_DESCRIPTION = `Willkommen zur Amsterdam Grachtenfahrt! Begleite uns auf einer malerischen Reise durch die historischen Grachten Amsterdams. Entlang der Route entdeckst du 16 ikonische Wahrzeichen, testest dein Wissen mit Grachten-Quizfragen und fängst deine eigenen Erinnerungen dieser unvergesslichen Tour ein. Lade an jedem Stop Fotos hoch, beantworte die Umfragen und teile deine Gedanken, um Punkte zu sammeln und in der Rangliste aufzusteigen!`;

export const PHOTO_SPOTS = [
  { label: 'Anne-Frank Huis', detail: 'Im Hinterhaus des Prinsengracht 263 schrieb Anne Frank ihr berühmtes Tagebuch. Der Westertoren schlug die Viertelstunden, die sie im Versteck hörte.' },
  { label: 'Westerkerk & Westertoren', detail: 'Der 87 Meter hohe Westertoren ist der höchsten Kirchturm Amsterdams. Seine Turmkugel kann bestiegen werden und bietet einen Blick über die ganze Stadt.' },
  { label: 'Magere Brug', detail: 'Die „Magere Brug" ist die bekannteste der über 1.200 Brücken Amsterdams. Traditionell klapppt sie hoch, um Schiffe passieren zu lassen — nachts leuchtet sie romantisch.' },
  { label: 'Damrak', detail: 'Der Damrak war einst ein offener Gracht und der Hafen der Stadt. Heute ist es die prachtvolle Einfahrt vom Bahnhof zum Dam, gesäumt von historischen Gebäuden.' },
  { label: 'Amsterdam Centraal', detail: 'Der Bahnhof wurde 1889 eröffnet und steht auf über 8.600 Holzpfählen im Wasser. Das Gebäude marks the engineering marvel of its time.' },
  { label: "A'DAM Tower", detail: "Der A'DAM Tower hat eine schwingende Schaukel auf dem Dach, die über den Rand hinaus ragt. Von der 20. Etage hat man den besten 360°-Blick über Amsterdam." },
  { label: 'NEMO Science Museum', detail: 'Das Gebäude erinnert an einen sinkenden Schiffsrumpf und wurde von Renzo Piano entworfen. Auf dem Dach liegt ein schiefeförfiger Platz, der im Sommer öffentlich ist.' },
  { label: 'Royal Theater Carré', detail: 'Das Carré war ursprünglich ein Zirkustheater aus 1887 und steht direkt am Amstel. Heute werden hier Musicals und Shows aufgeführt — die Kuppel verbirgt eine originale Manege.' },
  { label: 'Amstel Hotel', detail: 'Das 1867 eröffnete Amstel Hotel ist eines der ältesten Grand-Hotels Europas. Jährlich werden hier die Preise des Königs verliehen.' },
  { label: 'De Negen Straatjes', detail: 'Die „Negen Straatjes" (Neun Straßen) verbinden vier Grachten und bilden ein charmantes Viertel voller Boutiquen, Galerien und Cafés in historischen Grachtenhäusern.' },
  { label: 'Gouden Bocht', detail: 'Die „Goldene Biegung" am Herengracht ist die prachtvollste Grachtenseite Amsterdams. Hier stehen die breitesten und reichsten Grachtenhäuser, die im 17. Jahrhundert für die reichsten Händler gebaut wurden.' },
  { label: 'Het Scheepvaartmuseum & VOC-schip Amsterdam', detail: 'Das Museum war einst das Admiralitätsarsenal der holländischen Kriegsmarine. Das nachgebaute VOC-Schiff „Amsterdam" liegt vor dem Gebäude und kann betreten werden.' },
  { label: 'Rijksmuseum', detail: 'Das Rijksmuseum hat über 8.000 Exponate, davon 8 Meisterwerke von Rembrandt. Das berühmteste ist „Die Nachtwache". Das Gebäude selbst hat einen Durchgang für Fahrräder und Fußgänger.' },
  { label: 'Stadsarchief Amsterdam (De Bazel)', detail: 'Das Gebäude „De Bazel" wurde 1926 als Bankgebäude entworfen und gilt als Höhepunkt der Amsterdamer Schule. Heute beherbergt es das Stadtarchiv mit Originaldokumenten aus 700 Jahren Stadtgeschichte.' },
  { label: 'De Nationale Opera & Ballet', detail: 'Das Gebäude am Waterlooplein wurde 1986 eröffnet und hat die größte Bühne der Niederlande. Hier residieren sowohl die Niederländische Oper als auch das Het Nationale Ballet.' },
  { label: 'Eye', detail: 'Das Eye Filmmuseum hat die Form eines riesigen weißen Diakastens und reflects light wie eine Kinoleinwand. Drinnen gibt es eine Filmothek, in der man kostenlos tausende Filme schauen kann.' },
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
