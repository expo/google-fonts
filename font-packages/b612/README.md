# @expo-google-fonts/b612

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/b612)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/b612)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/b612)

This package lets you use the [**B612**](https://fonts.google.com/specimen/B612) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## B612

![B612](./font-family.png)

This font family contains [4 styles](#gallery).

- `B612_Regular400`
- `B612_Regular400_Italic`
- `B612_Bold700`
- `B612_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/b612 expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  B612_Regular400,
  B612_Regular400_Italic,
  B612_Bold700,
  B612_Bold700_Italic,
} from '@expo-google-fonts/b612';

export default () => {
  let [fontsLoaded] = useFonts({
    B612_Regular400,
    B612_Regular400_Italic,
    B612_Bold700,
    B612_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'B612_Regular400' }}>
          B612_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'B612_Regular400_Italic' }}>
          B612_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'B612_Bold700' }}>B612_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'B612_Bold700_Italic' }}>
          B612_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### B612_Regular400
![B612_Regular400](./b11c6d50f8a4ef2abd6df134192e3770a9b392c814caf916bcf0efa87e6743d2.ttf.png)

##### B612_Regular400_Italic
![B612_Regular400_Italic](./4250a2e42f4ceda476c771828532dfb8cb2e9170ceb541e8aecc34ecea7977b4.ttf.png)

##### B612_Bold700
![B612_Bold700](./d3f9b01c62cb7bf3bc87cbc07452bc98a3058af8a40db93b64528fb711a429ea.ttf.png)

##### B612_Bold700_Italic
![B612_Bold700_Italic](./f930926cd0cbbde94c51659420d91fb464c93fa3109c6bdf553a706985e307e2.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/b612` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [B612 page on Google Fonts](https://fonts.google.com/specimen/B612) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [B612 on Google Fonts](https://fonts.google.com/specimen/B612)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/b612)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/b612)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
