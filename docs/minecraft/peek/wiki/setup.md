---
titleTemplate: Peek
aside: false
---

# Setup

With the config option `show_shulker_box_block_hint`, you can enable the mod to show additional information about the shulker box block on the lid of the shulker box when placed down.

However, the server does not send information about the contents of shulker boxes to the client.
This means that shulker boxes that are not placed or opened by the player cannot display any information.
Furthermore, this information is also lost after relogging.

To fix this problem you need to install the mod on the server with the config option `send_shulker_box_data_to_client` enabled.
