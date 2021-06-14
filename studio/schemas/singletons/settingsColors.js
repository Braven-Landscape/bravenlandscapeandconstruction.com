export default {
  name: `settingsColors`,
  title: `Settings - Color Palette`,
  type: `document`,
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: `primaryColor`,
      title: `Primary Color: Default`,
      description: `Add the default version of the primary color. Example: "#166534" `,
      type: `color`,
    },
    {
      name: `primaryColorLight`,
      title: `Primary Color: Light`,
      description: `Add the light version of the primary color. Example: "#adff2f"`,
      type: `color`,
    },
    {
      name: `primaryColorDark`,
      title: `Primary Color: Dark`,
      description: `Add the dark version of the primary color. Example: "#166534"`,
      type: `color`,
    },
    {
      name: `secondaryColor`,
      title: `Secondary Color: Default`,
      description: `Add the default version of the secondary color. Example: "#18181b" `,
      type: `color`,
    },
    {
      name: `secondaryColorLight`,
      title: `Secondary Color: Light`,
      description: `Add the light version of the secondary color. Example: "#18181b"`,
      type: `color`,
    },
    {
      name: `secondaryColorDark`,
      title: `Secondary Color: Dark`,
      description: `Add the dark version of the secondary color. Example: "#18181b"`,
      type: `color`,
    },
    {
      name: `accentColor`,
      title: `Accent Color: Default`,
      description: `Add the default version of the accent color. Example: "#eab308" `,
      type: `color`,
    },
    {
      name: `accentColorLight`,
      title: `Accent Color: Light`,
      description: `Add the light version of the accent color. Example: "#eab308"`,
      type: `color`,
    },
    {
      name: `accentColorDark`,
      title: `Accent Color: Dark`,
      description: `Add the dark version of the accent color. Example: "#eab308"`,
      type: `color`,
    },
  ],
};
