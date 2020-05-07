# @expo-google-fonts/bellota

This package lets you use the [**Bellota**](https://fonts.google.com/specimen/Bellota) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Bellota

![Bellota](./font-family.png)

This font family contains [6 styles](#gallery).

- `Bellota_Light300`
- `Bellota_Light300_Italic`
- `Bellota_Regular400`
- `Bellota_Regular400_Italic`
- `Bellota_Bold700`
- `Bellota_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bellota expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Bellota_Light300,
  Bellota_Light300_Italic,
  Bellota_Regular400,
  Bellota_Regular400_Italic,
  Bellota_Bold700,
  Bellota_Bold700_Italic,
} from '@expo-google-fonts/bellota';

export default () => {
  let [fontsLoaded] = useFonts({
    Bellota_Light300,
    Bellota_Light300_Italic,
    Bellota_Regular400,
    Bellota_Regular400_Italic,
    Bellota_Bold700,
    Bellota_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Light300' }}>
          Bellota_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Light300_Italic' }}>
          Bellota_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Regular400' }}>
          Bellota_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Regular400_Italic' }}>
          Bellota_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Bold700' }}>
          Bellota_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bellota_Bold700_Italic' }}>
          Bellota_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Bellota_Light300
![Bellota_Light300](./29b1164370f0eca544e3c2cb64f06324bd098c99c35f5ecdd5527d6642e5a78f.ttf.png)

##### Bellota_Light300_Italic
![Bellota_Light300_Italic](./2876a1892bc886d0df661eef1cc4fd3273dc8bce9563d1a7fba2c72987e340c5.ttf.png)

##### Bellota_Regular400
![Bellota_Regular400](./0ae1ca7fd73a6c369b6bf3b7326788cb2a360b467fa83a298140dac4166b8efa.ttf.png)

##### Bellota_Regular400_Italic
![Bellota_Regular400_Italic](./d628b046cfc942ee35db112226b78f9ac3973ccaf005074bbbe867656201b8ec.ttf.png)

##### Bellota_Bold700
![Bellota_Bold700](./ac23e7ab6ffb89ee1593424695c867b8150bd97cd85fdbe2a3d7f89bf32a0973.ttf.png)

##### Bellota_Bold700_Italic
![Bellota_Bold700_Italic](./e876bb51e7fba1f8fadcef59f4b68e3020a0909557cef70a98c84253c9e32f2f.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Bellota on Google Fonts](https://fonts.google.com/specimen/Bellota)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bellota)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bellota)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
