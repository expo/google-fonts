# @expo-google-fonts/fira-sans

This package lets you use the [**Fira Sans**](https://fonts.google.com/specimen/Fira+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Fira Sans

![Fira Sans](./font-family.png)

This font family contains [18 styles](#gallery).

- `FiraSans_Thin100`
- `FiraSans_Thin100_Italic`
- `FiraSans_ExtraLight200`
- `FiraSans_ExtraLight200_Italic`
- `FiraSans_Light300`
- `FiraSans_Light300_Italic`
- `FiraSans_Regular400`
- `FiraSans_Regular400_Italic`
- `FiraSans_Medium500`
- `FiraSans_Medium500_Italic`
- `FiraSans_SemiBold600`
- `FiraSans_SemiBold600_Italic`
- `FiraSans_Bold700`
- `FiraSans_Bold700_Italic`
- `FiraSans_ExtraBold800`
- `FiraSans_ExtraBold800_Italic`
- `FiraSans_Black900`
- `FiraSans_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/fira-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  FiraSans_Thin100,
  FiraSans_Thin100_Italic,
  FiraSans_ExtraLight200,
  FiraSans_ExtraLight200_Italic,
  FiraSans_Light300,
  FiraSans_Light300_Italic,
  FiraSans_Regular400,
  FiraSans_Regular400_Italic,
  FiraSans_Medium500,
  FiraSans_Medium500_Italic,
  FiraSans_SemiBold600,
  FiraSans_SemiBold600_Italic,
  FiraSans_Bold700,
  FiraSans_Bold700_Italic,
  FiraSans_ExtraBold800,
  FiraSans_ExtraBold800_Italic,
  FiraSans_Black900,
  FiraSans_Black900_Italic,
} from '@expo-google-fonts/fira-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    FiraSans_Thin100,
    FiraSans_Thin100_Italic,
    FiraSans_ExtraLight200,
    FiraSans_ExtraLight200_Italic,
    FiraSans_Light300,
    FiraSans_Light300_Italic,
    FiraSans_Regular400,
    FiraSans_Regular400_Italic,
    FiraSans_Medium500,
    FiraSans_Medium500_Italic,
    FiraSans_SemiBold600,
    FiraSans_SemiBold600_Italic,
    FiraSans_Bold700,
    FiraSans_Bold700_Italic,
    FiraSans_ExtraBold800,
    FiraSans_ExtraBold800_Italic,
    FiraSans_Black900,
    FiraSans_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Thin100' }}>
          FiraSans_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Thin100_Italic' }}>
          FiraSans_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_ExtraLight200' }}>
          FiraSans_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_ExtraLight200_Italic' }}>
          FiraSans_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Light300' }}>
          FiraSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Light300_Italic' }}>
          FiraSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Regular400' }}>
          FiraSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Regular400_Italic' }}>
          FiraSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Medium500' }}>
          FiraSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Medium500_Italic' }}>
          FiraSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_SemiBold600' }}>
          FiraSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_SemiBold600_Italic' }}>
          FiraSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Bold700' }}>
          FiraSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Bold700_Italic' }}>
          FiraSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_ExtraBold800' }}>
          FiraSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_ExtraBold800_Italic' }}>
          FiraSans_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Black900' }}>
          FiraSans_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSans_Black900_Italic' }}>
          FiraSans_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### FiraSans_Thin100
![FiraSans_Thin100](./8c710b8842ec687cf4d723fa7cf54656e4600a5fc0b35581c6c5db5811eb3648.ttf.png)

##### FiraSans_Thin100_Italic
![FiraSans_Thin100_Italic](./c12ca8dc162546809677cd3a931692841e7d605b092be571767436772cbca571.ttf.png)

##### FiraSans_ExtraLight200
![FiraSans_ExtraLight200](./0fdce9dc421c231fd5eb33b58fa54bfc22e73eb766fbf24c099102a3c9745a04.ttf.png)

##### FiraSans_ExtraLight200_Italic
![FiraSans_ExtraLight200_Italic](./6fc161a574855f456dd5f6aca03b07bd5fbbda95409eaaeea8d32b83efdd82d4.ttf.png)

##### FiraSans_Light300
![FiraSans_Light300](./0cf10b5f7c89c8b6cc74e27189f128a0632fcc969d1d71639d7df41a988241ea.ttf.png)

##### FiraSans_Light300_Italic
![FiraSans_Light300_Italic](./ed16991f9880c1cdf370062abe98f041f9c4227d7b7533bf2f7915cd203d33a6.ttf.png)

##### FiraSans_Regular400
![FiraSans_Regular400](./25d5c70026b4ecf845ee6e70a5db8152c460c77457ee2c198f857b9dc194d2f3.ttf.png)

##### FiraSans_Regular400_Italic
![FiraSans_Regular400_Italic](./68cee55e27446a07ee1a11f047f9ce975c099a77beb93636576f205f1f79e949.ttf.png)

##### FiraSans_Medium500
![FiraSans_Medium500](./92c4968351b66aa1751300d33479286d7efbba08a54f8e4ff3bf2f46a9cf39be.ttf.png)

##### FiraSans_Medium500_Italic
![FiraSans_Medium500_Italic](./61820fb5cb8cddf45429ac27bd1b3ddc92f5fa8df2558b86f251a7d3b02eb896.ttf.png)

##### FiraSans_SemiBold600
![FiraSans_SemiBold600](./63399ee49cc66340dce320237ad9177a3c4425f1e2e067f36fc16613bff0566e.ttf.png)

##### FiraSans_SemiBold600_Italic
![FiraSans_SemiBold600_Italic](./5bb43f8686cc19df2202a071cae38722fe0cc2a3a3fe6e23a2cf6a96f7744782.ttf.png)

##### FiraSans_Bold700
![FiraSans_Bold700](./87babfdf164afa1f458032e5d4166b48f6e1fe8599501da30592a5f2fb2dd18a.ttf.png)

##### FiraSans_Bold700_Italic
![FiraSans_Bold700_Italic](./3b86fe4a8430dc147fd75bedeb04f37cb3fc160fcb9b905263e11f945cf8de60.ttf.png)

##### FiraSans_ExtraBold800
![FiraSans_ExtraBold800](./c11b26719603ed8ca563718737b415405dd2010a56408dc403bf6292e3c11561.ttf.png)

##### FiraSans_ExtraBold800_Italic
![FiraSans_ExtraBold800_Italic](./9c5bac7e128fa9013ef3cdc329d8f441aea8fdca1051acdb22814bfcf14f8aff.ttf.png)

##### FiraSans_Black900
![FiraSans_Black900](./3a957f6ef941a2c07855a9f053c3f0c03091299a68530247f3bb1c3c6ab574c4.ttf.png)

##### FiraSans_Black900_Italic
![FiraSans_Black900_Italic](./d2813a992761a32da93a8230e2d86dbc1f4c430516ebc63b870d6865995d8233.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Fira Sans on Google Fonts](https://fonts.google.com/specimen/Fira+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
