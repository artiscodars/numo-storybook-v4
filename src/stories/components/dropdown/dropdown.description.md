# Dropdown Component Documentation

The **Dropdown** component is a versatile input element that provides a compact list of choices for the user to select from. It is derived from the input field and is useful in various scenarios, such as form filling, attribute selection, and navigation.

## Types of Dropdowns

1. **Select**: Used when only one item can be selected. Does not include radio buttons or checkboxes.
2. **Multi-select**: Uses checkboxes, allowing the user to select multiple options by clicking on the checkbox or the label.
3. **Hierarchy**: Used for hierarchical data structures, such as organizational trees or work time groups. Example: DLP has two variants - sequential templates (dropdown) with green, bold text, and hierarchical workgroups with an expand option.

### Dropdown - A Compact List of Choices

The dropdown is fundamentally an extension of an input field.

[NNGroup: Drop-down Menus](https://www.nngroup.com/articles/drop-down-menus/)

## Use Cases

1. **Command Menu**: Initiates an action based on the selected option.
2. **Navigation Menu**: Directs the user to a new location.
3. **Form Filling**: Allows users to select an option to enter into a form field.
4. **Attribute Selection**: Enables users to choose a value from a predefined list of possible values.

## Requirements

1. **Label and Placeholder**: Like input fields, dropdowns should have a label and possibly a placeholder text. Icons (such as carets or magnifying glasses) indicate a selection.
2. **States**: Dropdowns have various states similar to input fields:
   - Enabled
   - Hover
   - Focused
   - Read-only (white background)
   - Error
   - Disabled
3. **Single or Multiple Selection**: Users can select one or more values (with/without checkboxes). When selecting multiple values, the dropdown remains open until all selections are made.

[NNGroup: Drop-down Menus](https://www.nngroup.com/articles/drop-down-menus/)

4. **Value Limits**: Dropdowns are suitable for a set number of values. For two values, consider using radio buttons or toggles instead (e.g., yes/no questions).
5. **Search Functionality**: Necessary for a larger set of values.
6. **Tooltips**: Should be implemented with a different component than currently used in DLP.

## Considerations

1. **Displaying Multiple Selected Values**: Evaluate how to display multiple selections. Currently, in DLP, if a single value is selected, it is shown; if multiple values are chosen, the user sees the count and needs to click to view details.
   
2. **Data Selection in Filtering**:
   - **Live**: Values update immediately upon selection. Used for filters.
   - **By Filter**: Values are selected, and then a "Select" button is clicked, suitable for larger datasets, reports, or tables.
   - **Batch**: Multiple dropdowns are filled, and then a "Select All" button is clicked, ideal for large datasets, reports, or tables.

3. **Clear All Functionality**: Provide a "clear all" option, such as an icon next to the dropdown (e.g., a cross in DLP) or other ideas.
4. **Sorting Values**: Values in dropdowns can be listed in regular or hierarchical order, especially if used in filters.
5. **Hierarchical Dropdowns**: Users should be able to distinguish different levels and understand which values can be selected.
6. **Empty Dropdowns**: If no records are available, display "No records."
7. **Naming and Placeholder**: Primarily use a dropdown name; if unavailable, a placeholder can be used. Consider a sticky header for tables.
8. **Dropdown Text Color**: Use black text for dropdown filters, avoiding blue (currently used in DLP).
9. **Selected Values Order**: Selected values should move to the top of the list (descending by checked status), with other entries sorted alphabetically. This should happen after the selection process is complete, not during. Does not apply to hierarchical dropdowns.

### Example

![Example Dropdown](https://cdn.dribbble.com/users/4686695/screenshots/19798304/media/f8d3635f0ebe1a22fd75653e5c7851ab.png?resize=1600x1200&vertical=center)

[Example Dropdown Image](https://cdn.dribbble.com/users/4686695/screenshots/19798304/media/f8d3635f0ebe1a22fd75653e5c7851ab.png?resize=1600x1200&vertical=center)
