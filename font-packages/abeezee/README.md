# @expo-google-fonts/abeezee

This package lets you use the [**ABeeZee**](https://fonts.google.com/specimen/ABeeZee) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## ABeeZee

![ABeeZee](./font-family.png)

This font family contains [2 styles](#gallery).

- `ABeeZee_Regular400`
- `ABeeZee_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/abeezee expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ABeeZee_Regular400, ABeeZee_Regular400_Italic } from '@expo-google-fonts/abeezee';

export default () => {
  let [fontsLoaded] = useFonts({
    ABeeZee_Regular400,
    ABeeZee_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ABeeZee_Regular400' }}>
          ABeeZee_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ABeeZee_Regular400_Italic' }}>
          ABeeZee_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### ABeeZee_Regular400
![ABeeZee_Regular400](./2ff99dd1bd594806e1b9f7423a75f1c1dfbbbcddb2698b3ab91f5709b1b90caf.ttf.png)

##### ABeeZee_Regular400_Italic
![ABeeZee_Regular400_Italic](./8654a417521bf7fa4ffd1a7f7b62648648c5415ff0f7e0d53474e4436d049b7a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [ABeeZee on Google Fonts](https://fonts.google.com/specimen/ABeeZee)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/abeezee)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/abeezee)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
