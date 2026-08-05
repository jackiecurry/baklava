// Baklava · Tokens per asset
//
// Keyed by the asset's file path. Each entry is an array of
// `{ name, value, role }` records. Color values render with a small swatch.
//
// Only cards that genuinely consume specific tokens are listed here;
// the rest auto-hide the Tokens section in the detail view.

window.BAKLAVA_TOKENS = {
  // ── 01 Foundations ────────────────────────────────────────────────
  "preview/type-scale.html": [
    { name: "--font-sans", value: "'Inter', system-ui, 'SF Pro', 'Segoe UI', sans-serif", role: "Body, labels, headings" },
    { name: "--font-mono", value: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", role: "Code, tokens, JSON, timestamps" },
  ],
  "preview/type-faces.html": [
    { name: "--font-sans", value: "'Inter', system-ui, 'SF Pro', 'Segoe UI', sans-serif", role: "Body, labels, headings" },
    { name: "--font-mono", value: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", role: "Code, tokens, JSON, timestamps" },
  ],
  "preview/spacing-scale.html": [
    { name: "--space-0",  value: "0px",  role: "Zero (flush)" },
    { name: "--space-1",  value: "4px",  role: "Smallest gap — between tightly-coupled atoms" },
    { name: "--space-2",  value: "8px",  role: "Default gap between sibling atoms" },
    { name: "--space-3",  value: "12px", role: "Input horizontal padding" },
    { name: "--space-4",  value: "16px", role: "Card padding — the system's default" },
    { name: "--space-5",  value: "20px", role: "Mid-density grouping" },
    { name: "--space-6",  value: "24px", role: "Section internal padding" },
    { name: "--space-8",  value: "32px", role: "Between unrelated content blocks" },
    { name: "--space-10", value: "40px", role: "Page-level vertical rhythm" },
    { name: "--space-12", value: "48px", role: "Frame header top/bottom padding" },
    { name: "--space-16", value: "64px", role: "Layout container horizontal padding" },
    { name: "--space-20", value: "80px", role: "Top-level page spacing" },
  ],
  "preview/spacing-radius.html": [
    { name: "--radius-xs",   value: "2px",   role: "Small inline elements (badges, chips, tags)" },
    { name: "--radius-sm",   value: "4px",   role: "Cards and buttons — system default" },
    { name: "--radius-md",   value: "6px",   role: "Mid-size surfaces" },
    { name: "--radius-lg",   value: "8px",   role: "Large surfaces and modals" },
    { name: "--radius-pill", value: "999px", role: "Pill tags, toggle tracks, status dots" },
  ],
  "preview/spacing-shadows.html": [
    { name: "--shadow-raised",         value: "0 2px 4px rgba(206, 217, 240, 0.8)",  role: "Card resting — a tint of Blue-200" },
    { name: "--shadow-raised-hover",   value: "0 4px 8px rgba(206, 217, 240, 1)",    role: "Card hover" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)",   role: "Modal / popover" },
    { name: "--shadow-overlay-strong", value: "0 12px 32px rgba(38, 40, 44, 0.28)",  role: "Top-of-stack overlay" },
    { name: "--shadow-focus-ring",     value: "0 0 0 3px rgba(0, 148, 184, 0.35)",   role: "Focus halo — cyan, 35% alpha" },
    { name: "--shadow-inset-sunken",   value: "inset 0 1px 2px rgba(38, 40, 44, 0.08)", role: "Sunken surface inner shadow" },
  ],
  "preview/foundations-motion.html": [
    { name: "--duration-fast",   value: "120ms", role: "Microinteractions, hover tints" },
    { name: "--duration-normal", value: "200ms", role: "Default for state transitions, dropdowns" },
    { name: "--duration-slow",   value: "320ms", role: "Drawers, modals, large surface entrances" },
    { name: "--ease-standard",   value: "cubic-bezier(0.4, 0, 0.2, 1)", role: "Default curve — accelerate then decelerate" },
    { name: "--ease-in",         value: "cubic-bezier(0.4, 0, 1, 1)",   role: "Exits and dismissals" },
    { name: "--ease-out",        value: "cubic-bezier(0, 0, 0.2, 1)",   role: "Entrances and reveals" },
  ],
  "preview/foundations-zindex.html": [
    { name: "--z-base",     value: "0",    role: "Resting plane" },
    { name: "--z-dropdown", value: "1000", role: "Select menus, combobox lists" },
    { name: "--z-sticky",   value: "1100", role: "Sticky table headers, pinned bars" },
    { name: "--z-overlay",  value: "1200", role: "Drawer scrim, page-level overlays" },
    { name: "--z-modal",    value: "1300", role: "Modal dialogs" },
    { name: "--z-popover",  value: "1400", role: "Popovers — sit above modals" },
    { name: "--z-tooltip",  value: "1500", role: "Tooltips — sit above popovers" },
    { name: "--z-toast",    value: "1600", role: "Toasts — never occluded" },
  ],
  "preview/foundations-breakpoints.html": [
    { name: "--bp-sm", value: "640px",  role: "Phone — narrow viewports" },
    { name: "--bp-md", value: "768px",  role: "Tablet" },
    { name: "--bp-lg", value: "1024px", role: "Laptop — standard product width" },
    { name: "--bp-xl", value: "1280px", role: "Desktop — wide canvases" },
  ],
  "preview/foundations-selection-skeleton.html": [
    { name: "--color-selection-bg",   value: "#DCE8FF", role: "Text-highlight fill — Blue-200" },
    { name: "--color-selection-text", value: "#081A4D", role: "Text-highlight foreground — Navy-900" },
    { name: "--color-skeleton",         value: "#94A3B8",            role: "Skeleton band, light surface — Grey-400" },
    { name: "--color-skeleton-on-dark", value: "rgba(255,255,255,0.10)", role: "Skeleton band, dark surface — white@10%" },
  ],

  // ── 02 Color ──────────────────────────────────────────────────────
  "preview/colors-all-ramps.html": [
    { name: "--bk-blue-600",   value: "#2563FF", role: "Primary brand & action" },
    { name: "--bk-cyan-600",   value: "#0094B8", role: "Focus ring & cool accent" },
    { name: "--bk-navy-600", value: "#1749E8", role: "Information" },
    { name: "--bk-orange-600", value: "#F9660B", role: "Accent" },
    { name: "--bk-yellow-600", value: "#FBBC04", role: "Warning" },
    { name: "--bk-violet-600", value: "#8B5CF6", role: "Discovery" },
    { name: "--bk-green-600",  value: "#017D1B", role: "Success" },
    { name: "--bk-red-600",    value: "#E31C3D", role: "Alert / destructive" },
    { name: "--bk-magenta-600",   value: "#FF2D8F", role: "Marketing accent" },
    { name: "--bk-grey-600",   value: "#475569", role: "Neutral" },
  ],
  "preview/colors-semantic-text.html": [
    { name: "--color-text-body",          value: "#081A4D", role: "Default body text — Navy-900" },
    { name: "--color-text-heading",       value: "#081A4D", role: "Headings — Navy-900" },
    { name: "--color-text-subtle",        value: "#334155", role: "Secondary copy, captions — Grey-700" },
    { name: "--color-text-disabled",      value: "#64748B", role: "Disabled labels and values — Grey-500" },
    { name: "--color-text-inverse",       value: "#FFFFFF", role: "Text on dark surfaces (navbar)" },
    { name: "--color-text-selected",      value: "#2563FF", role: "Selected text — Blue-600" },
    { name: "--color-text-link",          value: "#2563FF", role: "Default link — Blue-600" },
    { name: "--color-text-link-hover",    value: "#0094B8", role: "Link hover — Cyan-600" },
    { name: "--color-text-link-pressed",  value: "#22D3EE", role: "Link pressed — Cyan-400" },
    { name: "--color-text-success",       value: "#014B10", role: "Success message text — Green-800" },
    { name: "--color-text-warning",       value: "#C75209", role: "Warning message text — Orange-700" },
    { name: "--color-text-alert",         value: "#B61631", role: "Error message text — Red-700" },
    { name: "--color-text-information",   value: "#1237C0", role: "Informational accent — Navy-700" },
    { name: "--color-text-discovery",     value: "#7644EA", role: "Discovery accent — Violet-700" },
    { name: "--color-text-accent-blue",   value: "#2563FF", role: "Accent text · blue — Blue-600" },
    { name: "--color-text-accent-cyan",   value: "#0094B8", role: "Accent text · cyan — Cyan-600" },
    { name: "--color-text-accent-navy", value: "#1749E8", role: "Accent text · navy — Navy-600" },
    { name: "--color-text-accent-orange", value: "#F9660B", role: "Accent text · orange — Orange-600" },
    { name: "--color-text-accent-yellow", value: "#FCC936", role: "Accent text · yellow — Yellow-500" },
    { name: "--color-text-accent-violet", value: "#8B5CF6", role: "Accent text · violet — Violet-600" },
    { name: "--color-text-accent-green",  value: "#017D1B", role: "Accent text · green — Green-600" },
    { name: "--color-text-accent-red",    value: "#E31C3D", role: "Accent text · red — Red-600" },
    { name: "--color-text-accent-magenta",   value: "#FF2D8F", role: "Accent text · magenta — Magenta-600" },
    { name: "--color-text-accent-grey",   value: "#475569", role: "Accent text · grey — Grey-600" },
  ],
  "preview/colors-surfaces.html": [
    { name: "--color-surface-primary", value: "#FFFFFF", role: "Canvas — default page background" },
    { name: "--color-surface-raised",  value: "#FFFFFF", role: "Cards and drawers (with shadow)" },
    { name: "--color-surface-sunken",  value: "#F1F5F9", role: "Pressed-in section (Grey-100)" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Modal / popover" },
    { name: "--color-surface-navbar",  value: "#0B246E", role: "Global navbar (Navy-1000)" },
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal scrim (no backdrop blur)" },
  ],
  "preview/colors-gradient-brand.html": [
    { name: "--gradient-brand",        value: "linear-gradient(90deg, #FF2D8F 29%, #2563FF 100%)", role: "Magenta → blue brand sweep" },
    { name: "--gradient-brand-stop-1", value: "#FF2D8F", role: "Left stop — magenta" },
    { name: "--gradient-brand-stop-2", value: "#2563FF", role: "Right stop — Blue-600" },
  ],

  // ── 03 Brand ──────────────────────────────────────────────────────
  "Brand%20Gradient.html": [
    { name: "--gradient-brand", value: "linear-gradient(90deg, #FF2D8F 29%, #2563FF 100%)", role: "The brand gradient" },
  ],

  // ── 04 Primitives ─────────────────────────────────────────────────
  "preview/components-buttons.html": [
    { name: "--color-background-primary",         value: "#2563FF", role: "Primary button background" },
    { name: "--color-background-primary-hover",   value: "linear-gradient(112.63deg, #7C4DFF 12.38%, #2563FF 137.46%)", role: "Primary hover — violet → blue (distinctive)" },
    { name: "--color-background-primary-pressed", value: "#22D3EE", role: "Primary pressed — Cyan-400" },
    { name: "--color-background-disabled",        value: "#E2E8F0", role: "Disabled fill" },
    { name: "--color-background-secondary",       value: "#FFFFFF", role: "Secondary button — white fill" },
    { name: "--color-background-secondary-hover", value: "#F1F5F9", role: "Secondary hover — Grey-100 wash" },
    { name: "--color-border-default",             value: "#94A3B8", role: "Default border — Grey-400" },
    { name: "--color-border-focus",               value: "#0094B8", role: "Focus ring (cyan)" },
    { name: "--radius-sm",                        value: "4px",     role: "Button corner radius" },
    { name: "--shadow-focus-ring",                value: "0 0 0 3px rgba(0, 148, 184, 0.35)", role: "Focus halo" },
  ],
  "preview/components-inputs.html": [
    { name: "--field-bg-default",       value: "#FFFFFF",  role: "Default field fill" },
    { name: "--field-bg-error",         value: "#FCE8EC",  role: "Error field fill — Red-100" },
    { name: "--field-bg-disabled",      value: "#EEF4FF",  role: "Disabled field fill — Blue-100" },
    { name: "--field-border-default",   value: "#94A3B8",  role: "Default border — Grey-400" },
    { name: "--field-border-hover",     value: "#2563FF",  role: "Hover border — Blue-600" },
    { name: "--field-border-focus",     value: "#0094B8",  role: "Focus border — Cyan-600" },
    { name: "--field-border-error",     value: "#E31C3D",  role: "Error border — Red-600" },
    { name: "--field-border-disabled",  value: "#DCE8FF",  role: "Disabled border — Blue-200" },
    { name: "--field-text-default",     value: "#081A4D",  role: "Typed value — Navy-900" },
    { name: "--field-text-placeholder", value: "#334155",  role: "Placeholder text — Grey-700" },
    { name: "--field-text-disabled",    value: "#B8D0FF",  role: "Disabled text — Blue-300" },
    { name: "--field-radius",           value: "4px",      role: "Field corner radius" },
    { name: "--field-height-md",        value: "40px",     role: "Default field height" },
  ],
  "preview/components-badges.html": [
    { name: "--radius-pill",          value: "999px",   role: "Pill shape" },
    { name: "--font-sans",            value: "'Inter', system-ui, …", role: "ExtraBold 800 uppercase 10px" },
    { name: "--bk-blue-100",          value: "#EEF4FF", role: "Info badge fill" },
    { name: "--bk-green-100",         value: "#E6F2E8", role: "Success badge fill" },
    { name: "--bk-yellow-100",        value: "#FFF8E6", role: "Warning badge fill" },
    { name: "--bk-red-100",           value: "#FCE8EC", role: "Danger badge fill" },
    { name: "--bk-violet-100",        value: "#F7F2FF", role: "Discovery badge fill" },
  ],
  "preview/components-spinner.html": [
    { name: "--ai-accent",             value: "var(--bk-ai-500)", role: "AI spinner stroke" },
    { name: "--color-text-link",       value: "#2563FF", role: "Default spinner stroke" },
    { name: "--color-text-success",    value: "#014B10", role: "Success spinner" },
    { name: "--color-text-alert",      value: "#B61631", role: "Danger spinner" },
  ],

  // ── 05 Components ────────────────────────────────────────────────
  "preview/components-card.html": [
    { name: "--color-surface-raised",  value: "#FFFFFF", role: "Card fill" },
    { name: "--color-border-subtle",   value: "#CBD5E1", role: "Resting border — 1px Grey-300" },
    { name: "--color-border-hover",    value: "#2563FF", role: "Hover border — 1.5px Blue-600" },
    { name: "--color-border-selected", value: "#2563FF", role: "Selected border — 3px Blue-600" },
    { name: "--radius-sm",             value: "4px",     role: "Card corner radius" },
    { name: "--space-4",               value: "16px",    role: "Card internal padding" },
    { name: "--shadow-raised",         value: "0 2px 4px rgba(206, 217, 240, 0.8)", role: "Resting shadow" },
    { name: "--shadow-raised-hover",   value: "0 4px 8px rgba(206, 217, 240, 1)",   role: "Hover shadow" },
  ],
  "preview/components-modal.html": [
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal scrim (no blur)" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Modal panel fill" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)", role: "Modal shadow" },
    { name: "--radius-lg",             value: "8px",     role: "Modal corner radius" },
    { name: "--space-6",               value: "24px",    role: "Modal internal padding" },
  ],
  "preview/components-drawer.html": [
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal-variant scrim" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Drawer fill" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)", role: "Drawer shadow" },
  ],
  "preview/components-table.html": [
    { name: "--bk-grey-100",                value: "#F1F5F9", role: "Row hover background" },
    { name: "--bk-blue-100",                value: "#EEF4FF", role: "Selected row background" },
    { name: "--bk-grey-200",                value: "#E2E8F0", role: "Row divider + subtle vertical header dividers" },
    { name: "--bk-grey-300",                value: "#CBD5E1", role: "Table border + header bottom border" },
    { name: "--color-text-body",            value: "#0B246E", role: "Header label + cell text (Navy-900)" },
    { name: "--color-text-subtle",          value: "#334155", role: "Muted cell text (em-dash placeholders, monospace IDs)" },
    { name: "--bk-blue-600",                value: "#2563FF", role: "Toolbar text-button actions + filter-funnel indicator" },
  ],
  "preview/components-global-header.html": [
    { name: "--color-surface-navbar", value: "#0B246E", role: "Global navbar background — Navy-1000" },
    { name: "--color-text-inverse",   value: "#FFFFFF", role: "Text + icons on the navbar" },
  ],

  // ── 09 Data viz · palette foundations ─────────────────────────────
  "preview/dataviz-status.html": [
    { name: "--bk-green-600",  value: "#017D1B", role: "Success — pipeline completed" },
    { name: "--bk-red-600",    value: "#E31C3D", role: "Failed" },
    { name: "--bk-yellow-600", value: "#FBBC04", role: "Warning" },
    { name: "--bk-blue-600",   value: "#2563FF", role: "Running" },
    { name: "--bk-grey-500",   value: "#64748B", role: "Queued / idle" },
  ],
};
