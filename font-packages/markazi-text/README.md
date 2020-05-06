# @expo-google-fonts/markazi-text

This package lets you use the [**Markazi Text**](https://fonts.google.com/specimen/Markazi+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Markazi Text

![Markazi Text](./font-family.png)

This font family contains [4 styles](#gallery).

- `MarkaziText_Regular400`
- `MarkaziText_Medium500`
- `MarkaziText_SemiBold600`
- `MarkaziText_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/markazi-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MarkaziText_Regular400,
  MarkaziText_Medium500,
  MarkaziText_SemiBold600,
  MarkaziText_Bold700,
} from '@expo-google-fonts/markazi-text';

export default () => {
  let [fontsLoaded] = useFonts({
    MarkaziText_Regular400,
    MarkaziText_Medium500,
    MarkaziText_SemiBold600,
    MarkaziText_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MarkaziText_Regular400' }}>
          MarkaziText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MarkaziText_Medium500' }}>
          MarkaziText_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MarkaziText_SemiBold600' }}>
          MarkaziText_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MarkaziText_Bold700' }}>
          MarkaziText_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### MarkaziText_Regular400
![MarkaziText_Regular400](./0e5e6bb8cf276742072a5a22282dd79c7d532219e9a950faad9fcf21d2cf8cea.ttf.png)

##### MarkaziText_Medium500
![MarkaziText_Medium500](./d6f033a9cc38e8da2e1570b35f84c43b8312a13a2f126dfd89f67a322513d7eb.ttf.png)

##### MarkaziText_SemiBold600
![MarkaziText_SemiBold600](./68bfe2ab439b778907c8544102bbbb7de31be886ff40a6bf5172cab6c7c23eee.ttf.png)

##### MarkaziText_Bold700
![MarkaziText_Bold700](./342d38b7c70eeaf282e54f367d5ba4eba6d1c07b2c2363023084bcbed4d1c05e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Markazi Text on Google Fonts](https://fonts.google.com/specimen/Markazi+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/markazi-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/markazi-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
