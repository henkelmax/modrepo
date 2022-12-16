---
titleTemplate: Simple Voice Chat
aside: false
---

# Registering Events

You can only register events in the `registerEvents` method in your `VoicechatPlugin` class.
Trying to call `EventRegistration.registerEvent` after this method call will not work.

```java
@Override
public void registerEvents(EventRegistration registration) {
    registration.registerEvent(VoicechatServerStartedEvent.class, this::onServerStarted);
}

@Override
public void onServerStarted(VoicechatServerStartedEvent event) {
    System.out.println(event.getVoicechat());
}
```

If you want to give your event a higher or lower priority, you can do this by passing an integer to the `registerEvent` method.
Higher numbers mean a higher priority and thus an earlier invocation than registered events without a priority.
`0` is the default priority.

```java
@Override
public void registerEvents(EventRegistration registration) {
    registration.registerEvent(VoicechatServerStartedEvent.class, this::onServerStarted, 100);
}

@Override
public void onServerStarted(VoicechatServerStartedEvent event) {
    System.out.println(event.getVoicechat());
}
```

A list of all events can be found [here](https://voicechat.modrepo.de/de/maxhenkel/voicechat/api/events/package-summary.html).