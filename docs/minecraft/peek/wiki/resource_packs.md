---
titleTemplate: Peek
aside: false
---

# Resource Packs

## Flat Shulker Icons

The built-in `Flat Shulker Icons` resource pack shows shulker boxes directly from the top.

![](images/builtin_resource_pack.png)


**Without the `Flat Shulker Icons` resource pack**:

![](images/no_resource_pack.png)

**With the `Flat Shulker Icons` resource pack**:
![](images/resource_pack.png)

## Custom Resource Packs

<!-- TODO Add documentation for 1.21.4+ -->

### Shulker Box Hints (Minecraft 1.19.2 - 1.21.3)

You can create your own resource pack to customize the way items are rendered on shulker boxes.
Just add the override predicate `peek:shulker_item` to `1` in your item model.

Example item model override:
``` json{7}
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/golden_apple"
  },
  "overrides": [
    { "predicate": {  "peek:shulker_item": 1 }, "model": "item/golden_apple/custom_model"}
  ]
}
```

### Decorated Pot Hints (Minecraft 1.19.2 - 1.21.3)

You can also customize hints on decorated pots by using the predicate `peek:decorated_pot_item`.

Example item model override:
``` json{7}
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/golden_apple"
  },
  "overrides": [
    { "predicate": {  "peek:decorated_pot_item": 1 }, "model": "item/golden_apple/custom_model"}
  ]
}
```