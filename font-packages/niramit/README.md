# @expo-google-fonts/niramit

This package lets you use the [**Niramit**](https://fonts.google.com/specimen/Niramit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Niramit

![Niramit](./font-family.png)

This font family contains [12 styles](#gallery).

- `Niramit_ExtraLight200`
- `Niramit_ExtraLight200_Italic`
- `Niramit_Light300`
- `Niramit_Light300_Italic`
- `Niramit_Regular400`
- `Niramit_Regular400_Italic`
- `Niramit_Medium500`
- `Niramit_Medium500_Italic`
- `Niramit_SemiBold600`
- `Niramit_SemiBold600_Italic`
- `Niramit_Bold700`
- `Niramit_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/niramit expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Niramit_ExtraLight200,
  Niramit_ExtraLight200_Italic,
  Niramit_Light300,
  Niramit_Light300_Italic,
  Niramit_Regular400,
  Niramit_Regular400_Italic,
  Niramit_Medium500,
  Niramit_Medium500_Italic,
  Niramit_SemiBold600,
  Niramit_SemiBold600_Italic,
  Niramit_Bold700,
  Niramit_Bold700_Italic,
} from '@expo-google-fonts/niramit';

export default () => {
  let [fontsLoaded] = useFonts({
    Niramit_ExtraLight200,
    Niramit_ExtraLight200_Italic,
    Niramit_Light300,
    Niramit_Light300_Italic,
    Niramit_Regular400,
    Niramit_Regular400_Italic,
    Niramit_Medium500,
    Niramit_Medium500_Italic,
    Niramit_SemiBold600,
    Niramit_SemiBold600_Italic,
    Niramit_Bold700,
    Niramit_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_ExtraLight200' }}>
          Niramit_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_ExtraLight200_Italic' }}>
          Niramit_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Light300' }}>
          Niramit_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Light300_Italic' }}>
          Niramit_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Regular400' }}>
          Niramit_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Regular400_Italic' }}>
          Niramit_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Medium500' }}>
          Niramit_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Medium500_Italic' }}>
          Niramit_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_SemiBold600' }}>
          Niramit_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_SemiBold600_Italic' }}>
          Niramit_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Bold700' }}>
          Niramit_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Niramit_Bold700_Italic' }}>
          Niramit_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Niramit_ExtraLight200
![Niramit_ExtraLight200](./e92669e514d741863c49ee66189090f4d5dca5b6a9d34ccbe435b2f5af660c42.ttf.png)

##### Niramit_ExtraLight200_Italic
![Niramit_ExtraLight200_Italic](./d2d4697e15bf89f5f5ef604984ccc6a79f078de6f91e60deae5736de825110bc.ttf.png)

##### Niramit_Light300
![Niramit_Light300](./cc8b41b318e8ef4a063f6a1d3c4b2b8b07029e70b412f4aff994ee4849efb09c.ttf.png)

##### Niramit_Light300_Italic
![Niramit_Light300_Italic](./8b5560e9959b3ffe8583ea5591a0852f3cb9dd7d8f256327fd1dfa761aebbc97.ttf.png)

##### Niramit_Regular400
![Niramit_Regular400](./b73b7564f064368ecc427a55f6f52ab3191726827cc1b6c8fe10059308a2c576.ttf.png)

##### Niramit_Regular400_Italic
![Niramit_Regular400_Italic](./f2f02627999eb05690e589cbb7e0c1ab1e977f24c976bbeafab5c8bb041cb23c.ttf.png)

##### Niramit_Medium500
![Niramit_Medium500](./d57314c8b28aa732f0904f616db80bd02f471e91a0c0620454016ddb37200371.ttf.png)

##### Niramit_Medium500_Italic
![Niramit_Medium500_Italic](./3c7d65b0b7438466a6707ae7ee57b82aad56e02798b2bd582110803cfd632e40.ttf.png)

##### Niramit_SemiBold600
![Niramit_SemiBold600](./932bdc0ea4e9406b713a29b1a936c3bfba71853a8f834dcf9129914d6ed2f0e7.ttf.png)

##### Niramit_SemiBold600_Italic
![Niramit_SemiBold600_Italic](./deb26883a193441eb594a0e8e42bac1d2d1ac822053c3bd7fcaf06161fbc281d.ttf.png)

##### Niramit_Bold700
![Niramit_Bold700](./67d40f2a9e3f3cc8c4e0873f0c6aa8b2db46210c344b6805eb7a3280b6430a85.ttf.png)

##### Niramit_Bold700_Italic
![Niramit_Bold700_Italic](./2d5a53eeb80546748e52c84452b17b60d1e4abfcd7e01f6d6f909ad0446c9f19.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Niramit on Google Fonts](https://fonts.google.com/specimen/Niramit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/niramit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/niramit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
