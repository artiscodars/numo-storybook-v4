## Use Cases:
- To convey brief information to the user.
- The text should be quickly readable and not demand too much attention from the user.

## Types:
- **Success**: When a process is completed, for example, changes are saved.
- **Info**: Provides informative messages to the user.
- **Warning**: Warns the user, for example, they can continue working, but part of the information has not been loaded.
- **Danger** (in red): Indicates errors, for example, when user changes have not been saved.

## Transparency:
- Toasts are opaque (not transparent).

## Placement:
- Positioned in the top-right corner of the page.

## Display Duration:
- **Success** messages disappear automatically after a set time (e.g., 2 seconds).
- Other types remain visible until closed with a close button. 
- If the user navigates to a different section, the toast disappears (unless it applies to the entire system and not just a specific section).

## Close Button:
- All toasts have a close button, except possibly for green (success) toasts. 
- Clicking on the toast itself does nothing.

## Toast Icon:
- Positioned in the top-left corner of the toast.

## Width:
- Fixed width, with text wrapping.

## Toasts on Mobile Devices:
- Displayed at the bottom of the screen on mobile devices.

## Punctuation:
- Add periods at the end of sentences.
- For system toast notifications with just one word, a period is not usually necessary.
  - Examples: 
    - "Saved"
    - "Sent"
    - "Error"
- In these cases, adding a period might cause visual clutter, hindering quick comprehension. Consistency across the application or system is key to providing a cohesive user experience.

