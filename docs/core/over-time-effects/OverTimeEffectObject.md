---
title: OverTimeEffectObject
---
```csharp
class OverTimeEffectObject : DataObject
```

`OverTimeEffectObject` is a **data object** that manages all over-time effect definitions within the system.

You can create this object via:

`Create > SoftKitty > Data Objects > Over Time Effect Data`



### Properties

#### `List<OverTimeEffect> OverTimeEffects`

A list of all over-time effects available in the system, including damage-over-time effects, buffs, and debuffs.

Each entry defines:
- Duration
- Stacking rules
- Visual representation
- Execution logic

See:  [OverTimeEffect](./OverTimeEffect.md)

---

#### `float OverTimeEffectInterval`

The global tick interval (in seconds) used to evaluate over-time effects.

Example:
- `1.0` → effects tick once per second
- `0.2` → effects tick five times per second

---

### Methods

#### `GetOverTimeEffect(int id)`

Retrieves an over-time effect using its integer ID.
```csharp
OverTimeEffect effect = data.GetOverTimeEffect(3);
```

Use this for performance-critical lookups.

---

#### `GetOverTimeEffect(string uid)`

Retrieves an over-time effect using its string UID.

```csharp
OverTimeEffect effect = data.GetOverTimeEffect("fireDot");
```

More readable and convenient for scripting.

---