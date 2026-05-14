export interface CategoryMetaT {
  feeling: string;
  label: string;
  tagline: string;
  hint: string;
  accent: string;
}

export const CategoryMeta: Record<string, CategoryMetaT> = {
  impulse: {
    feeling: "impulse",
    label: "impulse",
    tagline: "Move. Take the first step.",
    hint: "Spark action when you need to start.",
    accent: "var(--color-action)",
  },
  focus: {
    feeling: "focus",
    label: "focus",
    tagline: "Sharpen your mind.",
    hint: "Settle the noise. Lock in.",
    accent: "var(--color-mind)",
  },
  connect: {
    feeling: "connect",
    label: "connect",
    tagline: "Reach out. Open up.",
    hint: "Strengthen the bonds that matter.",
    accent: "var(--color-connection)",
  },
  relax: {
    feeling: "relax",
    label: "relax",
    tagline: "Soften. Let go.",
    hint: "Release tension. Make space.",
    accent: "var(--color-relaxation)",
  },
};
