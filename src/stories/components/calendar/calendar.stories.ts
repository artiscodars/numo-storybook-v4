import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import description from "./calendar.description.md"; // Import the markdown file
import { CalendarModule } from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloatLabelModule } from "primeng/floatlabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
    title: "Components/Form/Calendar",
    decorators: [
        moduleMetadata({
            imports: [
                CalendarModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                FloatLabelModule,
            ],
        }),
    ],
    tags: ["autodocs"],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
    args: {
        date: new Date(),
        selectionMode: "single",
        showIcon: false,
        showOnFocus: true,
        iconDisplay: "overlay",
        timeOnly: false,
        minDate: new Date(),
        maxDate: new Date(),
        readonlyInput: false,
        showButtonBar: false,
        view: "date",
        dateFormat: "dd/mm/yy",
        touchUI: false,
        inline: false,
        variant: "filled",
        class: "",
        disabled: false,
        firstDayOfWeek: 1,
        showWeek: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
              [selectionMode]="selectionMode"
              [showIcon]="showIcon"
              [showOnFocus]="showOnFocus"
              [iconDisplay]="iconDisplay"
              [timeOnly]="timeOnly"
              [minDate]="minDate"
              [maxDate]="maxDate"
              [readonlyInput]="readonlyInput"
              [showButtonBar]="showButtonBar"
              [view]="view"
              [dateFormat]="dateFormat"
              [touchUI]="touchUI"
              [inline]="inline"
              [showWeek]="showWeek"
              [variant]="variant"
              [class]="class"
              [disabled]="disabled"
              [firstDayOfWeek]="firstDayOfWeek"
              [showWeek]="showWeek"

        /> `,
    }),
};

// Additional Stories

export const Icon: Story = {
    args: {
        date: new Date(),
        format: "dd.mm.yy",
        showIcon: true,
        showOnFocus: false,
        iconDisplay: "input",
        timeOnly: false,
        firstDayOfWeek: 1,
        inputId: "icondisplay",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar [(ngModel)]="date2" [showIcon]="showIcon" [showOnFocus]="showOnFocus" [timeOnly]="timeOnly"   inputId="icondisplay" [firstDayOfWeek]="firstDayOfWeek"/>
`,
    }),
};

export const Multiple: Story = {
    args: {
        dates: [],
        selectionMode: "multiple",
        readonlyInput: true,
        firstDayOfWeek: 1,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="dates"
    [selectionMode]="selectionMode"
    [readonlyInput]="readonlyInput"
    [firstDayOfWeek]="firstDayOfWeek"
    />
`,
    }),
};

export const Range: Story = {
    args: {
        rangeDates: [],
        selectionMode: "range",
        readonlyInput: true,
        firstDayOfWeek: 1,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="rangeDates"
    [selectionMode]="selectionMode"
    [readonlyInput]="readonlyInput"
    [firstDayOfWeek]="firstDayOfWeek"
    />
`,
    }),
};

export const YearPicker: Story = {
    args: {
        date: new Date(),
        selectionMode: "range",
        showButtonBar: true,
        view: "year",
        dateFormat: "yy",
        readonlyInput: true,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="date"
    [view]="view"
    [dateFormat]="dateFormat"
    [readonlyInput]="readonlyInput" />
`,
    }),
};

export const Invalid: Story = {
    args: {
        date: "",
        variant: "filled",
        class: "ng-invalid ng-dirty",
        disabled: false,
        firstDayOfWeek: 1,
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<p-calendar
    [(ngModel)]="date"
    [class]="class"
    [disabled]="disabled"
    [firstDayOfWeek]="firstDayOfWeek"
    />
`,
    }),
};
