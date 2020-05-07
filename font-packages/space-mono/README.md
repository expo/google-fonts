# @expo-google-fonts/space-mono

This package lets you use the [**Space Mono**](https://fonts.google.com/specimen/Space+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Space Mono

![Space Mono](./font-family.png)

This font family contains [4 styles](#gallery).

- `SpaceMono_Regular400`
- `SpaceMono_Regular400_Italic`
- `SpaceMono_Bold700`
- `SpaceMono_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/space-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SpaceMono_Regular400,
  SpaceMono_Regular400_Italic,
  SpaceMono_Bold700,
  SpaceMono_Bold700_Italic,
} from '@expo-google-fonts/space-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    SpaceMono_Regular400,
    SpaceMono_Regular400_Italic,
    SpaceMono_Bold700,
    SpaceMono_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpaceMono_Regular400' }}>
          SpaceMono_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpaceMono_Regular400_Italic' }}>
          SpaceMono_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpaceMono_Bold700' }}>
          SpaceMono_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SpaceMono_Bold700_Italic' }}>
          SpaceMono_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### SpaceMono_Regular400
![SpaceMono_Regular400](./1308fd8bd0f79e0517319bf0429226dfce5ae67beb495577737524f29b537527.ttf.png)

##### SpaceMono_Regular400_Italic
![SpaceMono_Regular400_Italic](./461bb1d5b84d057c522eedf582e3704890be96aed239020438b09168f8ef296b.ttf.png)

##### SpaceMono_Bold700
![SpaceMono_Bold700](./9d1e9fe7ab3138b3f1465d1b1afc457934abae86c1803611dbbcfd28f5f97e2b.ttf.png)

##### SpaceMono_Bold700_Italic
![SpaceMono_Bold700_Italic](./ec50d2d9cc5bbed72fae03e2bc8a720e2cca1324f8bc99b30089d51896917f0e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Space Mono on Google Fonts](https://fonts.google.com/specimen/Space+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/space-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/space-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
