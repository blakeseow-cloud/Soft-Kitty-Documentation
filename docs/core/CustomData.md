---
title: SoftKitty.CustomData
---

## CustomData


**CustomData** is used to store customizable data on an [Entity], allowing developers to adapt the system to different project needs.

Supported data types include:
- **float**
- **int**
- **bool**
- **string**
- **IntList** `(List<int>)`
- **IdIntList** `(List<KeyValuePair<int, int>>)`
- **IdFloatList** `(List<KeyValuePair<int, float>>)`

Each `CustomData` entry consists of a unique string key paired with a value.

You can configure the `CustomData` set in the [EntityManagerObject]:
`Project Settings → SoftKitty → Entity Manager`

Once configured, all [Entity] will share the same `CustomData` structure.

![](../../static/img/20260119-141940.png)

---


### Code Example

#### float
```csharp
float _damageMulti = GameManager.GetPlayer().GetCustomFloat("DamageMulti");
GameManager.GetPlayer().SetCustomFloat("DamageMulti", 10f);
```

#### int
```csharp
int _damageMulti = GameManager.GetPlayer().GetCustomInt("DamageMulti");
GameManager.GetPlayer().SetCustomInt("DamageMulti", 10);
```

#### string
```csharp
string _lastWord = GameManager.GetPlayer().GetCustomString("LastWord");
GameManager.GetPlayer().SetCustomString("LastWord", "Hello!");
```

#### bool
```csharp
bool _hasTeam = GameManager.GetPlayer().GetCustomBool("HasTeam");
GameManager.GetPlayer().SetCustomBool("HasTeam", true);
```

#### IntList
```csharp
var _skills = GameManager.GetPlayer().GetCustomIntList("Skills");
foreach(var obj in _skills.list){
    Debug.Log("Skill:" + obj.ToString());
}
_skills.Add(12);
_skills.Remove(12);
_skills.RemoveAt(0);
_skills.SetValueByIndex(2,10);
_skills.Clear();
```

#### IdIntList
```csharp
var _items = GameManager.GetPlayer().GetCustomIdIntList("Items");
foreach(var obj in _items.list){
    Debug.Log("Item  id:" + obj.id.ToString() + "  num:" +  obj.value.ToString());
}
_items.Add(new IdInt(2,1));
_items.Remove(new IdInt(2,1));
_items.RemoveAt(0);
_items.SetValueByIndex(2,new IdInt(2,1));
_items.SetValueById(12,5);
int _num = _items.GetValueById(12);
int _num2 = _items.GetValueByIndex(2);
_items.Clear();
```

#### IdFloatList
```csharp
var _items = GameManager.GetPlayer().GetCustomIdFloatList("Items");
foreach(var obj in _items.list){
    Debug.Log("Item  id:" + obj.id.ToString() + "  durability:" +  obj.value.ToString());
}
_items.Add(new IdFloat(2,100F));
_items.Remove(new IdFloat(2,100F));
_items.RemoveAt(0);
_items.SetValueByIndex(2,new IdFloat(2,100F));
_items.SetValueById(12,5F);
int _num = _items.GetValueById(12);
int _num2 = _items.GetValueByIndex(2);
_items.Clear();
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