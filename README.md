Master Combat Core – Visual Node Graph Framework

Master Combat Core is a powerful, data-driven combat framework designed to help developers build complex, scalable combat systems using an intuitive visual node graph.

Instead of hard-coding combat logic, you design it visually: connect conditions, triggers, math, and actions to create flexible combat behaviors that are easy to understand, debug, and extend.The system is built with performance and architecture in mind, making it suitable for both small indie projects and large, complex games.

Whether you are a beginner looking to build an advanced combat system quickly, or an experienced developer aiming to speed up iteration and maintain clean code, Master Combat Core is designed to fit naturally into your workflow.

Designed with a Data-Driven Mindset
At the core of the framework is a strict separation between data and behavior:
Combat logic lives in Graph Objects (ScriptableObjects)
Runtime execution uses lightweight Graph Instances
Entities and attributes exist independently from scene objects
No per-frame ticking or hidden update loops
This means combat can be simulated, tested, and executed without relying on scene presence, while still integrating cleanly with GameObjects for presentation, animation, and effects.

Visual Node Graph Combat Logic
The visual graph editor allows you to build combat logic using:
Condition Nodes (attribute checks, comparisons, raycasts, tags, etc.)
Trigger Nodes (group conditions, caching, reset logic)
Action Nodes (damage, effects, animations, stat changes, messages)
Math & Variable Nodes (calculations, dynamic runtime values)
Branch Nodes (logic flow control)
Entity Nodes (Player, Dealer, Target, Instance entities)
Graphs are fast to iterate, easy to debug, and fully reusable across characters, enemies, and effects.


Flexible Entity & Attribute System
Combat data is driven by a robust entity system:
Centralized Entity Manager
Upgrade scalingAttribute system with:
Base values
Time-based temporary modifiers

Timestamp-based evaluation (no ticking)
Attributes are evaluated only when accessed, making the system extremely efficient and safe to scale.


Graph-Driven Damage & Effects
Damage, buffs, and debuffs are all graph-based:
Combat Damage Component for physics-based damage execution
Over-Time Effect (DoT & Buff) Graphs
Stackable effects, duration control, and expiration logic
No hard-coded effect behavior
Designers can create complex effects such as poison, freeze, lifesteal, critical hits, reflection, and invincibility entirely through graphs.


High Performance by Design
Master Combat Core is built for runtime efficiency:
Resolve-once, execute-many architecture
Direct node references at runtime
Cached graph evaluation results
No per-frame updates
No string-based lookups during gameplay
Even complex damage graphs execute efficiently and scale well with large numbers of entities.


Extensible & Developer-Friendly
The framework is designed to be extended:
Developers can create custom node types
Built-in tools generate base class and interface code
Custom logic plugs directly into the graph editor
Clean APIs for runtime control
Advanced users can extend core behavior via custom root nodes and GraphInstance subclasses.


Included Full Roguelike Demo
The package includes a fully playable roguelike combat demo showcasing:
AI-driven enemies with scalable difficulty
Attribute-based leveling and progression
Loot, buffs, debuffs, and weapon enchantments
Graph-driven combat logic in real gameplay scenarios
This demo serves as both a learning resource and a real-world example of how the system scales.


Documentation & Community
Comprehensive online documentation
Step-by-step guides and examples
A dedicated community forum (link provided separately)
Designed to be easy to learn and powerful to master


Who Is This For?
Developers who want a visual combat system
Teams aiming for fast iteration and clean architecture
Designers who prefer working without writing gameplay code
Advanced developers who need performance and extensibility

Master Combat Core – Visual Node Graph Framework gives you the freedom to design advanced combat systems visually, without sacrificing performance, structure, or control.
