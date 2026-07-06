export const RECURSIVE_DATA = [
  {
    id: "1",
    label: "src",
    children: [
      {
        id: "1.2",
        label: "controllers",
        children: [
          {
            id: "1.2.1 ",
            label: "auth",
            children: [
              { id: "1.2.1.1", label: "auth.controller.ts", children: [] },
            ],
          },
        ],
      },
      {
        id: "1.2",
        label: "routes",
        children: [
          { id: "1.2.1", label: "auth.route.ts", children: [] },
          { id: "1.2.2", label: "index.ts", children: [] },
        ],
      },
      {
        id: "1.3",
        label: "services",
        children: [
          {
            id: "1.3.1",
            label: "auth",
            children: [
              { id: "1.3.1.1", label: "auth.service.ts", children: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "scripts",
    children: [
      {
        id: "2.1",
        label: "migrations",
        children: [{ id: "2.1.1", label: "dev-mig.ts", children: [] }],
      },
      {
        id: "2.2",
        label: "prisma",
        children: [
          {
            id: "2.2.1",
            label: "generated",
            children: [
              { id: "2.2.1.1", label: "prisma-client.ts", children: [] },
              { id: "2.2.1.2", label: "user-schema.ts", children: [] },
            ],
          },
          { id: "2.2.2", label: "schema.ts", children: [] },
        ],
      },
    ],
  },
];
