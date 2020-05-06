# @expo-google-fonts/dancing-script

This package lets you use the [**Dancing Script**](https://fonts.google.com/specimen/Dancing+Script) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Dancing Script

![Dancing Script](./font-family.png)

This font family contains [2 styles](#gallery).

- `DancingScript_Regular400`
- `DancingScript_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dancing-script expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { DancingScript_Regular400, DancingScript_Bold700 } from '@expo-google-fonts/dancing-script';

export default () => {
  let [fontsLoaded] = useFonts({
    DancingScript_Regular400,
    DancingScript_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DancingScript_Regular400' }}>
          DancingScript_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DancingScript_Bold700' }}>
          DancingScript_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DancingScript_Regular400
![DancingScript_Regular400](./40f021e25f9f4e2b67f5072ac941218596581a1621931f44173cbf5245b91fd3.ttf.png)

##### DancingScript_Bold700
![DancingScript_Bold700](./4a2aa446dc86aad49ec46eb66fb313889bded9ef23f286664bba90a2eb156f87.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Dancing Script on Google Fonts](https://fonts.google.com/specimen/Dancing+Script)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dancing-script)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dancing-script)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
