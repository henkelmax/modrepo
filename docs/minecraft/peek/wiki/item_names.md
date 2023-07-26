---
titleTemplate: Peek
aside: false
---

# Item Names

Item names for shulker boxes allow you to add an item icon to the lid of shulker boxes in the world and in item form.

Item names need to be enabled in the [config](configuration) (`use_shulker_box_item_names`).

When using this, you aren't able to add custom text to the shulker box lid.
Use [data strings](data_strings) for that.
Item names are the simpler alternative to data strings.

## Format

Item names are not case sensitive.
There are two ways of adding an item name to a shulker box:

### By ID

The ID of the item with underscores (`_`) replaced by spaces (` `).
For example, `minecraft:iron_ingot` would be `Iron Ingot`, `iron ingot` or `IRON INGOT`.
If there are conflicts with other mods adding items with the same ID, you can use the mod ID as a prefix.
For example, `testmod:iron_ingot` would be `Testmod Iron Ingot`, `testmod iron ingot` or `TESTMOD IRON INGOT`.

### By translated name

The actual name of your item in the language you are using.
For example, `Iron Ingot` would be `Iron Ingot`, `iron ingot` or `IRON INGOT` if your game language is English.
If your game language is German, `Iron Ingot` would be `Eisenbarren`, `eisenbarren` or `EISENBARREN`.
