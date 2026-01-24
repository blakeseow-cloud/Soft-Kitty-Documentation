---
title: OverTimeEffect
---
```csharp
class OverTimeEffect
```

`OverTimeEffect` defines the **static configuration** of an over-time effect, such as a buff, debuff, or damage-over-time effect.

This data determines **what the effect does**, not its runtime state.

### Properties

#### `string uid`

Unique string identifier used to reference this effect in code and data.

---

#### `int id`

Unique integer ID used internally for fast lookups.

---

#### `string name`

Display name shown in UI (e.g. *Poison*, *Burn*, *Freeze*).

---

#### `string category`

Category used to group effects, such as:

- Buff
- Debuff
- DoT

---

#### `Texture icon`

Icon used to represent the effect in UI.

Supported loading methods include:
- Direct Reference
- Resources
- Asset Bundles
- Addressables
- Custom loaders

---

#### `float duration`

Total duration of the effect in seconds.

---

#### `Color backGroundColor`

Background color used when displaying the effect in UI.

---

#### `Color frameColor`

Frame or border color used in UI.

---

#### `GraphObject DesignGraph`

Defines the behavior of the effect using the visual graph system.

This graph controls:
- Tick logic
- Scaling
- Conditional behavior

---

#### `List<DynamicFloat> DynamicVariables`

Dynamic variables passed into the graph at runtime, allowing behavior to be modified without changing graph structure.

---

#### `List<CustomField> mCustomField`

Custom data fields that allow you to attach arbitrary objects to this effect.

---

### Methods

#### `GetCustomObject<T>(string key)`

Retrieves a custom object associated with this effect.

```csharp
AudioClip clip = effect.GetCustomObject<AudioClip>("HitSound");
```

Useful for attaching:
- Prefabs
- Audio
- VFX
- Data assets

---
