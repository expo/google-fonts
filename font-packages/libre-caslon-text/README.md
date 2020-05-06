# @expo-google-fonts/libre-caslon-text

This package lets you use the [**Libre Caslon Text**](https://fonts.google.com/specimen/Libre+Caslon+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Libre Caslon Text

![Libre Caslon Text](./font-family.png)

This font family contains [3 styles](#gallery).

- `LibreCaslonText_Regular400`
- `LibreCaslonText_Regular400_Italic`
- `LibreCaslonText_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/libre-caslon-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  LibreCaslonText_Regular400,
  LibreCaslonText_Regular400_Italic,
  LibreCaslonText_Bold700,
} from '@expo-google-fonts/libre-caslon-text';

export default () => {
  let [fontsLoaded] = useFonts({
    LibreCaslonText_Regular400,
    LibreCaslonText_Regular400_Italic,
    LibreCaslonText_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreCaslonText_Regular400' }}>
          LibreCaslonText_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'LibreCaslonText_Regular400_Italic' }}>
          LibreCaslonText_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreCaslonText_Bold700' }}>
          LibreCaslonText_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### LibreCaslonText_Regular400
![LibreCaslonText_Regular400](./bf61a45047b0948452918933bf02a0c550f66b703720c33a588f9d912c930525.ttf.png)

##### LibreCaslonText_Regular400_Italic
![LibreCaslonText_Regular400_Italic](./9127e87ed024695b4753bfa734aa694e4e7ca57ec318f8e69856ba19b8bbd8d6.ttf.png)

##### LibreCaslonText_Bold700
![LibreCaslonText_Bold700](./5b9e7454ac79e153edca85178361ae1f5f7e9de7ade1e87c1bc514bdbd0baa5a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Libre Caslon Text on Google Fonts](https://fonts.google.com/specimen/Libre+Caslon+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-caslon-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-caslon-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
