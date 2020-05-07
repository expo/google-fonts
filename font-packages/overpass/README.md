# @expo-google-fonts/overpass

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/overpass)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/overpass)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/overpass)

This package lets you use the [**Overpass**](https://fonts.google.com/specimen/Overpass) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Overpass

![Overpass](./font-family.png)

This font family contains [16 styles](#gallery).

- `Overpass_Thin100`
- `Overpass_Thin100_Italic`
- `Overpass_ExtraLight200`
- `Overpass_ExtraLight200_Italic`
- `Overpass_Light300`
- `Overpass_Light300_Italic`
- `Overpass_Regular400`
- `Overpass_Regular400_Italic`
- `Overpass_SemiBold600`
- `Overpass_SemiBold600_Italic`
- `Overpass_Bold700`
- `Overpass_Bold700_Italic`
- `Overpass_ExtraBold800`
- `Overpass_ExtraBold800_Italic`
- `Overpass_Black900`
- `Overpass_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/overpass expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Overpass_Thin100,
  Overpass_Thin100_Italic,
  Overpass_ExtraLight200,
  Overpass_ExtraLight200_Italic,
  Overpass_Light300,
  Overpass_Light300_Italic,
  Overpass_Regular400,
  Overpass_Regular400_Italic,
  Overpass_SemiBold600,
  Overpass_SemiBold600_Italic,
  Overpass_Bold700,
  Overpass_Bold700_Italic,
  Overpass_ExtraBold800,
  Overpass_ExtraBold800_Italic,
  Overpass_Black900,
  Overpass_Black900_Italic,
} from '@expo-google-fonts/overpass';

export default () => {
  let [fontsLoaded] = useFonts({
    Overpass_Thin100,
    Overpass_Thin100_Italic,
    Overpass_ExtraLight200,
    Overpass_ExtraLight200_Italic,
    Overpass_Light300,
    Overpass_Light300_Italic,
    Overpass_Regular400,
    Overpass_Regular400_Italic,
    Overpass_SemiBold600,
    Overpass_SemiBold600_Italic,
    Overpass_Bold700,
    Overpass_Bold700_Italic,
    Overpass_ExtraBold800,
    Overpass_ExtraBold800_Italic,
    Overpass_Black900,
    Overpass_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Thin100' }}>
          Overpass_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Thin100_Italic' }}>
          Overpass_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_ExtraLight200' }}>
          Overpass_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_ExtraLight200_Italic' }}>
          Overpass_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Light300' }}>
          Overpass_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Light300_Italic' }}>
          Overpass_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Regular400' }}>
          Overpass_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Regular400_Italic' }}>
          Overpass_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_SemiBold600' }}>
          Overpass_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_SemiBold600_Italic' }}>
          Overpass_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Bold700' }}>
          Overpass_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Bold700_Italic' }}>
          Overpass_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_ExtraBold800' }}>
          Overpass_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_ExtraBold800_Italic' }}>
          Overpass_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Black900' }}>
          Overpass_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overpass_Black900_Italic' }}>
          Overpass_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Overpass_Thin100
![Overpass_Thin100](./c5a2c38a969c611bc238e0242455585ccfc48cf11fc9cd85063641ab4b2d7bb9.ttf.png)

##### Overpass_Thin100_Italic
![Overpass_Thin100_Italic](./8ecef7f4baf8bb9d34f1619e0a9ee510cf744ff855c5d5b856e508d1b2af0b81.ttf.png)

##### Overpass_ExtraLight200
![Overpass_ExtraLight200](./54947a66287be19cdb01fbceed60457202e90bdf36580195800894eb70d641ff.ttf.png)

##### Overpass_ExtraLight200_Italic
![Overpass_ExtraLight200_Italic](./4ddb32270da20661fabc6aa1e944e280881d9603059b11da50ca0b655b159bfe.ttf.png)

##### Overpass_Light300
![Overpass_Light300](./ba40f1801228e6e65c3d4a8e7ba94d86c2855de57d4193bf93aaaf65d91138bb.ttf.png)

##### Overpass_Light300_Italic
![Overpass_Light300_Italic](./b2c69aa4282875efbbd517f89eb8a9a2ff7ff6523948bec58365e27a992e2474.ttf.png)

##### Overpass_Regular400
![Overpass_Regular400](./a5d3ea903c065a7e458256aedede6ee1b27ab4b67c6af46c31eee97fcf66108e.ttf.png)

##### Overpass_Regular400_Italic
![Overpass_Regular400_Italic](./89e039660730531554ae5f96a9ea3faae03107ccb63ca23fff3acebd28ca7dce.ttf.png)

##### Overpass_SemiBold600
![Overpass_SemiBold600](./c474f4f6c3a2d86f49aadc0cd3d5bfb14968ecdc2509b30baad6c0ce881bddb6.ttf.png)

##### Overpass_SemiBold600_Italic
![Overpass_SemiBold600_Italic](./8a01f2c08d4b650cb7c597e094ff0db9cb4ae6b1bfc79ad9af8a20ba275a567d.ttf.png)

##### Overpass_Bold700
![Overpass_Bold700](./43a5239e32a28e8d1efbf2a9b8922042b98e6310bb1ebf89af5a86bdfb35d997.ttf.png)

##### Overpass_Bold700_Italic
![Overpass_Bold700_Italic](./06068d83442ba5f4324460ab2602523f4b89643f8afa4440fa2051e47a16e95f.ttf.png)

##### Overpass_ExtraBold800
![Overpass_ExtraBold800](./894fdd41407a09bc7c4336dc3462d749cd7381ab80e320fa78a0475311e9ac69.ttf.png)

##### Overpass_ExtraBold800_Italic
![Overpass_ExtraBold800_Italic](./aa9e63cded98890be1bc09083dcb64378b7f35f4af84f43e9635e50d404cdb53.ttf.png)

##### Overpass_Black900
![Overpass_Black900](./59f5ad4bb5b4469f7c3079f4bd6b3996a5c81d01f9f4311c74d68e9411f66c51.ttf.png)

##### Overpass_Black900_Italic
![Overpass_Black900_Italic](./a9e3b080c9a28d813d94e69fea3eb65560b09cefb4e4653b4baa47a7d95be402.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/overpass` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Overpass page on Google Fonts](https://fonts.google.com/specimen/Overpass) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Overpass on Google Fonts](https://fonts.google.com/specimen/Overpass)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overpass)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overpass)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
