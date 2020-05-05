# @expo-google-fonts/assistant

This package lets you use the [**Assistant**](https://fonts.google.com/specimen/Assistant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Assistant

![Assistant](./font-family.png)

This font family contains [6 styles](#gallery).

- `Assistant_ExtraLight200`
- `Assistant_Light300`
- `Assistant_Regular400`
- `Assistant_SemiBold600`
- `Assistant_Bold700`
- `Assistant_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/assistant expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Assistant_ExtraLight200,
  Assistant_Light300,
  Assistant_Regular400,
  Assistant_SemiBold600,
  Assistant_Bold700,
  Assistant_ExtraBold800,
} from '@expo-google-fonts/assistant';

export default () => {
  let [fontsLoaded] = useFonts({
    Assistant_ExtraLight200,
    Assistant_Light300,
    Assistant_Regular400,
    Assistant_SemiBold600,
    Assistant_Bold700,
    Assistant_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_ExtraLight200' }}>
          Assistant_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_Light300' }}>
          Assistant_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_Regular400' }}>
          Assistant_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_SemiBold600' }}>
          Assistant_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_Bold700' }}>
          Assistant_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Assistant_ExtraBold800' }}>
          Assistant_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Assistant_ExtraLight200
![Assistant_ExtraLight200](./6f4c276bf1e4d52183015128074de4702a86fc31cce04f575a8ebef54a077c78.ttf.png)

##### Assistant_Light300
![Assistant_Light300](./ad7ba792736448061fddf24806abe616e89d7a21a00d169ac4bf95db35ffe9cc.ttf.png)

##### Assistant_Regular400
![Assistant_Regular400](./1ffb8d00a2bd6ab725bb34dc8eaf61737481f6b285988332e4f6a4b60279dbde.ttf.png)

##### Assistant_SemiBold600
![Assistant_SemiBold600](./1dc8095e8dddae977007770ce433f8ed1e374d0a83d7330ecea3b335109a4985.ttf.png)

##### Assistant_Bold700
![Assistant_Bold700](./81008b85f8a91125a8efe85a353982fe1b825def9ef33eed881b709a6debf250.ttf.png)

##### Assistant_ExtraBold800
![Assistant_ExtraBold800](./a7370c1c3e5649abcfa6f44475eed601eb070ab934a708081b87627827d5463a.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Assistant on Google Fonts](https://fonts.google.com/specimen/Assistant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/assistant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/assistant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
