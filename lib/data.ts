export interface Space {
  emoji: string;
  name: string;
  desc: string;
  color: string;
}

export type AuraType = 'open' | 'reflective' | 'focus' | 'transition' | 'active';

export interface AuraDef {
  color: string;
  label: string;
  hint: string;
}

export interface HeroNode {
  face: string;
  aura: AuraType;
  emoji: string;
  tag: string;
  x: { left?: string; right?: string };
  y: string;
  size: number;
  dur: number;
}

export interface Post {
  tag: string;
  clock: string;
  place: string;
  caption: string;
  /** Set to a path (e.g. '/assets/photo.jpg') to use a real photo, or null for the gradient placeholder. */
  image: string | null;
  grad: string;
  ph: string;
  eyebrow: string;
  heading: string;
  em: string;
  body: string;
}

export const SPACES: Space[] = [
  { emoji: '🏢', name: 'Career', desc: 'Work, builds, pivots', color: 'var(--c-career)' },
  { emoji: '🙏', name: 'Spiritual', desc: 'Faith, meaning, inner life', color: 'var(--c-spiritual)' },
  { emoji: '💰', name: 'Wealth', desc: 'Money, freedom, growth', color: 'var(--c-wealth)' },
  { emoji: '🏕️', name: 'Adventure', desc: 'Travel, risk, new ground', color: 'var(--c-adventure)' },
  { emoji: '💪', name: 'Health', desc: 'Body, mind, recovery', color: 'var(--c-health)' },
  { emoji: '🎨', name: 'Creative', desc: 'Making, expressing, building', color: 'var(--c-creative)' },
  { emoji: '📚', name: 'Learning', desc: 'Study, growth, new skills', color: 'var(--c-learning)' },
  { emoji: '💕', name: 'Relationships', desc: 'Love, friendship, family', color: 'var(--c-relation)' },
];

export const AURAS: Record<AuraType, AuraDef> = {
  open: { color: '#F3701E', label: 'Open to connect', hint: 'Reaching out' },
  reflective: { color: '#4E7D5E', label: 'Reflective', hint: 'Turned inward' },
  focus: { color: '#7E93B3', label: 'Deep focus', hint: 'Heads-down, away' },
  transition: { color: '#B97A1E', label: 'In transition', hint: 'Between chapters' },
  active: { color: '#8DD4A4', label: 'Active nearby', hint: 'Here, right now' },
};

export const HERO_NODES: HeroNode[] = [
  { face: '/assets/8.png', aura: 'open', emoji: '🎨', tag: 'Creative', x: { left: '4%' }, y: '20%', size: 300, dur: 7.5 },
  { face: '/assets/users new (6).png', aura: 'reflective', emoji: '💪', tag: 'Health', x: { left: '10%' }, y: '60%', size: 258, dur: 8.5 },
  { face: '/assets/12.png', aura: 'active', emoji: '📚', tag: 'Learning', x: { left: '2.5%' }, y: '40%', size: 232, dur: 6.8 },
  { face: '/assets/9.png', aura: 'transition', emoji: '💰', tag: 'Wealth', x: { right: '6%' }, y: '18%', size: 284, dur: 9 },
  { face: '/assets/10.png', aura: 'focus', emoji: '🏢', tag: 'Career', x: { right: '3.5%' }, y: '52%', size: 258, dur: 7.8 },
  { face: '/assets/13.png', aura: 'open', emoji: '🏕️', tag: 'Adventure', x: { right: '12%' }, y: '40%', size: 242, dur: 8 },
];

export const PROOF_FACES = [
  '/assets/users.png',
  '/assets/users-N.png',
  '/assets/users3.png',
  '/assets/users4.png',
  '/assets/users5.png',
];

export const AURA_ROW: Array<{ type: AuraType; face: string }> = [
  { type: 'open', face: '/assets/users.png' },
  { type: 'reflective', face: '/assets/users3.png' },
  { type: 'focus', face: '/assets/users4.png' },
  { type: 'transition', face: '/assets/users5.png' },
  { type: 'active', face: '/assets/users-N.png' },
];

