---
titleTemplate: Peek
aside: false
---

# Shulker Box Hints

Shulker box hints add useful information to the lid of shulker boxes.
This includes an item icon and text.
Hints are enabled by default for blocks and items in the [config](configuration).

`show_shulker_box_item_hint` shows shulker box hints on shulker box items in your inventory.
<br/>
`show_shulker_box_block_hint` shows shulker box hints on shulker box blocks when placed down.



By default the mod itself tries to determine which information to show on the lid:

- If the shulker box has a custom name, the mod will show the name on the lid
- If the shulker box only contains a single type of item, the mod will show the item on the lid

## Customization

There are two ways of customizing the shulker box hints:

- [Data strings](data_strings)
- [Item Names](item_names)

Despite this, you are able to modify the way shulker boxes and items are rendered in your inventory by using the builtin [resource pack](resource_packs#flat-shulker-icons) or [your own resource pack](resource_packs#custom-resource-packs).
