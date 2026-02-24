---
title: Installation
---

---

1. Download the package from **`Package Manager`** and click **`Import to Project`**.

---

2. In the **`Project`** window, navigate to:
   - `Assets/SoftKitty/MasterCombatCore/Demo/`

---

3. Import the **demo package** that matches your project’s **`Render Pipeline`**:
   - **`HDRP_Demo.package`**
   - **`URP_Demo.package`**
   - **`Built-In_Demo.package`**
```
Note:
Please import only one of above packages.
```
---

4. Go to:
   `Project Settings > SoftKitty > Data Settings` and expand the **`Data`** section.
   Click the **`Assign`** buttons of all the demo database objects to add them to your project.

![](../../../static/img/20260149-094911.png)

---

1. Open the **`demo scene`** located at: 
   - `Assets/SoftKitty/MasterCombatCore/Demo/Scenes/DemoScene.unity`
   - Verify that the demo runs as expected.

---

6. In the **`demo scene`**, locate the GameObject named
   - **`<<<<Demo Introduction>>> (Click Me!)`**
   - Select it to view a detailed **walkthrough** in the **`Inspector`**.

---

7. In your project, **create** the following data assets:
   - `Create → SoftKitty → Data Objects → General Settings Data`
   - `Create → SoftKitty → Data Objects → Entity Manager Data`
   - `Create → SoftKitty → Data Objects → Attributes Data`
   - `Create → SoftKitty → Data Objects → Over Time Effect Data`

---

8. Open **`Project Settings → SoftKitty`** and drag the newly created
   **`General Settings Data`** asset into the **`Current Settings`** field, 
   replacing the demo settings.

---

9. Navigate to `Project Settings → SoftKitty → Data Settings` and expand the **`Data`** tab.
   
---

10.  Replace the following data assets with your newly created assets:
    - `Entity Manager Data`
    - `Attributes Data`
    - `Over Time Effect Data`

---

11. The system is now ready for your project. You can start exploring the data settings and adding `attributes`, `over-time effects`, and `entities` to the database.

---

### Core Concepts

[EntityManagerObject] | [Entity] | [EntityComponent]

[AttributeObject] | [Attribute] | [AttributeData] | [TempAttribute]

[OverTimeEffectObject] | [OverTimeEffect] | [OverTimeEffectData]

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