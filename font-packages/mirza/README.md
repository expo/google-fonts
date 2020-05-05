# @expo-google-fonts/mirza

This package lets you use the [**Mirza**](https://fonts.google.com/specimen/Mirza) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Mirza

![Mirza](./font-family.png)

This font family contains [4 styles](#gallery).

- `Mirza_Regular400`
- `Mirza_Medium500`
- `Mirza_SemiBold600`
- `Mirza_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/mirza expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Mirza_Regular400,
  Mirza_Medium500,
  Mirza_SemiBold600,
  Mirza_Bold700,
} from '@expo-google-fonts/mirza';

export default () => {
  let [fontsLoaded] = useFonts({
    Mirza_Regular400,
    Mirza_Medium500,
    Mirza_SemiBold600,
    Mirza_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mirza_Regular400' }}>
          Mirza_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mirza_Medium500' }}>
          Mirza_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mirza_SemiBold600' }}>
          Mirza_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mirza_Bold700' }}>
          Mirza_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Mirza_Regular400
![Mirza_Regular400](./5b1ac6cb285ca3492e313a53d5252b9784bf7607f2835a2d44cb3cbad0168539.ttf.png)

##### Mirza_Medium500
![Mirza_Medium500](./423532407cc832ef84cc8f08a3359f26b50e721c8aa0e00221e4215cc83440b3.ttf.png)

##### Mirza_SemiBold600
![Mirza_SemiBold600](./4225215d0df4ad389c4ac29d48fddc531703776591ade64c23f6f995669d4078.ttf.png)

##### Mirza_Bold700
![Mirza_Bold700](./306b412a39d9f93ca840c13ca62300eb5c7712e2afa94bd7ef2272b51131be6d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Mirza on Google Fonts](https://fonts.google.com/specimen/Mirza)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mirza)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mirza)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
