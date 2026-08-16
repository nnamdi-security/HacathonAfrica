//Zustand vs Context
// Context is fine for rarely-changing values (like a theme or logged-in user). Zustand wins once state updates frequently or many unrelated components need to read and write it — Context re-renders everything under the provider on every change, Zustand doesn't.

// The split: TanStack Query owns anything that came from a server. Zustand owns everything else that's global and client-only.




//EXERCISE
// ASSIGNMENT (5 minutes): Describe, in text, how you'd set up a Zustand store called useChatStore for a chat-style UI with:

// State: an array of messages (each with id, sender, text) and a boolean isTyping.
// Actions: addMessage(message) to push a new message, and setTyping(value) to toggle the typing indicator.
// Which two components (e.g. MessageList, ChatInput) would each use a selector to read only the slice of state they need, and why that matters for performance.
// One sentence: why is messages a better fit for Zustand than for TanStack Query, assuming messages arrive over a live connection rather than a REST fetch.
