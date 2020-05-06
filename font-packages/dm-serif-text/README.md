# @expo-google-fonts/dm-serif-text

This package lets you use the [**DM Serif Text**](https://fonts.google.com/specimen/DM+Serif+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## DM Serif Text

![DM Serif Text](./font-family.png)

This font family contains [2 styles](#gallery).

- `DMSerifText_Regular400`
- `DMSerifText_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dm-serif-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  DMSerifText_Regular400,
  DMSerifText_Regular400_Italic,
} from '@expo-google-fonts/dm-serif-text';

export default () => {
  let [fontsLoaded] = useFonts({
    DMSerifText_Regular400,
    DMSerifText_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSerifText_Regular400' }}>
          DMSerifText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'DMSerifText_Regular400_Italic' }}>
          DMSerifText_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### DMSerifText_Regular400
![DMSerifText_Regular400](./8fe3c6727cf74e86cfd545dfe7e6aa3a1dbdff9563e84e085acd65c07f633744.ttf.png)

##### DMSerifText_Regular400_Italic
![DMSerifText_Regular400_Italic](./13b9bbb9c2b065c645eb14efbe2bc8dd2a4e41e635d12f8bc15b532e1d5fc628.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [DM Serif Text on Google Fonts](https://fonts.google.com/specimen/DM+Serif+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dm-serif-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dm-serif-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
