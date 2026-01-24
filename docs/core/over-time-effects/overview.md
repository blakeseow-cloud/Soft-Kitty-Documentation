---
title: Overview
---

Over-Time Effects (DoT, buffs, debuffs) define **time-based behaviors** applied to entities during gameplay, such as damage over time, temporary stat boosts, or persistent status effects.

This system separates **effect definitions**, **runtime state**, and **execution logic**, making it flexible, performant, and easy to extend.

### Core Components

- **[OverTimeEffectObject](./OverTimeEffectObject.md)**  
  Manages all over-time effect definitions and global tick settings.

- **[OverTimeEffect](./OverTimeEffect.md)**  
  Defines how a single effect behaves, including duration, stacking rules, visuals, and logic.

- **[OverTimeEffectData](./OverTimeEffectData.md)**  
  Runtime data representing an active effect applied to an entity.

### Design Philosophy

Over-time effects are **data-driven** and **graph-controlled**.  
Behavior is defined visually using a Graph Object, while runtime execution remains efficient and deterministic.

---
