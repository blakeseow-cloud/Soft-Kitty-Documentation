---
title: Modding Support
---

The Master Inventory Engine is designed to facilitate **modding** from your community, allowing for flexible data management. The following data types within the [ItemObject] can be imported or exported using JSON format, both in the **Editor** and at **runtime**: 

### ITEM DATA 
**Editor**: Navigate to the `Project Settings/SoftKitty/SubData - Items`, then locate the `Item Settings` section. Click on **Import From JSON** or **Export To JSON**. 
![](../../../static/img/20260214-131406.png)

#### Runtime:  
- **Import**: To import [Item] data from a mod directory, call:  

```csharp
ItemObject.instance.ImportItemDataFromJson(string _absolutePath);
```

- **Export**: To export modified item data (e.g., from your modding tool), call:  

```csharp
ItemObject.instance.ExportItemDataToJson(string _absolutePath);
```

- **Note**: The path provided for both import and export operations must be an **absolute path**. 


---

### ENCHANTMENT DATA 
**Editor**: Navigate to the `Project Settings/SoftKitty/SubData - Items`, then locate the `Enchantment Settings` section. Click on **Import From JSON** or **Export To JSON**. 

#### Runtime:  
- **Import**: To import [Enchantment] data from a mod directory, call: 
 
```csharp
ItemObject.instance.ImportEnchantmentDataFromJson(string _absolutePath);
```

- **Export**: To export modified enchantment data (e.g., from your modding tool), call:  

```csharp
ItemObject.instance.ExportEnchantmentDataToJson(string _absolutePath);
```

- **Note**: The path provided for both import and export operations must be an **absolute path**.

---

<!-- API LINKS -->
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