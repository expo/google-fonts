# @expo-google-fonts/lovers-quarrel

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lovers-quarrel)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lovers-quarrel)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lovers-quarrel)

This package lets you use the [**Lovers Quarrel**](https://fonts.google.com/specimen/Lovers+Quarrel) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lovers Quarrel

![Lovers Quarrel](./font-family.png)

This font family contains [1 style](#-gallery).

- `LoversQuarrel_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lovers-quarrel expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { LoversQuarrel_Regular400 } from '@expo-google-fonts/lovers-quarrel';

export default () => {
  let [fontsLoaded] = useFonts({
    LoversQuarrel_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LoversQuarrel_Regular400' }}>
          LoversQuarrel_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### LoversQuarrel_Regular400
![LoversQuarrel_Regular400](./2b3afd5d2a24b3641cc9053301da4dd11e595d360d1f052a9527036e96ab00e9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lovers-quarrel` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lovers Quarrel page on Google Fonts](https://fonts.google.com/specimen/Lovers+Quarrel) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lovers Quarrel on Google Fonts](https://fonts.google.com/specimen/Lovers+Quarrel)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lovers-quarrel)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lovers-quarrel)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
