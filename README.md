# React 18 useEffect Cleanup Warning with setInterval

This repository demonstrates a common issue encountered when using the `useEffect` hook in React 18 and later versions.  The problem arises when a `setInterval` is initiated within the `useEffect`'s callback without including a cleanup function, triggering warnings and potential memory leaks.

The `bug.jsx` file displays the problematic code.  The `bugSolution.jsx` file presents the corrected version that avoids these issues by properly handling cleanup in the return statement of the `useEffect` hook.

## Problem:

In earlier React versions, the lack of proper cleanup in `useEffect` might not have immediately caused problems.  However, React 18 and beyond enforce stricter rules, producing warnings whenever a component unmounts while a `setInterval` is still running.  This can lead to unnecessary resource consumption and memory leaks.

## Solution:

The corrected code in `bugSolution.jsx` uses the return statement within `useEffect` to execute `clearInterval`, guaranteeing the interval is stopped when the component unmounts or when the effect runs again. This prevents any resource leaks or warnings.