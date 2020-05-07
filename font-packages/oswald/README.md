# @expo-google-fonts/oswald

This package lets you use the [**Oswald**](https://fonts.google.com/specimen/Oswald) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Oswald

![Oswald](./font-family.png)

This font family contains [6 styles](#gallery).

- `Oswald_ExtraLight200`
- `Oswald_Light300`
- `Oswald_Regular400`
- `Oswald_Medium500`
- `Oswald_SemiBold600`
- `Oswald_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/oswald expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Oswald_ExtraLight200,
  Oswald_Light300,
  Oswald_Regular400,
  Oswald_Medium500,
  Oswald_SemiBold600,
  Oswald_Bold700,
} from '@expo-google-fonts/oswald';

export default () => {
  let [fontsLoaded] = useFonts({
    Oswald_ExtraLight200,
    Oswald_Light300,
    Oswald_Regular400,
    Oswald_Medium500,
    Oswald_SemiBold600,
    Oswald_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_ExtraLight200' }}>
          Oswald_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_Light300' }}>
          Oswald_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_Regular400' }}>
          Oswald_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_Medium500' }}>
          Oswald_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_SemiBold600' }}>
          Oswald_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oswald_Bold700' }}>
          Oswald_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Oswald_ExtraLight200
![Oswald_ExtraLight200](./73cf9867fcced84ac0fd26238bf74e4e1f69dcbefc5ff327c2a69f6c5c107e5d.ttf.png)

##### Oswald_Light300
![Oswald_Light300](./f10d40bae3fb58ed7a554af7cb46beca6d4f2866de12223b8e349f1b30c76968.ttf.png)

##### Oswald_Regular400
![Oswald_Regular400](./9dc4929f8d8935621ca4717817eb3167fc881d03d496c6dca51ff292f730c873.ttf.png)

##### Oswald_Medium500
![Oswald_Medium500](./f59f85cc613954e6acc66c7f89abe9b46c1add1b2236d5bee71f4a71a7769402.ttf.png)

##### Oswald_SemiBold600
![Oswald_SemiBold600](./c0d6ab388b1c3537b78f8976a204a6dc2c5d62b73ae37506d1c93575e52420f2.ttf.png)

##### Oswald_Bold700
![Oswald_Bold700](./a11b684909ba0ee2b2c493e89626c6fa9df02e25dec537e42127fa0b1a4e5e92.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Oswald on Google Fonts](https://fonts.google.com/specimen/Oswald)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oswald)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oswald)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
