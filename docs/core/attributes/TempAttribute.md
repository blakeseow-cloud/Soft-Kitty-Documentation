---
title: TempAttribute
---
```csharp
class TempAttribute
```

`TempAttribute` represents time-based modifiers applied to attributes, such as buffs or debuffs.



### Properties

#### `float value`

The value applied by this temporary attribute.

---

#### `float timestamp`

The remaining duration or expiration time.

---

#### `BasicMathFunction mathFunction` 
```csharp
enum 
```
The math function used to apply this value:

- Add

- Multiply

- Override

- Max

- Min

---

### Methods
#### `float GetValue(float _base)`

Returns the merged result of the base value and the temporary modifier.

---