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

export const SPACES: Space[] = [
  { emoji: '🏢', name: 'Career',        desc: 'Work, builds, pivots',           color: 'var(--c-career)' },
  { emoji: '🙏', name: 'Spiritual',     desc: 'Faith, meaning, inner life',     color: 'var(--c-spiritual)' },
  { emoji: '💰', name: 'Wealth',        desc: 'Money, freedom, growth',         color: 'var(--c-wealth)' },
  { emoji: '🏕️', name: 'Adventure',     desc: 'Travel, risk, new ground',       color: 'var(--c-adventure)' },
  { emoji: '💪', name: 'Health',        desc: 'Body, mind, recovery',           color: 'var(--c-health)' },
  { emoji: '🎨', name: 'Creative',      desc: 'Making, expressing, building',   color: 'var(--c-creative)' },
  { emoji: '📚', name: 'Learning',      desc: 'Study, growth, new skills',      color: 'var(--c-learning)' },
  { emoji: '💕', name: 'Relationships', desc: 'Love, friendship, family',       color: 'var(--c-relation)' },
];

export const AURAS: Record<AuraType, AuraDef> = {
  open:       { color: 'var(--au-open)',       label: 'Open to connect', hint: 'Reaching out' },
  reflective: { color: 'var(--au-reflective)', label: 'Reflective',      hint: 'Turned inward' },
  focus:      { color: 'var(--au-focus)',      label: 'Deep focus',      hint: 'Heads-down, away' },
  transition: { color: 'var(--au-transition)', label: 'In transition',   hint: 'Between chapters' },
  active:     { color: 'var(--au-active)',     label: 'Active nearby',   hint: 'Here, right now' },
};

export const HERO_NODES: HeroNode[] = [
  { face: '/assets/face2.png', aura: 'open',       emoji: '🎨', tag: 'Creative',   x: { left: '4%' },    y: '20%', size: 96, dur: 7.5 },
  { face: '/assets/face8.png', aura: 'reflective', emoji: '💪', tag: 'Health',     x: { left: '10%' },   y: '60%', size: 78, dur: 8.5 },
  { face: '/assets/face5.png', aura: 'active',     emoji: '📚', tag: 'Learning',   x: { left: '2.5%' },  y: '40%', size: 62, dur: 6.8 },
  { face: '/assets/face3.png', aura: 'transition', emoji: '💰', tag: 'Wealth',     x: { right: '6%' },   y: '18%', size: 84, dur: 9 },
  { face: '/assets/face4.png', aura: 'focus',      emoji: '🏢', tag: 'Career',     x: { right: '3.5%' }, y: '52%', size: 98, dur: 7.8 },
  { face: '/assets/face7.png', aura: 'open',       emoji: '🏕️', tag: 'Adventure',  x: { right: '12%' },  y: '40%', size: 62, dur: 8 },
];

export const PROOF_FACES = [
  '/assets/face5.png',
  '/assets/face4.png',
  '/assets/face2.png',
  '/assets/face7.png',
  '/assets/face6.png',
];

export const AURA_ROW: Array<{ type: AuraType; face: string }> = [
  { type: 'open',       face: '/assets/face1.png' },
  { type: 'reflective', face: '/assets/face2.png' },
  { type: 'focus',      face: '/assets/face3.png' },
  { type: 'transition', face: '/assets/face7.png' },
  { type: 'active',     face: '/assets/face6.png' },
];
