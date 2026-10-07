export const ChangeTypes = [
  'none',
  'added',
  'newAdd',
  'fixed',
  'changed',
  'deprecated',
  'removed',
  'breaking',
  'version',
  'other',
] as const;

export type ChangeType = (typeof ChangeTypes)[number];
