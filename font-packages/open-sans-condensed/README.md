# @expo-google-fonts/open-sans-condensed

This package lets you use the [**Open Sans Condensed**](https://fonts.google.com/specimen/Open+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Open Sans Condensed

![Open Sans Condensed](./font-family.png)

This font family contains [3 styles](#gallery).

- `OpenSansCondensed_Light300`
- `OpenSansCondensed_Light300_Italic`
- `OpenSansCondensed_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/open-sans-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  OpenSansCondensed_Light300,
  OpenSansCondensed_Light300_Italic,
  OpenSansCondensed_Bold700,
} from '@expo-google-fonts/open-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    OpenSansCondensed_Light300,
    OpenSansCondensed_Light300_Italic,
    OpenSansCondensed_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSansCondensed_Light300' }}>
          OpenSansCondensed_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'OpenSansCondensed_Light300_Italic' }}>
          OpenSansCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSansCondensed_Bold700' }}>
          OpenSansCondensed_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### OpenSansCondensed_Light300
![OpenSansCondensed_Light300](./04a7cf776cec6c53387f15bd8878b365d22ea65c97dfd605c269b3774e4e7ed2.ttf.png)

##### OpenSansCondensed_Light300_Italic
![OpenSansCondensed_Light300_Italic](./c5330d8a82169e940228bf53acb980b56a23fb1f640d6bf8b7e18a8681d67eda.ttf.png)

##### OpenSansCondensed_Bold700
![OpenSansCondensed_Bold700](./9b8228ed1f9d087708d275dcc32be58269ffaf9cd7f8028db765305347303f88.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Open Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Open+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/open-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/open-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
