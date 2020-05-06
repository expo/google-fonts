# @expo-google-fonts/arvo

This package lets you use the [**Arvo**](https://fonts.google.com/specimen/Arvo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Arvo

![Arvo](./font-family.png)

This font family contains [4 styles](#gallery).

- `Arvo_Regular400`
- `Arvo_Regular400_Italic`
- `Arvo_Bold700`
- `Arvo_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arvo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Arvo_Regular400,
  Arvo_Regular400_Italic,
  Arvo_Bold700,
  Arvo_Bold700_Italic,
} from '@expo-google-fonts/arvo';

export default () => {
  let [fontsLoaded] = useFonts({
    Arvo_Regular400,
    Arvo_Regular400_Italic,
    Arvo_Bold700,
    Arvo_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arvo_Regular400' }}>
          Arvo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arvo_Regular400_Italic' }}>
          Arvo_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arvo_Bold700' }}>Arvo_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Arvo_Bold700_Italic' }}>
          Arvo_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Arvo_Regular400
![Arvo_Regular400](./b816c4a4a7813e7daaa88e2f869b5c8acefbf8d52e00205c41d15dda95f1766c.ttf.png)

##### Arvo_Regular400_Italic
![Arvo_Regular400_Italic](./5250cf6a9f89eba5cb07686924135f2bce7a6f8775a569fac7276b5c83b03db7.ttf.png)

##### Arvo_Bold700
![Arvo_Bold700](./1126bb2afe7e919632493ca620fc94e998910794a9fd47d82092f6edc26f4368.ttf.png)

##### Arvo_Bold700_Italic
![Arvo_Bold700_Italic](./43a330e1b8afd2c95f4f6b1c9c67ef7dfab28ed90bfb6a4551efe8480a060222.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Arvo on Google Fonts](https://fonts.google.com/specimen/Arvo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arvo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arvo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
