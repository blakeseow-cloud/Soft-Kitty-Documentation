---
title: Useful Modules
---

### ItemDragManager 
This module is used to drag items around. 

#### `ItemDragManager.PlayDeleteAnimation(`[InventoryItem]` _source, Vector3 _pos, int _overrideNum = 0)` 
Plays the delete animation for an item icon, causing the icon to fall to the bottom of the screen. 

#### `ItemDragManager.StartDragging(`[ItemIcon]` _source, RectTransform _rect, int _overrideNum = 0)` 
Starts dragging an item. After the drag-and-drop action, the _source will be called by `EndDrag()`. 

---

### CraftingProgress 
This module is used to monitor if an [InventoryData] is executing a crafting job and to display a progress bar showing the crafting progress. To use the module, simply drag the **Prefabs/Ui/CraftingProgress.prefab** to your UI canvas and assign the [InventoryData] component of your NPC or crafting table to the **Holder** slot in the `CraftingProgress` component. 

---

### HoverInformation: 
This module shows detailed information about an item. 

#### `HoverInformation.SetCompareHolder(`[InventoryData]` _holder)` 
Sets an [InventoryData] so that the hovering item's attributes can be compared with the equipment of this `InventoryData`. 

#### `HoverInformation.ShowHoverInfo(`[ItemIcon]` _source, `[Item]` _item, int _num, RectTransform _anchor, float _priceMultiplier) `
Shows detailed information for the provided item icon. The information panel will align with the `_anchor` RectTransform. 

---

### HintManager: 
This module displays short hint text in a small floating window, useful when the mouse hovers over buttons or icons. To use this module, simply add the `HintText` component to any UI element and fill in the hint text. 

---

### DynamicMsg: 
This module displays popup messages and large flashy icons of items when players acquire new items. 

#### `DynamicMsg.PopMsg(string _text)` 
Displays a message with the provided text. 

#### `DynamicMsg.PopItem(`[Item]` _item, int _number = 1)` 
Shows a flashy big icon of an item. 

---

### NumberInput: 
This module prompts the player to input numbers. For example, when a player tries to split an item stack, this module can be used to ask how many items they want to split. 

#### `NumberInput.GetNumber(int _startValue, int _maxiumValue, RectTransform _rect, NumberCallback _callback) `
Displays a panel prompting the player to input a number. After the player confirms, the _callback is called with the resulting number. 

---

### StatsUi: 
This module displays the total attributes of an [Entity]. Attach this script to a UI panel, assign the necessary UI elements, and call:
```csharp
 public void Init(string _entityUID);
 ```
 to display the stats.

You can find an example prefab in: **SoftKitty/InventoryEngine/Prefabs/Ui/PlayerStats.prefab** 

Example code: 

```csharp
GetComponent<StatsUi>().Init("player");
```

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