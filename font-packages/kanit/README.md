# @expo-google-fonts/kanit

This package lets you use the [**Kanit**](https://fonts.google.com/specimen/Kanit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kanit

![Kanit](./font-family.png)

This font family contains [18 styles](#gallery).

- `Kanit_Thin100`
- `Kanit_Thin100_Italic`
- `Kanit_ExtraLight200`
- `Kanit_ExtraLight200_Italic`
- `Kanit_Light300`
- `Kanit_Light300_Italic`
- `Kanit_Regular400`
- `Kanit_Regular400_Italic`
- `Kanit_Medium500`
- `Kanit_Medium500_Italic`
- `Kanit_SemiBold600`
- `Kanit_SemiBold600_Italic`
- `Kanit_Bold700`
- `Kanit_Bold700_Italic`
- `Kanit_ExtraBold800`
- `Kanit_ExtraBold800_Italic`
- `Kanit_Black900`
- `Kanit_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kanit expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Kanit_Thin100,
  Kanit_Thin100_Italic,
  Kanit_ExtraLight200,
  Kanit_ExtraLight200_Italic,
  Kanit_Light300,
  Kanit_Light300_Italic,
  Kanit_Regular400,
  Kanit_Regular400_Italic,
  Kanit_Medium500,
  Kanit_Medium500_Italic,
  Kanit_SemiBold600,
  Kanit_SemiBold600_Italic,
  Kanit_Bold700,
  Kanit_Bold700_Italic,
  Kanit_ExtraBold800,
  Kanit_ExtraBold800_Italic,
  Kanit_Black900,
  Kanit_Black900_Italic,
} from '@expo-google-fonts/kanit';

export default () => {
  let [fontsLoaded] = useFonts({
    Kanit_Thin100,
    Kanit_Thin100_Italic,
    Kanit_ExtraLight200,
    Kanit_ExtraLight200_Italic,
    Kanit_Light300,
    Kanit_Light300_Italic,
    Kanit_Regular400,
    Kanit_Regular400_Italic,
    Kanit_Medium500,
    Kanit_Medium500_Italic,
    Kanit_SemiBold600,
    Kanit_SemiBold600_Italic,
    Kanit_Bold700,
    Kanit_Bold700_Italic,
    Kanit_ExtraBold800,
    Kanit_ExtraBold800_Italic,
    Kanit_Black900,
    Kanit_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Thin100' }}>
          Kanit_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Thin100_Italic' }}>
          Kanit_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_ExtraLight200' }}>
          Kanit_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_ExtraLight200_Italic' }}>
          Kanit_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Light300' }}>
          Kanit_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Light300_Italic' }}>
          Kanit_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Regular400' }}>
          Kanit_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Regular400_Italic' }}>
          Kanit_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Medium500' }}>
          Kanit_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Medium500_Italic' }}>
          Kanit_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_SemiBold600' }}>
          Kanit_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_SemiBold600_Italic' }}>
          Kanit_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Bold700' }}>
          Kanit_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Bold700_Italic' }}>
          Kanit_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_ExtraBold800' }}>
          Kanit_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_ExtraBold800_Italic' }}>
          Kanit_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Black900' }}>
          Kanit_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_Black900_Italic' }}>
          Kanit_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Kanit_Thin100
![Kanit_Thin100](./9ae2534d6b4ec69c677d8c2cf336e1ba3c802e9e316c028c99a8db43ebb63f70.ttf.png)

##### Kanit_Thin100_Italic
![Kanit_Thin100_Italic](./07d136289c506d3788ccbfcdf9e764427270b557b1b601d925bf997d002827ff.ttf.png)

##### Kanit_ExtraLight200
![Kanit_ExtraLight200](./5a7bd784e91a9a006ec021a5f891a29ac3d867878f998bb1c2d7cdeac7dcb6b2.ttf.png)

##### Kanit_ExtraLight200_Italic
![Kanit_ExtraLight200_Italic](./4171f0d7fdb919ffe44d9fb9fcccb08610ca5646f6e1f258e62ebe1b237d40b7.ttf.png)

##### Kanit_Light300
![Kanit_Light300](./af3df5dc97d26cade1367d07a411e2ce209ab130f0d0f22c73594f2f9488f231.ttf.png)

##### Kanit_Light300_Italic
![Kanit_Light300_Italic](./684fbd0330c7997a7aa6d6b72454ed7dbcaab91d2c54be50157988c9669ff845.ttf.png)

##### Kanit_Regular400
![Kanit_Regular400](./7996f53043acf5b6c782024a9c21ccd0bbab714f137cba3f64a2108709df989b.ttf.png)

##### Kanit_Regular400_Italic
![Kanit_Regular400_Italic](./9367b66fe82713a777016d80d74986e22f272688d4fa1a7aaa2e8d999d31b0d4.ttf.png)

##### Kanit_Medium500
![Kanit_Medium500](./696301b8ecd45c7227d2c5ff3a308bbf701b05428b121fa43523622416c87e12.ttf.png)

##### Kanit_Medium500_Italic
![Kanit_Medium500_Italic](./6dd4b995a1dde18512697195090fb6bee9d0f44b124e8deb55d8619204637957.ttf.png)

##### Kanit_SemiBold600
![Kanit_SemiBold600](./ccc6cb20ad4fe61a7cd12f4124476933985e5e8c105008bf5549dee46d671fcb.ttf.png)

##### Kanit_SemiBold600_Italic
![Kanit_SemiBold600_Italic](./5f81f4c0eae984a4ba6dec488b4b74c2b72db9871111ee3b595473a73be34d5b.ttf.png)

##### Kanit_Bold700
![Kanit_Bold700](./9844297d29f6a9c9d97cfa435750cc2933cc8d47b30e9c380e080d665310aaad.ttf.png)

##### Kanit_Bold700_Italic
![Kanit_Bold700_Italic](./84a74264e2a1b11040aa80b859501eb498938736938cc12e1838be482ca1681f.ttf.png)

##### Kanit_ExtraBold800
![Kanit_ExtraBold800](./ac86afa00dd8b070dc0325ff6ee63daee98cd4004aacce60aab9a9f147d3151e.ttf.png)

##### Kanit_ExtraBold800_Italic
![Kanit_ExtraBold800_Italic](./0d3cf6f6f9f8952c9fbffa0fba60279f3b0fee229b846a4ff1d127732642c3c8.ttf.png)

##### Kanit_Black900
![Kanit_Black900](./593120b5c1292664ccee5994d9936265b8372449097d70ce0cdc3737408f0c1f.ttf.png)

##### Kanit_Black900_Italic
![Kanit_Black900_Italic](./887e5a2586587398cc15672b3f3fef3e35836150f74ff4c8f80a34895effe69a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Kanit on Google Fonts](https://fonts.google.com/specimen/Kanit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kanit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kanit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
