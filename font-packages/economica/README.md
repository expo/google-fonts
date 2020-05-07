# @expo-google-fonts/economica

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/economica)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/economica)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/economica)

This package lets you use the [**Economica**](https://fonts.google.com/specimen/Economica) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Economica

![Economica](./font-family.png)

This font family contains [4 styles](#gallery).

- `Economica_Regular400`
- `Economica_Regular400_Italic`
- `Economica_Bold700`
- `Economica_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/economica expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Economica_Regular400,
  Economica_Regular400_Italic,
  Economica_Bold700,
  Economica_Bold700_Italic,
} from '@expo-google-fonts/economica';

export default () => {
  let [fontsLoaded] = useFonts({
    Economica_Regular400,
    Economica_Regular400_Italic,
    Economica_Bold700,
    Economica_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Economica_Regular400' }}>
          Economica_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Economica_Regular400_Italic' }}>
          Economica_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Economica_Bold700' }}>
          Economica_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Economica_Bold700_Italic' }}>
          Economica_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Economica_Regular400
![Economica_Regular400](./73b7c6770eb6ca35b71cc345a389203c788cc27aac43302793865dc33771dcd9.ttf.png)

##### Economica_Regular400_Italic
![Economica_Regular400_Italic](./ce63d04fe7b161c08efa83fba9b4d096be6f6390a294e904e16f2d7eecc90820.ttf.png)

##### Economica_Bold700
![Economica_Bold700](./2886009c049eeeb1a75ea749115fbfece59efeb95fcaf29b5f8a82a8c680ab99.ttf.png)

##### Economica_Bold700_Italic
![Economica_Bold700_Italic](./d8f54eb9ef53335c26d3f638df8a0bcbdd291dff65990970ea5cd5a2529dfd91.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/economica` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Economica page on Google Fonts](https://fonts.google.com/specimen/Economica) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Economica on Google Fonts](https://fonts.google.com/specimen/Economica)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/economica)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/economica)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
