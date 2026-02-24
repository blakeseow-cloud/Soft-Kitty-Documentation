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
      label: 'Shared Core System',
      items: [
        {
          type: 'category',
          label: 'General',
          items: [
            'core/general/SGD_Settings',
            'core/general/DataObject',
            'core/general/game-manager',
            'core/general/AssetLoader',
            'core/general/soundmanager',
          ],
        },
        {
          type: 'category',
          label: 'Entities',
          items: [
            'core/entities/overview',
            'core/entities/EntityManagerObject',
            'core/entities/Entity',
            'core/entities/EntityComponent',
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
         "core/CustomData",
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
             'master-combat-core/getting-started/installation',
             'master-combat-core/getting-started/first-damage-graph',
             'master-combat-core/getting-started/melee-damage',
             'master-combat-core/getting-started/projectile',
             'master-combat-core/getting-started/buff',
             'master-combat-core/getting-started/dot',
           ],
        },
        {
           type: 'category',
           label: 'Graph System',
           items: [
             'master-combat-core/graph-system/overview',
             'master-combat-core/graph-system/GraphObject',
             'master-combat-core/graph-system/runtime',
             'master-combat-core/graph-system/dynamic-variables',
             'master-combat-core/graph-system/involved-entity',
           ],
        },
        {
           type: 'category',
           label: 'Nodes',
           items: [
             'master-combat-core/nodes/overview',
             'master-combat-core/nodes/trigger',
             'master-combat-core/nodes/condition',
             'master-combat-core/nodes/action',
             'master-combat-core/nodes/variable-math',
             'master-combat-core/nodes/entity',
             'master-combat-core/nodes/branch',
           ],
        },
        'master-combat-core/custom-node-tool',
        {
           type: 'category',
           label: 'Damage Component',
           items: [
             'master-combat-core/damage-component/overview',
             'master-combat-core/damage-component/combat-damage',
             'master-combat-core/damage-component/graphinstance',
             'master-combat-core/damage-component/over-time-effect-instance',
           ],
        },
        'master-combat-core/debug',
        'master-combat-core/demo',
      ],
    },

    {
      type: 'category',
      label: 'Master Inventory Engine',
      items: [
        'master-inventory-engine/overview',
        {
            type: 'category',
            label: 'Getting-Started',
            items: [
             'master-inventory-engine/getting-started/installation',
             'master-inventory-engine/getting-started/upgrade',
             'master-inventory-engine/getting-started/getting-started',
             'master-inventory-engine/getting-started/common-use-cases',
           ],
        },
         'master-inventory-engine/settings',
         {
            type: 'category',
            label: 'Item-Class',
            items: [
             'master-inventory-engine/item-class/item-object',
             'master-inventory-engine/item-class/item-data',
             'master-inventory-engine/item-class/inventory-stack',
             'master-inventory-engine/item-class/item',
             'master-inventory-engine/item-class/enchantment',
           ],
        },
        {
            type: 'category',
            label: 'UI',
            items: [
             'master-inventory-engine/ui/item-icon',
             'master-inventory-engine/ui/windows-manager',
           ],
        },
        'master-inventory-engine/callbacks',
         {
            type: 'category',
            label: 'Expansions',
            items: [
             'master-inventory-engine/expansions/modding-support',
             'master-inventory-engine/expansions/mouse-control',
             'master-inventory-engine/expansions/master-character-creator',
           ],
        },
        'master-inventory-engine/item-class/loot-pack',
        'master-inventory-engine/useful-modules',
      ],
    },

    {
      type: 'category',
      label: 'Master Character Creator',
      items: [
        'master-character-creator/overview',
        'master-character-creator/comingSoon',
      ],
    },

    {
      type: 'category',
      label: 'Master Map|Navigation',
      items: [
        'master-map-navigation/overview',
        'master-map-navigation/comingSoon',
      ],
    },

  ],
};

module.exports = sidebars;
