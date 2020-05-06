# @expo-google-fonts/amiko

This package lets you use the [**Amiko**](https://fonts.google.com/specimen/Amiko) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Amiko

![Amiko](./font-family.png)

This font family contains [3 styles](#gallery).

- `Amiko_Regular400`
- `Amiko_SemiBold600`
- `Amiko_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/amiko expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Amiko_Regular400, Amiko_SemiBold600, Amiko_Bold700 } from '@expo-google-fonts/amiko';

export default () => {
  let [fontsLoaded] = useFonts({
    Amiko_Regular400,
    Amiko_SemiBold600,
    Amiko_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_Regular400' }}>
          Amiko_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_SemiBold600' }}>
          Amiko_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_Bold700' }}>
          Amiko_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Amiko_Regular400
![Amiko_Regular400](./c2e782cc6b503328a87e3b81b3ee6afa1acb6cd66bd04d9da2ba5d3ff4c43e3f.ttf.png)

##### Amiko_SemiBold600
![Amiko_SemiBold600](./d56799efb6c3d56b106cae38c558a3f2f9da3d0a90d0d1ea64449c693d3cadfc.ttf.png)

##### Amiko_Bold700
![Amiko_Bold700](./037bbdff86b70266d62abc94be043671d3c04188f477dbb0ead70ee89df98ecb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Amiko on Google Fonts](https://fonts.google.com/specimen/Amiko)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amiko)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amiko)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
