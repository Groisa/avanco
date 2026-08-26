"use client";

import { createContext, useContext } from "react";

// Sections render inside the admin's live preview as well as on the real
// site. In preview the scroll-triggered Reveal animation would leave content
// invisible (nothing scrolls into view inside a short preview pane), so the
// preview turns it off and renders everything already visible.
const PreviewContext = createContext(false);

export const useIsPreview = () => useContext(PreviewContext);

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  return <PreviewContext.Provider value={true}>{children}</PreviewContext.Provider>;
}
