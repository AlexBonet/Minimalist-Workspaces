import { describe, it, expect } from 'vitest';
import { ui, LANGUAGES } from '../../i18n/ui';

describe('i18n Configuration', () => {
  it('should have correct language labels', () => {
    expect(LANGUAGES.en).toBe('English');
    expect(LANGUAGES.es).toBe('Español');
  });

  it('should have matching keys for English and Spanish', () => {
    const enKeys = Object.keys(ui.en).sort();
    const esKeys = Object.keys(ui.es).sort();
    
    expect(enKeys).toEqual(esKeys);
  });

  it('should contain critical navigation keys', () => {
    expect(ui.en).toHaveProperty('nav.about');
    expect(ui.en).toHaveProperty('404.title');
    expect(ui.es).toHaveProperty('404.title');
  });
});
