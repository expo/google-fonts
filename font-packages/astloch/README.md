# @expo-google-fonts/astloch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/astloch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/astloch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/astloch)

This package lets you use the [**Astloch**](https://fonts.google.com/specimen/Astloch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Astloch

![Astloch](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Astloch_Regular400`
- `Astloch_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/astloch expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Astloch_Regular400, Astloch_Bold700 } from '@expo-google-fonts/astloch';

export default () => {
  let [fontsLoaded] = useFonts({
    Astloch_Regular400,
    Astloch_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Astloch_Regular400' }}>
          Astloch_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Astloch_Bold700' }}>
          Astloch_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Astloch_Regular400
![Astloch_Regular400](./b51d807f9b0f818e44f8f40d4fbedacfff7df981efda85e7b722d62f6022a168.ttf.png)

##### Astloch_Bold700
![Astloch_Bold700](./b86a5f0e90945d44c5b629fde8c5a667dd7882ab201ccb397f96f482fd7e98bc.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/astloch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Astloch page on Google Fonts](https://fonts.google.com/specimen/Astloch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Astloch on Google Fonts](https://fonts.google.com/specimen/Astloch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/astloch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/astloch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
