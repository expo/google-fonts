# @expo-google-fonts/saira-semi-condensed

This package lets you use the [**Saira Semi Condensed**](https://fonts.google.com/specimen/Saira+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Saira Semi Condensed

![Saira Semi Condensed](./font-family.png)

This font family contains [9 styles](#gallery).

- `SairaSemiCondensed_Thin100`
- `SairaSemiCondensed_ExtraLight200`
- `SairaSemiCondensed_Light300`
- `SairaSemiCondensed_Regular400`
- `SairaSemiCondensed_Medium500`
- `SairaSemiCondensed_SemiBold600`
- `SairaSemiCondensed_Bold700`
- `SairaSemiCondensed_ExtraBold800`
- `SairaSemiCondensed_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira-semi-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SairaSemiCondensed_Thin100,
  SairaSemiCondensed_ExtraLight200,
  SairaSemiCondensed_Light300,
  SairaSemiCondensed_Regular400,
  SairaSemiCondensed_Medium500,
  SairaSemiCondensed_SemiBold600,
  SairaSemiCondensed_Bold700,
  SairaSemiCondensed_ExtraBold800,
  SairaSemiCondensed_Black900,
} from '@expo-google-fonts/saira-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SairaSemiCondensed_Thin100,
    SairaSemiCondensed_ExtraLight200,
    SairaSemiCondensed_Light300,
    SairaSemiCondensed_Regular400,
    SairaSemiCondensed_Medium500,
    SairaSemiCondensed_SemiBold600,
    SairaSemiCondensed_Bold700,
    SairaSemiCondensed_ExtraBold800,
    SairaSemiCondensed_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Thin100' }}>
          SairaSemiCondensed_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_ExtraLight200' }}>
          SairaSemiCondensed_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Light300' }}>
          SairaSemiCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Regular400' }}>
          SairaSemiCondensed_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Medium500' }}>
          SairaSemiCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_SemiBold600' }}>
          SairaSemiCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Bold700' }}>
          SairaSemiCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_ExtraBold800' }}>
          SairaSemiCondensed_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaSemiCondensed_Black900' }}>
          SairaSemiCondensed_Black900
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### SairaSemiCondensed_Thin100
![SairaSemiCondensed_Thin100](./6b2e6d1dd40d36454cc2926dcb4a1a5561eefd558ed4335da50334fe382ae95e.ttf.png)

##### SairaSemiCondensed_ExtraLight200
![SairaSemiCondensed_ExtraLight200](./ce22147c0af87efa1aecbc39ff8b87923aee3cf2f49375403f5f34979223e610.ttf.png)

##### SairaSemiCondensed_Light300
![SairaSemiCondensed_Light300](./ef45b03e2a6a021a7b398dc695d9fe949857b4defe4cd062b0d2be306f51ef4e.ttf.png)

##### SairaSemiCondensed_Regular400
![SairaSemiCondensed_Regular400](./80d72d164a187ce7476240396003c4b453c0f3b4565db50583a99ec1485cb6dc.ttf.png)

##### SairaSemiCondensed_Medium500
![SairaSemiCondensed_Medium500](./77903b1b3697f92cb3c1338d2bbd5de692eb31244fc785e5224c5e32faae51e4.ttf.png)

##### SairaSemiCondensed_SemiBold600
![SairaSemiCondensed_SemiBold600](./10bc52c72bdddd14cf11a9a428d2dd3348861b4c6106cd154406562cf41b7e66.ttf.png)

##### SairaSemiCondensed_Bold700
![SairaSemiCondensed_Bold700](./daba4551f3f2e9c9a6720e74d136524da54d3946352c47f4df6e3acb9a315ca9.ttf.png)

##### SairaSemiCondensed_ExtraBold800
![SairaSemiCondensed_ExtraBold800](./a742dc6740800e28cf269ffb74084610ab7590779de6185e12259b99ca780d21.ttf.png)

##### SairaSemiCondensed_Black900
![SairaSemiCondensed_Black900](./127a359a67e8fa386310e298528a130878d4284d08e3c7c34872f38bedbe6be5.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Saira Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
