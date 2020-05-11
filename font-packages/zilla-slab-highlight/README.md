# @expo-google-fonts/zilla-slab-highlight

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zilla-slab-highlight)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zilla-slab-highlight)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zilla-slab-highlight)

This package lets you use the [**Zilla Slab Highlight**](https://fonts.google.com/specimen/Zilla+Slab+Highlight) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Zilla Slab Highlight

![Zilla Slab Highlight](./font-family.png)

This font family contains [2 styles](#-gallery).

- `ZillaSlabHighlight_Regular400`
- `ZillaSlabHighlight_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/zilla-slab-highlight expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  ZillaSlabHighlight_Regular400,
  ZillaSlabHighlight_Bold700,
  useFonts,
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

## 🔡 Gallery

##### ZillaSlabHighlight_Regular400
![ZillaSlabHighlight_Regular400](./dbd546264c0d549b6c3cd17c1acf40b35bbe910885e09b5e2a270aa090b6ee53.ttf.png)

##### ZillaSlabHighlight_Bold700
![ZillaSlabHighlight_Bold700](./be3605b5e26a2439fde6293b4159f4c401273e65483cab10505e6c4010523ece.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/zilla-slab-highlight` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zilla Slab Highlight page on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab+Highlight) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zilla Slab Highlight on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab+Highlight)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zilla-slab-highlight)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zilla-slab-highlight)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
