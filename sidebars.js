// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Soft Kitty',
      items: ['soft-kitty/overview'],
    },

    {
      type: 'category',
      label: 'Core',
      items: [
        {
          type: 'category',
          label: 'Entities',
          items: [
            'core/entities/overview',
           /*  {
              type: 'category',
              label: 'EntityManagerObject',
              items: [
                'core/entities/entity-manager-object/overview',
                'core/entities/entity-manager-object/get-entity',
                'core/entities/entity-manager-object/add-entity',
              ],
            },
            {
              type: 'category',
              label: 'EntityComponent',
              items: [
                'core/entities/entity-component/overview',
                'core/entities/entity-component/get-attribute',
              ],
            }, */
          ],
        },
        {
          type: 'category',
          label: 'Attributes',
          items: [
            'core/attributes/overview',
            'core/attributes/AttributeObject',
            'core/attributes/Attribute',
            'core/attributes/AttributeData',
            'core/attributes/TempAttribute',
          ],
        },
        {
          type: 'category',
          label: 'Over-Time Effect',
          items: [
            'core/over-time-effects/overview',
            'core/over-time-effects/OverTimeEffectObject',
            'core/over-time-effects/OverTimeEffect',
            'core/over-time-effects/OverTimeEffectData',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Master Combat Core',
      items: [
        'master-combat-core/overview',
        {
           type: 'category',
           label: 'Getting-Started',
           items: [
             'master-combat-core/getting-started/overview',
             'master-combat-core/getting-started/first-damage-graph',
           ],
        },
        {
           type: 'category',
           label: 'Core Concepts',
           items: [
             'master-combat-core/core-concepts/overview',
           ],
        },
        {
           type: 'category',
           label: 'Graph System',
           items: [
             'master-combat-core/graph-system/overview',
           ],
        },
        {
           type: 'category',
           label: 'Nodes',
           items: [
             'master-combat-core/nodes/overview',
           ],
        },
        'master-combat-core/custom-node-tool',
        {
           type: 'category',
           label: 'Damage Component',
           items: [
             'master-combat-core/damage-component/overview',
           ],
        },
        'master-combat-core/debug',
        'master-combat-core/demo',
      ],
    },

    {
      type: 'category',
      label: 'Master Inventory Engine',
      items: ['master-inventory-engine/overview'],
    },
  ],
};

module.exports = sidebars;
