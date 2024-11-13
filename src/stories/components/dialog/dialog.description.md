The **Dialog** component is used to display a modal window for entering information. This component ensures that important user interactions are handled in a consistent and accessible manner.

## Usage

- The dialog is used when the user needs to enter or confirm information before proceeding.
  - Example: Deleting an item with a mandatory comment.

## Components of a Dialog

- **Title**: Provides context and clarity to the user. Avoid generic titles like "Warning" or "Are you sure?" Aim for specific and informative titles.
- **Without Icons**: Icons may not be necessary, especially on mobile devices where their use might be unclear. This also applies to confirmation dialogs.
- **Input Fields and Descriptive Text**: Allows the inclusion of input fields for data entry and explanatory text to guide the user.
- **Text**: Provide a descriptive message or instruction to the user.
- **Buttons**: Include action buttons such as "Confirm" or "Close".
- **Checkbox**: Option to disable the dialog in the future (useful for frequently appearing dialogs).
- **Grey Overlay**: The dialog can have a grey overlay; 
  
> - If the form has been changed, display a prompt asking if the user is sure they want to close the dialog.
  - If data entry is required in the dialog, do not allow it to be closed using the `ESC` key.

## Design Considerations

- **User-Friendly Language**: Avoid blaming the user. For example, use "The password is incorrect" instead of "You entered incorrect information."

## Placement and Layout

- **Center Alignment**: The dialog should appear in the center of the page.
  - The size should not cover the entire screen but be adjusted according to the content and data volume.
  - Maximum height with scrolling enabled if the content exceeds 90% of the screen height.
  - Consider enabling drag and drop functionality for the dialog.

## Additional Information

- [PrimeNG Modal Dialog](https://primeng.org/dialog)

