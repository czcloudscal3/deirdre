export interface FilmProjectItem {
  year: string;
  title: string;
  role: string;
  type: string;
}

export const filmProjects: FilmProjectItem[] = [
  { year: '2023', title: 'Return to New York', role: 'Producer', type: 'Short' },
  { year: '2020', title: 'End of Summer Love', role: 'Producer', type: 'Short' },
  { year: '2014', title: 'Nobody', role: 'Executive Producer, Producer', type: 'TV Movie' },
  { year: '2013', title: 'Weird Whimsical Girls', role: 'Series Producer', type: 'TV Series' },
  { year: '2013', title: 'Santorini Blue', role: 'Executive Producer, Producer', type: 'Film' },
  { year: '2006', title: 'Copy That', role: 'Producer', type: 'Short' },
  { year: '2003', title: 'Focus Room', role: 'Producer', type: 'Short' },
];
