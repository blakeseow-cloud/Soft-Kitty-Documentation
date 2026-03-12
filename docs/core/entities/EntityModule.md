---
title: EntityModule
---
```csharp
class SoftKitty.EntityModule
```

`EntityModule` is an extension system for the [Entity] class.
It allows additional features and data to be attached to an [Entity] without modifying the core Entity code.

This design keeps the core system lightweight while allowing different packages (such as InventoryEngine, CombatCore, or other future systems) to extend entities independently.

Typical examples of modules include:

- Inventory systems

- Combat data

- Skill trees

- AI states

- Dialogue data

- Character customization data

Each system can provide its own module that stores data and implements its own logic and editor interface.

---

### How It Works

An [Entity] contains a list of modules:

```csharp
public List<EntityModuleWrapper> Modules = new List<EntityModuleWrapper>();
public class EntityModuleWrapper
{
    public EntityModule GetModule(){...}
    ...
}
```

Each module derives from the abstract base class:

```csharp
public abstract class EntityModule
```

The module receives a reference to its parent [entity] during initialization:

```csharp
[SerializeReference]
protected Entity entity;
```

This allows modules to access or modify the [entity] when necessary.

---

### Accessing Modules

Modules can be retrieved using their type.

#### Retrieve a module

```csharp
InventoryModule inventory = entity.GetModule<InventoryModule>();
```

#### Check if a module exists

```csharp
if(entity.HasModule<InventoryModule>())
{
    // Inventory system available
}
```
This allows systems to safely interact with optional features.

---

### Runtime Initialization

Modules can run initialization logic when the game starts:

```csharp
public virtual void RuntimeInit()
{
}
```

This is typically used for:

- setting runtime state

- rebuilding references

- preparing cached data

---

### Providing Additional Attributes

Modules can contribute additional [attribute]s to the entity.

Two helper methods are available:

```csharp
public virtual float GetAttributeValue(int id)
public virtual float GetAttributeValue(string uid)
```

For example, an equipment module could provide bonus [attribute]s such as:

- strength

- defense

- critical chance

The core [attribute] system will query modules when calculating final [attribute] values.

---

### Saving and Loading

Each module is responsible for saving and loading its own data.

#### Save module data

```csharp
public abstract string ToJson();
```

This converts the module data into a json string.

#### Load module data

```csharp
public abstract EntityModule FromJson(string _json);
```

This reconstructs the module's data from a json string.

---

### Cloning Modules

[Entities] can be duplicated during gameplay.
To support this, modules must implement a copy function:

```csharp
public abstract EntityModule Copy();
```

This should return a new instance containing the same data.

---

### Runtime save data

```csharp
public abstract string CompressData();
```

Compress full data into a compact format. To ensure only minimal data is saved for the game.

```csharp
public abstract string UncompressData(string _compactJson);
```
Uncompress data from a compact format. This should be the reversed conversion of CompressData();

---

### Creating a Custom Module

To extend the [Entity] system, create a class that inherits from EntityModule.

_Example:_:

```csharp
public class InventoryModule : EntityModule
{
    public List<Item> items = new List<Item>();

    public override void RuntimeInit(){
        for(int i=0;i<items.Count;i++)items[i].Init();
    }

    public override EntityModule Copy()
    {
        InventoryModule copy = new InventoryModule();
        copy.items= new List<Item>();
        for(int i=0;i<items.Count;i++)copy.items.Add(items[i].clone());
        return copy;
    }

    public override string ToJson()
    {
        return JsonUtility.ToJson(this);
    }

    public override EntityModule FromJson(string _json)
    {
         return (InventoryModule)JsonUtility.FromJson(_json, typeof(InventoryModule));
    }

    public override string CompressData(){
        return ItemDataFormatter.Zip(items);
    }

    public override string UncompressData(string _compactJson){
        return ItemDataFormatter.Unzip(_compactJson);
    }

    ...your own api
}

```
This module can now be attached to [entities] and accessed by other systems.

---

### Extending the Entity Inspector

Modules can also extend the [Entity] editor inspector.

The system uses an inspector registry:

```csharp
EntityInspectorRegistry.Register(...)
```

Custom inspector modules implement:

```csharp
public interface IEntityInspectorModule
{
    bool DrawInspector(Entity entity, EntityManagerObject target);
    void DrawRuntimeInspector(EntityComponent target);
}
```

_Example:_:

```csharp
public class InventoryInspectorModule : IEntityInspectorModule
{
    public bool DrawInspector(Entity entity, EntityManagerObject target)
    {
        // draw editor UI
        for(var item in myTarget.mData.GetModule<InventoryModule>().items){
            GUILayout.BeginHorizontal();
            GUILayout.Space(20);
            GUILayout.Box(item.icon, GUILayout.Width(20), GUILayout.Height(20));
            GUILayout.TextField( item.name, GUILayout.Width(100));
            ...
            GUILayout.EndHorizontal();
        }
        return GUI.changed;
    }

    public void DrawRuntimeInspector(EntityComponent target)
    {
        // draw runtime UI (readonly)
    }
}
```

Then register it automatically:

```csharp
[InitializeOnLoad]
public static class InventoryInspectorRegister
{
    static InventoryInspectorRegister()
    {
        EntityInspectorRegistry.Register(new InventoryInspectorModule());
    }
}
```

This allows external packages to extend the [Entity] editor without modifying the core inspector code.

---

### Benefits of the Module System

The EntityModule system provides several advantages:

- Modular architecture — systems remain independent

- No circular dependencies between packages

- Expandable entities without modifying the base class

- Optional features that only exist when the corresponding package is installed

- Custom inspector support for editor extensions

This architecture makes it easy to build complex gameplay systems while keeping the core framework stable and maintainable.

Check [InventoryModule] as an example reference.

---

[attribute]: /docs/core/attributes/AttributeData

<!-- API LINKS -->
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