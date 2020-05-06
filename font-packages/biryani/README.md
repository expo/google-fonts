# @expo-google-fonts/biryani

This package lets you use the [**Biryani**](https://fonts.google.com/specimen/Biryani) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Biryani

![Biryani](./font-family.png)

This font family contains [7 styles](#gallery).

- `Biryani_ExtraLight200`
- `Biryani_Light300`
- `Biryani_Regular400`
- `Biryani_SemiBold600`
- `Biryani_Bold700`
- `Biryani_ExtraBold800`
- `Biryani_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/biryani expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Biryani_ExtraLight200,
  Biryani_Light300,
  Biryani_Regular400,
  Biryani_SemiBold600,
  Biryani_Bold700,
  Biryani_ExtraBold800,
  Biryani_Black900,
} from '@expo-google-fonts/biryani';

export default () => {
  let [fontsLoaded] = useFonts({
    Biryani_ExtraLight200,
    Biryani_Light300,
    Biryani_Regular400,
    Biryani_SemiBold600,
    Biryani_Bold700,
    Biryani_ExtraBold800,
    Biryani_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_ExtraLight200' }}>
          Biryani_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_Light300' }}>
          Biryani_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_Regular400' }}>
          Biryani_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_SemiBold600' }}>
          Biryani_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_Bold700' }}>
          Biryani_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_ExtraBold800' }}>
          Biryani_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Biryani_Black900' }}>
          Biryani_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Biryani_ExtraLight200
![Biryani_ExtraLight200](./f65303a20787e99a61c757c6e4cbc9ee68af544a375dac932049def734163642.ttf.png)

##### Biryani_Light300
![Biryani_Light300](./842f2d86cd486de76ca080714383fb99a105dfb85b3bae4360d00e8ac8db8c9f.ttf.png)

##### Biryani_Regular400
![Biryani_Regular400](./16e70205340aba8294e2da2cc8581ec3c5fb3f2af846d51a3de360f447d6f254.ttf.png)

##### Biryani_SemiBold600
![Biryani_SemiBold600](./80169a7f1fadd79859c89b0e9a066fd8dbbc460f13a4e5df8389cd853dc67be9.ttf.png)

##### Biryani_Bold700
![Biryani_Bold700](./8834894534eb39412acdbc906f20b8d4addd5339d6777eaf647ee1ecbd44538c.ttf.png)

##### Biryani_ExtraBold800
![Biryani_ExtraBold800](./ba9bcb5882f72d4ac114689fb32db356c2be660bc64a16c88ac2457bdbefd777.ttf.png)

##### Biryani_Black900
![Biryani_Black900](./5bad25e5e05861d1da7ddd858aefac18d200688fc997bf2760059fcc2c2ad30d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Biryani on Google Fonts](https://fonts.google.com/specimen/Biryani)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/biryani)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/biryani)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
