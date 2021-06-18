import React, { createContext, useContext, useEffect, useState } from 'react';

/** Media Context */
const MediaCtx = /*#__PURE__*/createContext(null); // Default breakpoint values

const sm = 0;
const md = 768;
const lg = 1250;
/**
 * Calculates the state for each breakpoint based on current window width
 * @param breakpoints Set of application breakpoint values
 */

function calcBreakpoints(breakpoints) {
  const w = window.innerWidth;
  return {
    sm: w < (breakpoints[1] ?? md),
    md: w >= (breakpoints[1] ?? md) && w < (breakpoints[2] ?? lg),
    lg: w >= (breakpoints[2] ?? lg)
  };
}
/**
 * Uses `window.matchMedia` to listen for changes to window media queries and
 * updates breakpoint status on every change.
 * @param breakpoints Set of application breakpoints
 * @param updateBps Hook state update function updater
 */


function mountListeners(breakpoints, updateBps) {
  function setBreakpoints() {
    updateBps(calcBreakpoints(breakpoints));
  }

  breakpoints.forEach(bp => {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications
    const mq = window.matchMedia(`(min-width: ${bp}px)`);
    mq.addListener(setBreakpoints);
  });
}

/**
 * [Media component 📝](https://componentry.design/components/media)
 * @experimental
 */
export function Media({
  children,
  breakpoints = [sm, md, lg]
}) {
  const [bps, updateBps] = useState(calcBreakpoints(breakpoints)); // ℹ️ Call to mount media query listeners is wrapped in useEffect to prevent
  // mounting listeners multiple times. Currently we don't remove and remount
  // listeners if the breakpoints change, but that's a really edge case to
  // support...

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    mountListeners(breakpoints, updateBps);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/React.createElement(MediaCtx.Provider, {
    value: bps
  }, " ", children);
}
Media.displayName = 'Media';
/**
 * [Media hook 📝](https://componentry.design/components/media)
 */

export const useMedia = () => {
  const media = useContext(MediaCtx);
  if (!media) throw new Error('useMedia used outside of a <Media /> provider');
  return media;
};