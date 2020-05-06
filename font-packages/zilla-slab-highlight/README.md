# @expo-google-fonts/zilla-slab-highlight

This package lets you use the [**Zilla Slab Highlight**](https://fonts.google.com/specimen/Zilla+Slab+Highlight) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Zilla Slab Highlight

![Zilla Slab Highlight](./font-family.png)

This font family contains [2 styles](#gallery).

- `ZillaSlabHighlight_Regular400`
- `ZillaSlabHighlight_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/zilla-slab-highlight expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ZillaSlabHighlight_Regular400,
  ZillaSlabHighlight_Bold700,
} from '@expo-google-fonts/zilla-slab-highlight';

export default () => {
  let [fontsLoaded] = useFonts({
    ZillaSlabHighlight_Regular400,
    ZillaSlabHighlight_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlabHighlight_Regular400' }}>
          ZillaSlabHighlight_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ZillaSlabHighlight_Bold700' }}>
          ZillaSlabHighlight_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ZillaSlabHighlight_Regular400
![ZillaSlabHighlight_Regular400](./dbd546264c0d549b6c3cd17c1acf40b35bbe910885e09b5e2a270aa090b6ee53.ttf.png)

##### ZillaSlabHighlight_Bold700
![ZillaSlabHighlight_Bold700](./be3605b5e26a2439fde6293b4159f4c401273e65483cab10505e6c4010523ece.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Zilla Slab Highlight on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab+Highlight)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zilla-slab-highlight)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zilla-slab-highlight)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
