import { Lesson } from '../types/Lesson';

export const mockLessons: Record<string, Lesson> = {
  'ACHAMANAM': {
    code: 'ACHAMANAM',
    title: 'Achamanam',
    description: 'Achamanam',
    videoId: 1035225867,
    steps: [{startTime: 0}, {startTime: 5.6}, {startTime: 10.7}, {startTime: 16.9}],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 20.6
  },
'BHASMADHARANAM': {
    code: 'BHASMADHARANAM',
    title: 'Bhasmadharanam',
    description: 'Bhasmadharanam',
    videoId: 1035839470,
    steps: [{startTime: 0}, {startTime: 8.7}, {startTime: 12.2}, {startTime: 14.5}, {startTime: 16.8}],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 21.1
  },
  'SANKALPA_PRATAH': {
    code: 'SANKALPA_PRATAH',
    title: 'Sankalpa',
    description: 'Sankalpa Prathaha',
    videoId: 1035227699,
    steps: [{startTime: 0}, {startTime: 4.9}, {startTime: 6.7}, {startTime: 9.2}, {startTime: 11.5}],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 14.4
  },
  'MARJANAM1': {
    code: 'MARJANAM1',
    title: 'Marjanam 1',
    description: 'Marjanam 1',
    videoId: 1035839836,
    steps: [
      {startTime: 0}, 
      {startTime: 2.3}, 
      {startTime: 5.7}, 
      {startTime: 9.5}, 
      {startTime: 13.5}, 
      {startTime: 17.6}, 
      {startTime: 21.7}, 
      {startTime: 25.1}, 
      {startTime: 28.7}, 
      {startTime: 32.5}
    ],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 37.6
  },
  'MARJANAM2_PRATAH': {
    code: 'MARJANAM2_PRATAH',
    title: 'Marjanam 2 Prathaha',
    description: 'Marjanam 2 Prathaha',
    videoId: 1035840182,
    steps: [
      {startTime: 0}, 
      {startTime: 2.6}, 
      {startTime: 5.4}, 
      {startTime: 8.9}, 
      {startTime: 11.7}, 
      {startTime: 14.3}, 
      {startTime: 17.7}, 
      {startTime: 20.7}, 
      {startTime: 23.3}, 
      {startTime: 26.0}, 
      {startTime: 28.2}, 
      {startTime: 30.8},
      {startTime: 35.0},
    ],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 37.76
  },
  'MARJANAM3': {
    code: 'MARJANAM3',
    title: 'Marjanam 3',
    description: 'Marjanam 3',
    videoId: 1035840651,
    steps: [
      {startTime: 0}, 
      {startTime: 1.7}, 
      {startTime: 4.9}, 
      {startTime: 7.8}, 
      {startTime: 10.6}, 
    ],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 14.5
  },
  'GAYATRI_JAPA': {
    code: 'GAYATRI_JAPA',
    title: 'Gayatri Japa',
    description: 'Gayatri Japa',
    videoId: 1035230909,
    steps: [{startTime: 0}],
    isLoopedLesson: true,
    loopCount: 1,
    duration: 15
  },
  'LOOP_SAMPLE': {
    code: 'LOOP_SAMPLE',
    title: 'Loop Sample',
    description: 'Loop Sample',
    videoId: 1035128452,
    steps: [{startTime: 0}, {startTime: 1.5}, {startTime: 2.5}, {startTime: 3.5}],
    isLoopedLesson: true,
    loopCount: 1,
    duration: 4
}, 
  'SANKALPA_SAYAM': {
    code: 'SANKALPA_SAYAM',
    title: 'Sankalpa Sayaam',
    description: 'Sankalpa Sayaam',
    videoId: 1034691854,
    steps: [{startTime: 0}, {startTime: 10}, {startTime: 20}, {startTime: 30}],
    isLoopedLesson: false,
      loopCount: 0,
    duration: 4
  },
  'ARGHYAM_PRATAH': {
    code: 'ARGHYAM_PRATAH',
    title: 'Arghyam Prathaha',
    description: 'Arghyam Prathaha',
    videoId: 1034691854,
    steps: [{startTime: 0}, {startTime: 10}, {startTime: 20}, {startTime: 30}],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 4
  },
  'ARGHYAM_SAYAAM': {
    code: 'ARGHYAM_SAYAAM',
    title: 'Arghyam Sayaam',
    description: 'Arghyam Sayaam',
    videoId: 1034691854,
    steps: [{startTime: 0}, {startTime: 10}, {startTime: 20}, {startTime: 30}],
    isLoopedLesson: false,
    loopCount: 0,
    duration: 4
  }, 
};

// Helper functions to work with lessons
export const getLessonByCode = (code: string): Lesson  => {
  return mockLessons[code];
};

export const getAllLessons = (): Lesson[] => {
  return Object.values(mockLessons);
}; 