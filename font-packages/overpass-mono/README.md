# @expo-google-fonts/overpass-mono

This package lets you use the [**Overpass Mono**](https://fonts.google.com/specimen/Overpass+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Overpass Mono

![Overpass Mono](./font-family.png)

This font family contains [4 styles](#gallery).

- `OverpassMono_Light300`
- `OverpassMono_Regular400`
- `OverpassMono_SemiBold600`
- `OverpassMono_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/overpass-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  OverpassMono_Light300,
  OverpassMono_Regular400,
  OverpassMono_SemiBold600,
  OverpassMono_Bold700,
} from '@expo-google-fonts/overpass-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    OverpassMono_Light300,
    OverpassMono_Regular400,
    OverpassMono_SemiBold600,
    OverpassMono_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OverpassMono_Light300' }}>
          OverpassMono_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OverpassMono_Regular400' }}>
          OverpassMono_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OverpassMono_SemiBold600' }}>
          OverpassMono_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OverpassMono_Bold700' }}>
          OverpassMono_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### OverpassMono_Light300
![OverpassMono_Light300](./a46cc06eb5b5001bdf1404b0e24fb82ee14159aca202af7094984ff4d48896dd.ttf.png)

##### OverpassMono_Regular400
![OverpassMono_Regular400](./d3a8c0a4613ebae3d21471198e12e57aa70e9f051f7592e3942953e2c36bd190.ttf.png)

##### OverpassMono_SemiBold600
![OverpassMono_SemiBold600](./f6b8f8180ef4c0f650402aa53effdd61f2d9771c4973d07f722d14ebd60e59da.ttf.png)

##### OverpassMono_Bold700
![OverpassMono_Bold700](./d8f645bd2f708d8127ab1d3078ae22195543fbe52abee9362a8ed5a980cb1648.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Overpass Mono on Google Fonts](https://fonts.google.com/specimen/Overpass+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overpass-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overpass-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
