# @expo-google-fonts/ubuntu-mono

This package lets you use the [**Ubuntu Mono**](https://fonts.google.com/specimen/Ubuntu+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Ubuntu Mono

![Ubuntu Mono](./font-family.png)

This font family contains [4 styles](#gallery).

- `UbuntuMono_Regular400`
- `UbuntuMono_Regular400_Italic`
- `UbuntuMono_Bold700`
- `UbuntuMono_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ubuntu-mono expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  UbuntuMono_Regular400,
  UbuntuMono_Regular400_Italic,
  UbuntuMono_Bold700,
  UbuntuMono_Bold700_Italic,
} from '@expo-google-fonts/ubuntu-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    UbuntuMono_Regular400,
    UbuntuMono_Regular400_Italic,
    UbuntuMono_Bold700,
    UbuntuMono_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'UbuntuMono_Regular400' }}>
          UbuntuMono_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'UbuntuMono_Regular400_Italic' }}>
          UbuntuMono_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'UbuntuMono_Bold700' }}>
          UbuntuMono_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'UbuntuMono_Bold700_Italic' }}>
          UbuntuMono_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### UbuntuMono_Regular400
![UbuntuMono_Regular400](./cd1f8cec4767686edcf755dcde43ac58d83cef21ee96f0e6d850aaf359edd22c.ttf.png)

##### UbuntuMono_Regular400_Italic
![UbuntuMono_Regular400_Italic](./f9935197a4379e2812e72644ce77c4d8bd3f108ff3b23ed5fccb7032f08d6626.ttf.png)

##### UbuntuMono_Bold700
![UbuntuMono_Bold700](./7f6a2a5a1eeef3fd539d7cb59119e2a720c33fb75347a47de6c1b4daef4ab63c.ttf.png)

##### UbuntuMono_Bold700_Italic
![UbuntuMono_Bold700_Italic](./91873d66153347506011f860ea9c87fc36c2ee4ef726bd95cc88c86e0b1ec5f2.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Ubuntu Mono on Google Fonts](https://fonts.google.com/specimen/Ubuntu+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ubuntu-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ubuntu-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
