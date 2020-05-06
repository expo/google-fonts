# @expo-google-fonts/pt-sans

This package lets you use the [**PT Sans**](https://fonts.google.com/specimen/PT+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## PT Sans

![PT Sans](./font-family.png)

This font family contains [4 styles](#gallery).

- `PTSans_Regular400`
- `PTSans_Regular400_Italic`
- `PTSans_Bold700`
- `PTSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pt-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  PTSans_Regular400,
  PTSans_Regular400_Italic,
  PTSans_Bold700,
  PTSans_Bold700_Italic,
} from '@expo-google-fonts/pt-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    PTSans_Regular400,
    PTSans_Regular400_Italic,
    PTSans_Bold700,
    PTSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSans_Regular400' }}>
          PTSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSans_Regular400_Italic' }}>
          PTSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSans_Bold700' }}>
          PTSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'PTSans_Bold700_Italic' }}>
          PTSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### PTSans_Regular400
![PTSans_Regular400](./8a587dc4260abac4008021f8b9302115ee0f9616aee70d95d4d49f447f4df0f9.ttf.png)

##### PTSans_Regular400_Italic
![PTSans_Regular400_Italic](./6de2d3f34e12548006ef800234119a1b1d90bba33fb1d33f5bf41577bc954338.ttf.png)

##### PTSans_Bold700
![PTSans_Bold700](./2a88a8de5aeccdc3e4febba14c9ade00ec49e16f2718050be6bc3f4f37e8ff0b.ttf.png)

##### PTSans_Bold700_Italic
![PTSans_Bold700_Italic](./a37694659d53ae08c11bf532f8871e90b911f61967c3e23f456e59e7c55b33e6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [PT Sans on Google Fonts](https://fonts.google.com/specimen/PT+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pt-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pt-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