export const POSTS: Post[] = [
  {
    tag: 'Just Grouv', clock: '23:41', place: 'Porto, Portugal',
    caption: 'Somewhere between doing too much and doing nothing. This is where I live right now.',
    image: '/assets/image-3.png',
    grad: 'linear-gradient(160deg,#2a1d12,#3a2a18 60%,#5a4226)',
    ph: 'Night · a quiet frame',
    eyebrow: 'A quieter kind of post',
    heading: "Some nights don't need a", em: 'paragraph.',
    body: "One frame, one honest line — the time, the place, the thing you'd never post anywhere public. Your circle sees it. No one else does.",
  },
  {
    tag: 'Root', clock: '06:14', place: 'Tuesday, first light',
    caption: 'Sky went from grey to gold and I decided that was reason enough to begin.',
    image: '/assets/23.png',
    grad: 'linear-gradient(160deg,#C9551A,#F3701E 55%,#F6A969)',
    ph: 'Sunrise · morning light',
    eyebrow: 'Root · a small lift',
    heading: 'Some mornings just', em: 'tilt right.',
    body: "The good days don't need a filter. Drop the moment in and the people in your chapter feel it lift with them.",
  },
  {
    tag: 'Root', clock: '14:09', place: 'Wednesday, deep work',
    caption: 'Inbox at zero for the first time in a month. Nobody else would care. You do.',
    image: '/assets/28.png',
    grad: 'linear-gradient(160deg,#2B3A4F,#4B607F 70%,#7E93B3)',
    ph: 'Desk · focused work',
    eyebrow: 'Root · heads down',
    heading: 'Progress nobody else would', em: 'clap for.',
    body: 'The quiet wins count here. Your circle roots for the grind, not the highlight reel.',
  },
  {
    tag: 'Just Grouv', clock: '21:36', place: 'Friday, kitchen floor',
    caption: 'Kitchen-floor dance break because the song came on. No reason needed.',
    image: '/assets/27.png',
    grad: 'linear-gradient(160deg,#7A2E55,#C2477E 60%,#E58AB4)',
    ph: 'Friends · the fun stuff',
    eyebrow: 'Just Grouv · for the joy of it',
    heading: "Joy doesn't need an", em: 'occasion.',
    body: 'The silly little moments are the point. Share them with the few who would laugh right along.',
  },
  {
    tag: 'Root', clock: '18:42', place: 'Saturday, new place',
    caption: 'Moved the last box in today. Walls are bare but it already feels like a beginning.',
    image: '/assets/26.png',
    grad: 'linear-gradient(160deg,#1E3028,#36523F 55%,#4E7D5E)',
    ph: 'New home · moving in',
    eyebrow: 'Root · a new chapter',
    heading: 'Beginnings rarely', em: 'announce themselves.',
    body: 'Big or small, every shift is a new space. Open one and let your circle grow into it with you.',
  },
  {
    tag: 'Just Grouv', clock: '08:21', place: 'Sunday, slow start',
    caption: "Coffee's hot, dog asleep on my feet, no plans till noon. Quietly, life is good.",
    image: '/assets/24.png',
    grad: 'linear-gradient(160deg,#6B4A24,#B97A1E 60%,#E0B26A)',
    ph: 'Calm · slow morning',
    eyebrow: 'Just Grouv · grateful',
    heading: 'The small, ordinary', em: 'good stuff.',
    body: "Not every post is a milestone. Sometimes it's just calm worth keeping and worth being seen.",
  },
  {
    tag: 'Root', clock: '19:58', place: 'Thursday, finally',
    caption: "Ran the 5k I swore I couldn't. Last, slow, and prouder than I've been in ages.",
    image: '/assets/25.png',
    grad: 'linear-gradient(160deg,#16242E,#2B4A4A 60%,#3E6E63)',
    ph: 'Outdoors · the run',
    eyebrow: 'Root · showed up',
    heading: 'Showed up, finished.', em: "That's the whole win.",
    body: 'Effort is the headline here. Your circle cheers the fact you laced up, not the time on the clock.',
  },
];
