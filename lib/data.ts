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
  { face: '/assets/8.png', aura: 'open', emoji: '🎨', tag: 'Creative', x: { left: '4%' }, y: '20%', size: 280, dur: 7.5 },
  { face: '/assets/9.png', aura: 'reflective', emoji: '💪', tag: 'Health', x: { left: '10%' }, y: '60%', size: 228, dur: 8.5 },
  { face: '/assets/10.png', aura: 'active', emoji: '📚', tag: 'Learning', x: { left: '2.5%' }, y: '40%', size: 212, dur: 6.8 },
  { face: '/assets/11.png', aura: 'transition', emoji: '💰', tag: 'Wealth', x: { right: '6%' }, y: '18%', size: 244, dur: 9 },
  { face: '/assets/12.png', aura: 'focus', emoji: '🏢', tag: 'Career', x: { right: '3.5%' }, y: '52%', size: 228, dur: 7.8 },
  { face: '/assets/13.png', aura: 'open', emoji: '🏕️', tag: 'Adventure', x: { right: '12%' }, y: '40%', size: 222, dur: 8 },
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
