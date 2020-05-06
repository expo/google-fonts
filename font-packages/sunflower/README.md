# @expo-google-fonts/sunflower

This package lets you use the [**Sunflower**](https://fonts.google.com/specimen/Sunflower) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sunflower

![Sunflower](./font-family.png)

This font family contains [3 styles](#gallery).

- `Sunflower_Light300`
- `Sunflower_Medium500`
- `Sunflower_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sunflower expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Sunflower_Light300,
  Sunflower_Medium500,
  Sunflower_Bold700,
} from '@expo-google-fonts/sunflower';

export default () => {
  let [fontsLoaded] = useFonts({
    Sunflower_Light300,
    Sunflower_Medium500,
    Sunflower_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sunflower_Light300' }}>
          Sunflower_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sunflower_Medium500' }}>
          Sunflower_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sunflower_Bold700' }}>
          Sunflower_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Sunflower_Light300
![Sunflower_Light300](./e60ce84d8ac799e771211c4fa34de99812b730e86342f32f94fbccfa79461bd0.ttf.png)

##### Sunflower_Medium500
![Sunflower_Medium500](./cf53d978b098c900279393bfdf56611a8003d688b2b16b7bd767182e1b0c58e8.ttf.png)

##### Sunflower_Bold700
![Sunflower_Bold700](./f3b680ac8a8f4a8a9ede88bf72084ae45ddd8dd7a8a87e826b9ce8946a7b0536.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Sunflower on Google Fonts](https://fonts.google.com/specimen/Sunflower)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sunflower)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sunflower)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
