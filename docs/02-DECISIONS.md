# Architecture Decision Records (ADR)

## ADR 001: Swiss International Style
**Status**: Accepted
**Context**: The user requires a strict minimalist aesthetic.
**Decision**: Adopt the "Swiss Style" (International Typographic Style).
- **Consequences**:
    - Strict use of Black & White.
    - Asymmetric Grids.
    - Sans-serif typography (Inter/Helvetica) with tight tracking.
    - Content-first approach.

## ADR 002: Zero-Database Architecture
**Status**: Accepted
**Context**: Needed high performance (100 Lighthouse) and zero latency.
**Decision**: Use Astro Content Collections (JSON).
- **Consequences**:
    - No database connection overhead.
    - Build-time validation of data schema.
    - Instant page loads (Static HTML).

## ADR 003: Internationalization Strategy
**Status**: Accepted
**Context**: Content must be available in Spanish (ES) and English (EN).
**Decision**: Use Static Routing with `[lang]` parameter.
- **Consequences**:
    - SEO friendly (distinct URLs).
    - Simple architectural model (folder based).
    - No client-side routing complexity.
