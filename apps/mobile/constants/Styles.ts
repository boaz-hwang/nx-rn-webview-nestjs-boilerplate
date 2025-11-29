export const STYLE_COLORS = {
  backgroundDark: '#0F172A',
  textPrimary: '#E2E8F0',
  textSecondary: '#CBD5E1',
  linkBlue: '#2e78b7',
} as const;

export const STYLE_ALIGN = {
  center: 'center',
} as const;

export const STYLE_FONT_WEIGHTS = {
  bold: 'bold',
  bold700: '700',
} as const;

export const STYLE_WIDTHS = {
  eightyPercent: '80%',
} as const;

export const screenStyles = {
  centeredContainer: {
    flex: 1,
    alignItems: STYLE_ALIGN.center,
    justifyContent: STYLE_ALIGN.center,
    backgroundColor: STYLE_COLORS.backgroundDark,
  },
  paddedContainer: {
    flex: 1,
    backgroundColor: STYLE_COLORS.backgroundDark,
    padding: 24,
    justifyContent: STYLE_ALIGN.center,
  },
  title: {
    fontSize: 24,
    fontWeight: STYLE_FONT_WEIGHTS.bold700,
    color: STYLE_COLORS.textPrimary,
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: STYLE_COLORS.textSecondary,
    lineHeight: 20,
  },
} as const;
