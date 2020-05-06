# @expo-google-fonts/inter

This package lets you use the [**Inter**](https://fonts.google.com/specimen/Inter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Inter

![Inter](./font-family.png)

This font family contains [9 styles](#gallery).

- `Inter_Thin100`
- `Inter_ExtraLight200`
- `Inter_Light300`
- `Inter_Regular400`
- `Inter_Medium500`
- `Inter_SemiBold600`
- `Inter_Bold700`
- `Inter_ExtraBold800`
- `Inter_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inter expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Inter_Thin100,
  Inter_ExtraLight200,
  Inter_Light300,
  Inter_Regular400,
  Inter_Medium500,
  Inter_SemiBold600,
  Inter_Bold700,
  Inter_ExtraBold800,
  Inter_Black900,
} from '@expo-google-fonts/inter';

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_Thin100,
    Inter_ExtraLight200,
    Inter_Light300,
    Inter_Regular400,
    Inter_Medium500,
    Inter_SemiBold600,
    Inter_Bold700,
    Inter_ExtraBold800,
    Inter_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Thin100' }}>
          Inter_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_ExtraLight200' }}>
          Inter_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Light300' }}>
          Inter_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Regular400' }}>
          Inter_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Medium500' }}>
          Inter_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_SemiBold600' }}>
          Inter_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Bold700' }}>
          Inter_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_ExtraBold800' }}>
          Inter_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Inter_Black900' }}>
          Inter_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Inter_Thin100
![Inter_Thin100](./897d64cd0dfbeb56e7867aff5fb59519c0a18eaa535b4d4f9d636ac43028afb5.ttf.png)

##### Inter_ExtraLight200
![Inter_ExtraLight200](./a8c528f80a6ad8d07eb0a822ff9763e3286ce1463b1cd881cafbc2d3d9018512.ttf.png)

##### Inter_Light300
![Inter_Light300](./7cedc5ced62f88258ed3781a814ff426d7c63e5ef822bc77e66b393b3316ce86.ttf.png)

##### Inter_Regular400
![Inter_Regular400](./74b0b48ce5240039e1a17c62f24f5abc322d3d77d4bf96efcdad6d637123cc9d.ttf.png)

##### Inter_Medium500
![Inter_Medium500](./177913939a2c83016eaf35b8dcf5b863fcb5d8e86fcb78a14ad753d055d06436.ttf.png)

##### Inter_SemiBold600
![Inter_SemiBold600](./f0a9e5b2bc1eef6c3241a779a62cea7c34b88535d7e586390fdcdf28ab01d673.ttf.png)

##### Inter_Bold700
![Inter_Bold700](./94c9d9a14fc9ae26fd08041b634823238718b745b8a34986ddfb57cf3db367da.ttf.png)

##### Inter_ExtraBold800
![Inter_ExtraBold800](./e5493c1e805b48142688a216308108352fd538721635d7f990c47996dcf8e2c4.ttf.png)

##### Inter_Black900
![Inter_Black900](./a2a712f761390199ddad75da5123d6f97f529f5d6dab247f94ceb954a8fe381e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
