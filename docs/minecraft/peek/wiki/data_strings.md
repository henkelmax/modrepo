---
titleTemplate: Peek
aside: false
---

# Data Strings

Data strings for shulker boxes allow you to customize the appearance of shulker boxes in the world and in item form.

Data strings need to be enabled in the [config](configuration) (`use_shulker_box_data_strings`).

## Format

Data strings must be enclosed in curly brackets (`{}`) and must be present at any point in the custom name of a shulker box.
The config option `hide_shulker_box_data_strings` can be used to hide the data strings on tooltips and GUIs.
This setting is enabled by default.
Note that this only allies to you. other players on your server will still see the data strings.
they are just hidden client-side with the mod.

The data string can contain multiple key-value fields, separated by semicolons (`;`).
Keys and values are separated by equals (`=`).

### Fields

| Field name | Field short name | Description                                                        |
| ---------- | ---------------- | ------------------------------------------------------------------ |
| `item`     | `i`              | The ID of the item that should be displayed on the shulker box lid |
| `label`    | `l`              | The text that should get displayed on the lid of the shulker box   |

## Examples

`My Box {i=stone;l=Rocks}`

This will display a stone block (ID `stone`) and the text `Rocks` on the lid of the shulker box.
The name of the shulker box will be `My Box`. This will get shown in the GUI and on the hover tooltip.

`Wooden stuff {i=stick;l=Wood Box}`

This will display a stick (ID `stick`) and the text `Wood Box` on the lid of the shulker box.
The name of the shulker box will be `Wooden stuff`. This will get shown in the GUI and on the hover tooltip.
