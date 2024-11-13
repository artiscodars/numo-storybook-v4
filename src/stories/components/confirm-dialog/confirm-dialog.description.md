The **Confirmation Dialog** component provides a modal dialog for confirmation purposes. It integrates with the Confirmation API to offer a customizable dialog UI for user interactions.
## Usage

- We will use **Confirmation Dialog** instead of confirmation-popup from PrimeNG.
- **Button placement**: Left side, "Yes" and then "No" (possibility to define "custom" names).
- When deleting, use a universal deletion confirmation question with buttons "Delete" or "Cancel."
- Action buttons should be named after the action they perform (e.g., Delete, Save, Archive, Send).
- Dismiss button: `Esc`, confirm: `Enter`. `SPACE` does nothing (PrimeNG defaults to confirming with space). `Enter` only works if one of the buttons is primary, if both are the same, then no (the happy path button is focused)
- Buttons should be equally highlighted or the primary button is in a different color.
- Closing cross.
- There is a title, for example, "Delete record."
- There is an explanation (in terms of deletion).
- Consistent style is needed regardless of the type. When the window is open, it has a gray background, but it's not always necessary.

## Use cases:

- To inform the user about something important.
- When the user needs to enter/confirm information before proceeding.

## Possible components:

- **Dialog window title**: Don't settle for a generic headline like "Warning" or "Are you sure."
- **Text**, description
- **Buttons** (confirm/close)
- **Checkbox**, to not show this in the future (if frequently observed, give the user the option to disable it in the future)

## Features
- If the dialog window involves data input, there should be no option to close the window with the `ESC` key.
- The dialog window could be displayed in the center of the page.
- Clicking on it closes the confirmation window. Equivalent to the cancel button function.

## Reminder:

- Don't blame the user. Example: "The password is incorrect" is better than "You entered incorrect information".

## Additional information:

- Dialogs will be: [PrimeNG Confirm Dialog](https://primeng.org/confirmdialog).
