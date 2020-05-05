# @expo-google-fonts/alegreya-sc

This package lets you use the [**Alegreya SC**](https://fonts.google.com/specimen/Alegreya+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Alegreya SC

![Alegreya SC](./font-family.png)

This font family contains [6 styles](#gallery).

- `AlegreyaSC_Regular400`
- `AlegreyaSC_Regular400_Italic`
- `AlegreyaSC_Bold700`
- `AlegreyaSC_Bold700_Italic`
- `AlegreyaSC_Black900`
- `AlegreyaSC_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/alegreya-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  AlegreyaSC_Regular400,
  AlegreyaSC_Regular400_Italic,
  AlegreyaSC_Bold700,
  AlegreyaSC_Bold700_Italic,
  AlegreyaSC_Black900,
  AlegreyaSC_Black900_Italic,
} from '@expo-google-fonts/alegreya-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AlegreyaSC_Regular400,
    AlegreyaSC_Regular400_Italic,
    AlegreyaSC_Bold700,
    AlegreyaSC_Bold700_Italic,
    AlegreyaSC_Black900,
    AlegreyaSC_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Regular400' }}>
          AlegreyaSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Regular400_Italic' }}>
          AlegreyaSC_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Bold700' }}>
          AlegreyaSC_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Bold700_Italic' }}>
          AlegreyaSC_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Black900' }}>
          AlegreyaSC_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AlegreyaSC_Black900_Italic' }}>
          AlegreyaSC_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### AlegreyaSC_Regular400
![AlegreyaSC_Regular400](./7449fd0507a0808ae452506eb8fb2fb46b4abe72f8f5d982b25c963ba93bc094.ttf.png)

##### AlegreyaSC_Regular400_Italic
![AlegreyaSC_Regular400_Italic](./6b36a9c6614f3cea8c2846f74b6823f8d3c5edd8a8b2319eccae142e3bb42738.ttf.png)

##### AlegreyaSC_Bold700
![AlegreyaSC_Bold700](./16e159f79c1929fa884f232e47d45cb0cc16a55a22b127359024868245f4a2d4.ttf.png)

##### AlegreyaSC_Bold700_Italic
![AlegreyaSC_Bold700_Italic](./6920f9042274d5d0b37753d233b86c7066a47d1cb94015d70ecbb9a76359faa7.ttf.png)

##### AlegreyaSC_Black900
![AlegreyaSC_Black900](./d591a36a0d78f0315b16c23983d84d6d8b4bbf8ea5b5879019cad423941d5990.ttf.png)

##### AlegreyaSC_Black900_Italic
![AlegreyaSC_Black900_Italic](./d312d023b86792b3a0f7cd9594498720cdb9feb7bec946d75a3f25f6580c19c7.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Alegreya SC on Google Fonts](https://fonts.google.com/specimen/Alegreya+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
