# @expo-google-fonts/caudex

This package lets you use the [**Caudex**](https://fonts.google.com/specimen/Caudex) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Caudex

![Caudex](./font-family.png)

This font family contains [4 styles](#gallery).

- `Caudex_Regular400`
- `Caudex_Regular400_Italic`
- `Caudex_Bold700`
- `Caudex_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/caudex expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Caudex_Regular400,
  Caudex_Regular400_Italic,
  Caudex_Bold700,
  Caudex_Bold700_Italic,
} from '@expo-google-fonts/caudex';

export default () => {
  let [fontsLoaded] = useFonts({
    Caudex_Regular400,
    Caudex_Regular400_Italic,
    Caudex_Bold700,
    Caudex_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Caudex_Regular400' }}>
          Caudex_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Caudex_Regular400_Italic' }}>
          Caudex_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Caudex_Bold700' }}>
          Caudex_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Caudex_Bold700_Italic' }}>
          Caudex_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Caudex_Regular400
![Caudex_Regular400](./e0c195632ea06158f87e86ee898119dd8a7f59788999552ed79be77c33c6a726.ttf.png)

##### Caudex_Regular400_Italic
![Caudex_Regular400_Italic](./53374860983e21bb358d83d1162c824903649ae49f873a963c665b066514bb9d.ttf.png)

##### Caudex_Bold700
![Caudex_Bold700](./09a6db433fd45eb3e1423e9947afe5b766008cc358cb482b42103970fc840676.ttf.png)

##### Caudex_Bold700_Italic
![Caudex_Bold700_Italic](./45c118976f77e53a2a5122e22cace7fb846373a14892fbb7e0ff61e1a46de1d4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Caudex on Google Fonts](https://fonts.google.com/specimen/Caudex)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/caudex)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/caudex)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
