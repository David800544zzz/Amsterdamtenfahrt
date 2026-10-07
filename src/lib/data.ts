export const TRIP_DESCRIPTION = `Willkommen zur Amsterdam Grachtenfahrt! Begleite uns auf einer malerischen Reise durch die historischen Grachten Amsterdams. Entlang der Route entdeckst du 16 ikonische Wahrzeichen und fotografierst typisch holländische Dinge, testest dein Wissen mit Grachten-Quizfragen und fängst deine eigenen Erinnerungen dieser unvergesslichen Tour ein. Lade an jedem Stop Fotos hoch, beantworte die Umfragen und teile deine Gedanken, um Punkte zu sammeln und in der Rangliste aufzusteigen!`;

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

export const THINGS_SPOTS = [
  { label: 'Das schiefste Haus' },
  { label: 'Das dünnste Haus' },
  { label: 'Das schönste Haus' },
  { label: 'Das schönste Boot' },
  { label: 'Ein Detail, was etwas über den Zustand der Grachten verrät' },
  { label: 'Ein Beispiel für fahrradgerechte Verkehrsführung' },
  { label: 'Ein Beispiel für eine autogerechte Stadt' },
  { label: 'Eine Sache die dir besonders ins Auge sticht' },
  { label: 'Die schönste Brücke' },
  { label: 'Die Brücke mit den meisten Fahrrädern' },
  { label: 'Etwas was du besonders Schön findest' },
  { label: 'Etwas was dir überhaupt nicht gefällt' },
];

export type PollQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const POLL_QUESTIONS: PollQuestion[] = [
  {
    question: 'Wie viele Jahre sind im Amsterdamer Stadsarchiv dokumentiert?',
    options: ['650 Jahre', '480 Jahre', '530 Jahre', '750 Jahre'],
    correctIndex: 3,
  },
  {
    question: 'Wann wurde Amsterdam Centraal eröffnet?',
    options: ['1. September 1906', '15. Oktober 1889', '24. Dezember 1994', '9. Juli 1871'],
    correctIndex: 1,
  },
  {
    question: 'In welchem Baustil ist Amsterdam Centraal gebaut?',
    options: [
      'Jugendstil (mit Einflüssen der Neorenaissance)',
      'Neorenaissance (mit Einflüssen der Neogotik)',
      'Historismus (mit Einflüssen des Eklektizismus)',
      'Klassizismus (mit Einflüssen des Jugendstils)',
    ],
    correctIndex: 1,
  },
  {
    question: 'Was sind die Themen des NEMO Science Museums?',
    options: [
      'Geologie, Petroleumgeologie, Erdölgeologie',
      'Ozeanographie, Meeresbiologie, Maritime Meteorologie',
      'Physik, Chemie, Biologie und Technik',
      'Funghi, Napoletana, Quattro Fermenti, Marinara, Margherita',
    ],
    correctIndex: 2,
  },
  {
    question: 'Wie tief sind die Grachten im Durchschnitt?',
    options: ['1,20 Meter', '3,60 Meter', '2,4 Meter', '2,9 Meter'],
    correctIndex: 2,
  },
  {
    question: 'Wie viele Fahrräder werden durchschnittlich jährlich aus den Grachten gezogen?',
    options: ['5.000–10.000', '10.000–15.000', '1.000–5.000', '15.000–20.000'],
    correctIndex: 1,
  },
  {
    question: 'Auf wie vielen Pfählen steht der königliche Palast in Amsterdam?',
    options: ['13.659', '19.114', '31.120', '9.608'],
    correctIndex: 0,
  },
  {
    question: 'In welchem Jahr wurden die ersten touristischen Grachtenfahrten angeboten?',
    options: ['1901', '1912', '1878', '2003'],
    correctIndex: 1,
  },
  {
    question: 'Wie viele Touristen nehmen in Amsterdam jährlich an einer Grachtenfahrt teil?',
    options: ['1.000.000 – 2.000.000', '2.500.000', '3.000.000 – 5.000.000', '6.000.000'],
    correctIndex: 2,
  },
  {
    question: 'Warum konnten sich die touristischen Grachtenfahrten anfangs nicht durchsetzen?',
    options: [
      'Der Betrieb der Boote war zu teuer',
      'Der Geruch der Grachten war zu unangenehm, da sie zu dieser Zeit noch als Kanalisation genutzt wurden',
      'Nachdem zwei Grachtenboote bei einem Unfall kollidierten und mehrere Menschen ums Leben kamen, wurden touristische Grachtenfahrten vorübergehend verboten',
      'Anfangs bestand kaum Interesse an diesem Angebot',
    ],
    correctIndex: 1,
  },
];

import { MAX_BONUS_UPLOADS } from '@/lib/supabase';

export const MAX_POINTS = PHOTO_SPOTS.length + THINGS_SPOTS.length + POLL_QUESTIONS.length + MAX_BONUS_UPLOADS + 1;
