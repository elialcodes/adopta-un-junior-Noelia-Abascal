import studyImage from '../assets/images/study.jpg';
import groupImage from '../assets/images/group.jpg';
import computerImage from '../assets/images/computer.jpg';
import roadImage from '../assets/images/road.jpg';

export interface Motive {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const MOTIVES: Motive[] = [
  {
    id: 1,
    title: 'Me gusta aprender',
    description: 'Me queda mucho camino, pero ya lo he empezado!',
    image: studyImage,
  },
  {
    id: 2,
    title: 'Me siento a gusto en grupo',
    description:
      'Compartir conocimientos, logros y frustraciones siempre es mejor.',
    image: groupImage,
  },
  {
    id: 3,
    title: 'Quiero ser developer',
    description:
      'Se que me voy a dedicar a ello algún día, pero mientras, a programar se aprende programando.',
    image: computerImage,
  },
  {
    id: 4,
    title: 'Nunca es tarde',
    description:
      'He reconducido mi carrera profesional con 46 años, pero nunca es tarde si lo deseas con ganas.',
    image: roadImage,
  },
];
