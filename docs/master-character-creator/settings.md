---
title: Settings
---

---

You can access the character  customization settings via:
`ProjectSettings > SoftKitty > SubData - Character Customization > Detailed Character Customization Settings`
The character customization data is organized into the following categories:

![](../../static/img/20260444-154459.png)

These categories provide a modular structure for fully customizing your character's appearance, allowing developers to tweak everything from body proportions to detailed accessories and outfits.You can easily modify the below settings manually. Additionally, we provide tools that allow you to set up those customization options with a single click when adding new customization items. For more detailed instructions, please refer to:

- [Customization Textures]
- [Accessories Models]
- [Outfits Models]

---

#### Race SETTINGS

Defines the blendshape combination, texture override and accessories of different races. You can add your own race here by simply adjust the settings.

![](../../static/img/20260452-155209.png)

---

#### BONE SETTINGS

Defines the character’s skeletal structure and proportions. This includes settings for bone scaling, positioning, and rotation to customize the body shape.

![](../../static/img/20260452-155248.png)

---

#### MATERIAL SETTINGS

Controls the visual appearance of the character’s skin, hair, and other textures. This includes customization options like skin tone, eye color, hair color, and material attributes like offset and transparency.

![](../../static/img/20260453-155344.png)

---

#### ACCESSORY SETTINGS

Includes customization options for accessories such as beards, hairs, or other character enhancements. These settings allow for adding, modifying, or removing accessories from the character.

![](../../static/img/20260454-155434.png)

---

#### OUTFIT SETTINGS

Manages the character’s clothing and armor, divided into separate parts like helmet, armor, gauntlets, and boots. Each slot can be customized or swapped to create unique outfits.

![](../../static/img/20260455-155528.png)

Each outfit setting is a scriptable object, which can be created via context menu:
`Create > Soft Kitty > Character Creator > Outfit Info`

![](../../static/img/20260400-160023.png)

When we release new outfits in the future, they will come with these `Outfit Info` scriptable objects, simply drag them to the end of the associated list will add them to your game.

---


<!-- API LINKS -->
[Accessories Models]: /docs/master-character-creator/implementing-your-models/accessories-models
[Customization Textures]: /docs/master-character-creator/implementing-your-models/customization-textures
[Outfits Models]: /docs/master-character-creator/implementing-your-models/outfits-models
[CharacterAppearance]: /docs/master-character-creator/system/appearance-data
[CharacterCustomizationModule]: /docs/master-character-creator/system/character-customization-module
[CharacterCustomizationObject]: /docs/master-character-creator/system/character-customization-object
[CharacterEntity]: /docs/master-character-creator/system/character-entity
[InventoryModule]: /docs/master-inventory-engine/inventory-module
[EntityModule]: /docs/core/entities/EntityModule
[Loot Pack]:/docs/master-inventory-engine/item-class/loot-pack
[Item Database Settings]:/docs/master-inventory-engine/settings
[ItemChangeCallback]:/docs/master-inventory-engine/callbacks
[ItemDropCallback]:/docs/master-inventory-engine/callbacks
[ItemUseCallback]:/docs/master-inventory-engine/callbacks
[Callbacks]:/docs/master-inventory-engine/callbacks
[LinkIcon]:/docs/master-inventory-engine/ui/item-icon
[InventoryItem]:/docs/master-inventory-engine/ui/item-icon
[ItemIcon]:/docs/master-inventory-engine/ui/item-icon
[WindowsManager]:/docs/master-inventory-engine/ui/windows-manager
[Enchantment]: /docs/master-inventory-engine/item-class/enchantment
[InventoryStack]: /docs/master-inventory-engine/item-class/inventory-stack
[InventoryData]: /docs/master-inventory-engine/item-class/item-data
[Item]: /docs/master-inventory-engine/item-class/item
[ItemObject]: /docs/master-inventory-engine/item-class/item-object
[Attribute]: /docs/core/attributes/Attribute
[AttributeData]: /docs/core/attributes/AttributeData
[AttributeObject]: /docs/core/attributes/AttributeObject
[TempAttribute]: /docs/core/attributes/TempAttribute
[Entity]: /docs/core/entities/Entity
[Entities]: /docs/core/entities/Entity
[EntityComponent]: /docs/core/entities/EntityComponent
[EntityManagerObject]: /docs/core/entities/EntityManagerObject
[OverTimeEffect]: /docs/core/over-time-effects/OverTimeEffect
[OverTimeEffectData]: /docs/core/over-time-effects/OverTimeEffectData
[OverTimeEffectObject]: /docs/core/over-time-effects/OverTimeEffectObject
[DataObject]: /docs/core/general/DataObject
[GameManager]: /docs/core/general/game-manager
[AssetLoader]: /docs/core/general/AssetLoader
[SGD_Settings]: /docs/core/general/SGD_Settings
[GraphInstance]: /docs/master-combat-core/damage-component/graphinstance
[Dynamic Variables]: /docs/master-combat-core/graph-system/dynamic-variables
[DynamicFloat]: /docs/master-combat-core/graph-system/dynamic-variables
[OverTimeEffectInstance]: /docs/master-combat-core/damage-component/over-time-effect-instance
[CombatDamage]: /docs/master-combat-core/damage-component/combat-damage
[GraphObject]: /docs/master-combat-core/graph-system/GraphObject
[CustomData]:/docs/core/CustomData
[AttributeChangeEvent]: /docs/core/attributes/AttributeData
[OverTimeEffectChangeEvent]:/docs/core/over-time-effects/OverTimeEffectData
[EntityEvent]:/docs/core/entities/Entity
[IntList]:/docs/core/CustomData
[IdIntList]:/docs/core/CustomData
[IdFloatList]:/docs/core/CustomData
[Action Node]:/docs/master-combat-core/nodes/action
[Branch Node]:/docs/master-combat-core/nodes/branch
[Condition Node]:/docs/master-combat-core/nodes/condition
[Condition Group Node]:/docs/master-combat-core/nodes/condition
[Entity Node]:/docs/master-combat-core/nodes/entity
[Trigger Node]:/docs/master-combat-core/nodes/trigger
[Variable Node]:/docs/master-combat-core/nodes/variable-math
[Math Node]:/docs/master-combat-core/nodes/variable-math
<!-- API LINKS -->