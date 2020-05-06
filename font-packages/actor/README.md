# @expo-google-fonts/actor

This package lets you use the [**Actor**](https://fonts.google.com/specimen/Actor) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Actor

![Actor](./font-family.png)

This font family contains [1 style](#gallery).

- `Actor_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/actor expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Actor_Regular400 } from '@expo-google-fonts/actor';

export default () => {
  let [fontsLoaded] = useFonts({
    Actor_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Actor_Regular400' }}>
          Actor_Regular400
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Actor_Regular400
![Actor_Regular400](./417b785d001974cb097e1f84b068ed6f47fa9c5317bf90801a55709954b59350.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Actor on Google Fonts](https://fonts.google.com/specimen/Actor)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/actor)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/actor)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
