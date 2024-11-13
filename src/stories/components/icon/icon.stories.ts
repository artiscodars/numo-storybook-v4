import { Meta, StoryObj } from "@storybook/angular";
import { IconComponent } from "./icon.component";
import description from "./icon.description.md";

export default {
    title: "Components/Icons",
    component: IconComponent,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const MaterialHome: Story = {
    args: {
        type: "material-symbols",
        icon: "home", // Use the icon name directly for Material Symbols
        class: "text-gray-800 text-3xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"  ></numo-icon>`,
    }),
};

export const MaterialSearch: Story = {
    args: {
        type: "material-symbols",
        icon: "search", // Another example using Material Symbols
        class: "text-gray-800 text-3xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};

export const IconifyBank: Story = {
    args: {
        type: "iconify",
        icon: "cil:bank",
        class: "text-gray-800 text-2xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};

export const IconifySearch: Story = {
    args: {
        type: "iconify",
        icon: "cil:search",
        class: "text-gray-800 text-2xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};

export const IconifyBell: Story = {
    args: {
        type: "iconify",
        icon: "cil:bell",
        class: "text-gray-800 text-2xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};

export const PrimeNGCheck: Story = {
    args: {
        type: "primeng",
        icon: "pi pi-check",
        class: "text-gray-800 text-2xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};

export const PrimeNGSearch: Story = {
    args: {
        type: "primeng",
        icon: "pi pi-search",
        class: "text-gray-800 text-2xl",
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<numo-icon [icon]="icon" [type]="type" [class]="class"></numo-icon>`,
    }),
};
