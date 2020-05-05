# @expo-google-fonts/pt-sans-caption

This package lets you use the [**PT Sans Caption**](https://fonts.google.com/specimen/PT+Sans+Caption) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## PT Sans Caption

![PT Sans Caption](./font-family.png)

This font family contains [2 styles](#gallery).

- `PTSansCaption_Regular400`
- `PTSansCaption_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/pt-sans-caption expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PTSansCaption_Regular400,
  PTSansCaption_Bold700,
} from '@expo-google-fonts/pt-sans-caption';

export default () => {
  let [fontsLoaded] = useFonts({
    PTSansCaption_Regular400,
    PTSansCaption_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansCaption_Regular400' }}>
          PTSansCaption_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSansCaption_Bold700' }}>
          PTSansCaption_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PTSansCaption_Regular400
![PTSansCaption_Regular400](./1245ca967adbb79f480b169e92cf44a71ae4cb8571b9847ceb3de43e7235361c.ttf.png)

##### PTSansCaption_Bold700
![PTSansCaption_Bold700](./f47afcc4feb502bfa6ca192ad230e0d743be26deb97832412722544b223ed461.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [PT Sans Caption on Google Fonts](https://fonts.google.com/specimen/PT+Sans+Caption)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-sans-caption)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-sans-caption)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
