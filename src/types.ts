export interface Profile {
  name: string;
  englishName: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  avatarUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Design/Tools';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  tags: string[];
  role: string;
  period: string;
  keyFeature: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface QAItem {
  id: string;
  question: string;
  answer: string;
  iconName: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
}
