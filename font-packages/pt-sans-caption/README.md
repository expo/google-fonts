# @expo-google-fonts/pt-sans-caption

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pt-sans-caption)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pt-sans-caption)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pt-sans-caption)

This package lets you use the [**PT Sans Caption**](https://fonts.google.com/specimen/PT+Sans+Caption) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## PT Sans Caption

![PT Sans Caption](./font-family.png)

This font family contains [2 styles](#gallery).

- `PTSansCaption_Regular400`
- `PTSansCaption_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pt-sans-caption expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PTSansCaption_Regular400,
  PTSansCaption_Bold700,
} from '@expo-google-fonts/pt-sans-caption';

export default () => {
  let [fontsLoaded] = useFonts({
    PTSansCaption_Regular400,
    PTSansCaption_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansCaption_Regular400' }}>
          PTSansCaption_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansCaption_Bold700' }}>
          PTSansCaption_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### PTSansCaption_Regular400
![PTSansCaption_Regular400](./1245ca967adbb79f480b169e92cf44a71ae4cb8571b9847ceb3de43e7235361c.ttf.png)

##### PTSansCaption_Bold700
![PTSansCaption_Bold700](./f47afcc4feb502bfa6ca192ad230e0d743be26deb97832412722544b223ed461.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/pt-sans-caption` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [PT Sans Caption page on Google Fonts](https://fonts.google.com/specimen/PT+Sans+Caption) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [PT Sans Caption on Google Fonts](https://fonts.google.com/specimen/PT+Sans+Caption)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-sans-caption)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-sans-caption)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
