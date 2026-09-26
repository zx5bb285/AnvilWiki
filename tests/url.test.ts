import { describe, it, expect } from 'vitest';
import {
  localizePath,
  listPath,
  detailPath,
  homeUrl,
  slugifyTag,
  absoluteUrl,
  languageAlternates,
} from '~/lib/url';
import { locales, type Locale } from '~/i18n/routing';

/** First non-default locale in the routing config — undefined on an en-only site. */
const nonDefault = locales.find((l) => l !== 'en');

describe('url helpers', () => {
  describe('localizePath', () => {
    it('returns the path unchanged for the default locale (en)', () => {
      expect(localizePath('/bosses', 'en')).toBe('/bosses/');
      expect(localizePath('/bosses/emberfang', 'en')).toBe('/bosses/emberfang/');
    });

    it('prepends the locale prefix for non-default locales', () => {
      if (!nonDefault) return; // en-only site: nothing to exercise (add a locale to re-enable)
      expect(localizePath('/bosses', nonDefault)).toBe(`/${nonDefault}/bosses/`);
      expect(localizePath('/bosses/emberfang', nonDefault)).toBe(
        `/${nonDefault}/bosses/emberfang/`,
      );
    });

    it('ensures leading slash on input without one', () => {
      expect(localizePath('about', 'en')).toBe('/about/');
      if (!nonDefault) return;
      expect(localizePath('about', nonDefault)).toBe(`/${nonDefault}/about/`);
    });
  });

  describe('homeUrl', () => {
    it('returns / for default locale', () => {
      expect(homeUrl('en')).toBe('/');
    });
    it('returns /<locale> for non-default locale', () => {
      if (!nonDefault) return;
      expect(homeUrl(nonDefault)).toBe(`/${nonDefault}/`);
    });
  });

  describe('listPath', () => {
    it('builds the correct list URL for each locale', () => {
      expect(listPath('bosses', 'en')).toBe('/bosses/');
      if (!nonDefault) return;
      expect(listPath('bosses', nonDefault)).toBe(`/${nonDefault}/bosses/`);
      expect(listPath('codes', 'en')).toBe('/codes/');
    });
  });

  describe('detailPath', () => {
    it('builds the correct article URL for each locale', () => {
      expect(detailPath('bosses', 'emberfang', 'en')).toBe('/bosses/emberfang/');
      if (!nonDefault) return;
      expect(detailPath('bosses', 'emberfang', nonDefault)).toBe(
        `/${nonDefault}/bosses/emberfang/`,
      );
    });

    it('handles nested slugs', () => {
      expect(detailPath('guides', 'early-game/beginner', 'en')).toBe(
        '/guides/early-game/beginner/',
      );
      if (!nonDefault) return;
      expect(detailPath('guides', 'early-game/beginner', nonDefault)).toBe(
        `/${nonDefault}/guides/early-game/beginner/`,
      );
    });
  });
});

describe('slugifyTag (CJK / non-ASCII fallback)', () => {
  it('slugifies ASCII tags to lowercase kebab-case', () => {
    expect(slugifyTag('Boss Guide')).toBe('boss-guide');
    expect(slugifyTag('Fire_Warden')).toBe('fire-warden');
  });

  it('returns CJK tags raw instead of collapsing to empty', () => {
    // The ASCII branch strips every CJK char → '' → all such tags would
    // collide on /tags/. The raw fallback keeps them unique; Astro writes
    // params to disk verbatim, so the built directory is the raw tag and
    // browser-encoded links (/tags/%E7%84%B0…) resolve to it.
    const zh = slugifyTag('焰牙');
    expect(zh).toBe('焰牙');
    expect(zh).not.toBe('');
  });

  it('keeps two different CJK tags distinguishable', () => {
    expect(slugifyTag('焰牙')).not.toBe(slugifyTag('风暴召唤者'));
  });

  it('keeps pure-symbol tags non-empty', () => {
    // Whatever the exact characters, the slug is stable and distinct from ''
    // — the property the fallback exists to guarantee.
    expect(slugifyTag('!!!')).toBe('!!!');
    expect(slugifyTag('  ???  ')).toBe('???');
  });
});

describe('absoluteUrl', () => {
  it('prefixes siteUrl and applies the locale prefix rules', () => {
    expect(absoluteUrl('/bosses', 'en')).toMatch(/^https:\/\/[^/]+\/bosses\/$/);
    if (!nonDefault) return;
    expect(absoluteUrl('/bosses', nonDefault)).toMatch(
      new RegExp(`^https://[^/]+/${nonDefault}/bosses/$`),
    );
    expect(absoluteUrl('/', nonDefault)).toMatch(new RegExp(`^https://[^/]+/${nonDefault}/$`));
  });
});

describe('languageAlternates', () => {
  it('builds absolute hreflang entries for exactly the given locales', () => {
    const locs: Locale[] = nonDefault ? ['en', nonDefault] : ['en'];
    const alts = languageAlternates((loc) => detailPath('bosses', 'x', loc), locs);
    expect(alts).toHaveLength(locs.length);
    expect(alts[0]).toEqual({ hreflang: 'en', href: expect.stringMatching(/\/bosses\/x\/$/) });
    if (nonDefault) {
      expect(alts[1]).toEqual({
        hreflang: nonDefault,
        href: expect.stringMatching(new RegExp(`/${nonDefault}/bosses/x/$`)),
      });
    }
  });

  it('never emits x-default (BaseLayout derives it separately)', () => {
    const locs: Locale[] = nonDefault ? ['en', nonDefault] : ['en'];
    const alts = languageAlternates((loc) => listPath('guides', loc), locs);
    expect(alts.some((a) => a.hreflang === 'x-default')).toBe(false);
  });

  it('honors a reduced locale list (single-language article)', () => {
    // The helper accepts any locale list a page actually covers; use the
    // non-default locale when the site has one, else a single-locale list.
    const list: Locale[] = nonDefault ? [nonDefault] : ['en'];
    const alts = languageAlternates((loc) => detailPath('bosses', 'x', loc), list);
    expect(alts).toHaveLength(1);
    expect(alts[0].hreflang).toBe(list[0]);
  });
});
