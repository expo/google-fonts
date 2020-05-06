# @expo-google-fonts/biorhyme-expanded

This package lets you use the [**BioRhyme Expanded**](https://fonts.google.com/specimen/BioRhyme+Expanded) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## BioRhyme Expanded

![BioRhyme Expanded](./font-family.png)

This font family contains [5 styles](#gallery).

- `BioRhymeExpanded_ExtraLight200`
- `BioRhymeExpanded_Light300`
- `BioRhymeExpanded_Regular400`
- `BioRhymeExpanded_Bold700`
- `BioRhymeExpanded_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/biorhyme-expanded expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  BioRhymeExpanded_ExtraLight200,
  BioRhymeExpanded_Light300,
  BioRhymeExpanded_Regular400,
  BioRhymeExpanded_Bold700,
  BioRhymeExpanded_ExtraBold800,
} from '@expo-google-fonts/biorhyme-expanded';

export default () => {
  let [fontsLoaded] = useFonts({
    BioRhymeExpanded_ExtraLight200,
    BioRhymeExpanded_Light300,
    BioRhymeExpanded_Regular400,
    BioRhymeExpanded_Bold700,
    BioRhymeExpanded_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhymeExpanded_ExtraLight200' }}>
          BioRhymeExpanded_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhymeExpanded_Light300' }}>
          BioRhymeExpanded_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhymeExpanded_Regular400' }}>
          BioRhymeExpanded_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhymeExpanded_Bold700' }}>
          BioRhymeExpanded_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhymeExpanded_ExtraBold800' }}>
          BioRhymeExpanded_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### BioRhymeExpanded_ExtraLight200
![BioRhymeExpanded_ExtraLight200](./7770459b3448470de7eebc842dd6d1b27857480f955caa6fda9114f30f9c487a.ttf.png)

##### BioRhymeExpanded_Light300
![BioRhymeExpanded_Light300](./564af9bc89e9baac8c99c4a2b2bb1262ed16deaec1971840ab3e348ed0dc8e22.ttf.png)

##### BioRhymeExpanded_Regular400
![BioRhymeExpanded_Regular400](./1fa6003a77f1c41cfe89fc6db7c98358f0e6fa62b61c965e0e1a04ed960601b9.ttf.png)

##### BioRhymeExpanded_Bold700
![BioRhymeExpanded_Bold700](./89375361cdabf9dbf2e57378fa40cc8c19512e518617d5e8502c9db8aa4ee2a1.ttf.png)

##### BioRhymeExpanded_ExtraBold800
![BioRhymeExpanded_ExtraBold800](./586a8d74b8042767a173971c026734fb6cb75934497b3c9d2ebd80ad9e60c31d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [BioRhyme Expanded on Google Fonts](https://fonts.google.com/specimen/BioRhyme+Expanded)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/biorhyme-expanded)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/biorhyme-expanded)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
