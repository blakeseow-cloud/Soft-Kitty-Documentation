---
title: Overview
---

## Master Map|Navigation System

![](../../static/img/20260131-153131.png)

Master Map Navigation System is a comprehensive and performance-optimized solution for integrating dynamic maps, mini-maps, and map navigation systems into your Unity project. Designed to support complex environments like multi-level buildings, interiors, and perfect for RPG games, this package is easy to set up and flexible for developers.


This package is ideal for both scene-based games with pre-designed levels and dynamic worlds. For pre-designed levels up to 4000x4000 meters per scene, use the Static Map Mode to render stylized 2D maps. For procedurally generated worlds or seamless, massive open-world environments, switch to the Dynamic Map Mode with real-time render textures and customizable stylized shaders.

---

### Core Features:

#### Map Generator Tool
- Effortlessly render your 3D scene into stylized 2D map textures.
- Supports multi-layered scenes (e.g., buildings with multiple floors) and interiors.
- Fully customizable with stylized rendering.
- Custom group colors for tags/layers.
- Built-in water and lake surface tools.
- Professional Scanline Renderer.
  
---
#### Sub-Maps: Detail Location Views

- Beyond providing a main map texture for each scene height/layer, the Map System offers Sub-Maps to display highly detailed textures for specific locations within your scene. This allows for an enhanced user experience by revealing granular detail in key areas.
- A key advantage of Sub-Maps is their independent layering. While your main map might have a single layer (height), a Sub-Map for an indoor location like a multi-story castle can have multiple distinct layers (e.g., Basement, Ground Floor, First Floor, Rooftop), each with its own detailed texture.

---

#### Dynamic Map Mode

- Real-time rendering for procedurally generated worlds and seamless open-world environments.
- Supports top-down cameras with customizable stylized rendering shaders.
- Efficient performance: Render texture updates only when the player moves out of the current zone, ensuring minimal performance impact during gameplay.
- Perfect for massive, dynamic game worlds where pre-designed textures aren’t practical.
- Offers flexibility and adaptability for developers working with ever-changing environments.
- Support real-time transparent map overlays.
  
---
#### Mini-Map System
- A highly optimized mini-map that uses 2D coordinates instead of render texture per frame for maximum performance. Features include:Icon customization (textures, size, color).
- Dynamic map rotation with Player Orientation Mode.
- Zoom-in/out with smooth transitions.
- Flexible icon visibility and text display, sub state icons(For example, quest state) options.
  
---
#### World Map System

- Toggle visibility of map icons by categoryFull-featured interactive world map for larger scenes.
- Marker placement and management (Simple marker & customizable list of markers)
- Smooth scrolling and zooming
- Dynamic title display and coordinate support.
  
---
#### Navigation System

- Seamlessly guide players across your world with dynamic pathfinding:Right-click(Configurable) to set navigation points.
- Real-time path updates for moving targets.
- 3D path visualization and map integration.
- Multi-layer support with entrance points.
  
---
#### Customizable Map Points

- Add map points for NPCs, monsters, locations, and more with the MapPoint component.
- Customizable icons, text, and range indicators.
- Hover tooltips for added interactivity.
- State management for quests or events (e.g., attention markers)
- Ability to display map icons (optionally with text) directly within your 3D world view. This is perfect for clearly indicating points of interest, quest objectives, or NPC locations by rendering icons above relevant entities.
  
---
#### Navigation Bar

- A top-screen compass-like navigation bar that dynamically displays nearby map icons and player markers. Easily find points of interest and directions at a glance.
  
---

### Developer-Friendly Features:

- API and Callbacks: Fully documented callbacks for runtime updates, map point states, and navigation path management.
- Seamless Integration: Simple setup with user-friendly tools and editors. Add a map system to your game in just minutes.
- Customizable Appearance: Adjust zoom levels, map layers, navigation icons, and UI layout to fit your game’s visual style.
- Performance Optimized: No render textures per frame, ensuring smooth performance even in large, detailed scenes.
- Streamlined Controller Integration: A dedicated script (e.g., ControllerMapping.cs or the name of the new component) significantly simplify the integration of gamepad and controller support for map navigation and interaction.

---

### Quick Setup & Easy Integration:

- Render your map texture with the Map Generator Tool.
- Add the mini-map and world map prefabs to your UI.
- Drop the MapPoint component onto any GameObject for instant map integration.
- Bake navigation paths using Unity’s NavMesh system.

---