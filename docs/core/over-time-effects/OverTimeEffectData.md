---
title: OverTimeEffectData
---
```csharp
class OverTimeEffectData
```

`OverTimeEffectData` represents the **runtime state** of an over-time effect currently applied to an entity.

This data is created and managed automatically during gameplay.

### Properties

#### `string uid`

Links this runtime instance to its corresponding [OverTimeEffect](./OverTimeEffect.md) setting.

---

#### `float timer`

Remaining lifetime (in seconds) before the effect expires.

---

#### `int layer`

Current stack count of this effect.

Used for effects that support stacking, such as:
- Poison
- Burning
- Bleeding

---

#### `string dealer`

UID of the entity that applied this effect.

This is commonly used for:
- Damage attribution
- Trigger conditions
- Combat logs

---