# @expo-google-fonts/krub

This package lets you use the [**Krub**](https://fonts.google.com/specimen/Krub) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Krub

![Krub](./font-family.png)

This font family contains [12 styles](#gallery).

- `Krub_ExtraLight200`
- `Krub_ExtraLight200_Italic`
- `Krub_Light300`
- `Krub_Light300_Italic`
- `Krub_Regular400`
- `Krub_Regular400_Italic`
- `Krub_Medium500`
- `Krub_Medium500_Italic`
- `Krub_SemiBold600`
- `Krub_SemiBold600_Italic`
- `Krub_Bold700`
- `Krub_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/krub expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Krub_ExtraLight200,
  Krub_ExtraLight200_Italic,
  Krub_Light300,
  Krub_Light300_Italic,
  Krub_Regular400,
  Krub_Regular400_Italic,
  Krub_Medium500,
  Krub_Medium500_Italic,
  Krub_SemiBold600,
  Krub_SemiBold600_Italic,
  Krub_Bold700,
  Krub_Bold700_Italic,
} from '@expo-google-fonts/krub';

export default () => {
  let [fontsLoaded] = useFonts({
    Krub_ExtraLight200,
    Krub_ExtraLight200_Italic,
    Krub_Light300,
    Krub_Light300_Italic,
    Krub_Regular400,
    Krub_Regular400_Italic,
    Krub_Medium500,
    Krub_Medium500_Italic,
    Krub_SemiBold600,
    Krub_SemiBold600_Italic,
    Krub_Bold700,
    Krub_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_ExtraLight200' }}>
          Krub_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_ExtraLight200_Italic' }}>
          Krub_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Light300' }}>
          Krub_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Light300_Italic' }}>
          Krub_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Regular400' }}>
          Krub_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Regular400_Italic' }}>
          Krub_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Medium500' }}>
          Krub_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Medium500_Italic' }}>
          Krub_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_SemiBold600' }}>
          Krub_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_SemiBold600_Italic' }}>
          Krub_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Bold700' }}>Krub_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Krub_Bold700_Italic' }}>
          Krub_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Krub_ExtraLight200
![Krub_ExtraLight200](./e99da9729e8beb706a3f7dd95ff2b13b7e33f89ceabaf9f2330e61896b93fa39.ttf.png)

##### Krub_ExtraLight200_Italic
![Krub_ExtraLight200_Italic](./63f21c0600aea197624e3d1c2e40daafe5eabdfd3f3b604ef5a0240158275df3.ttf.png)

##### Krub_Light300
![Krub_Light300](./c051f20fb436fad0503f887fa3835d2787be9ae5fbe5be539dc1532d24f8df2f.ttf.png)

##### Krub_Light300_Italic
![Krub_Light300_Italic](./e7745d1a884ad74618766af351077c4625adf1e3ba22d4d86f3aa7cf49306b98.ttf.png)

##### Krub_Regular400
![Krub_Regular400](./d0e841ab6bf1b00cdeb73777db2ee1a1cfa53adda512b49fbd12511e8fd15169.ttf.png)

##### Krub_Regular400_Italic
![Krub_Regular400_Italic](./9e23fec650c8fabcf0ecb628c198acb3c2a8cc928f9ab5814f5eafa81c9ceeaa.ttf.png)

##### Krub_Medium500
![Krub_Medium500](./2964f338dadae9da331e3cb292ca6fa5a8fe4eb8267fc4846b40115fbb645f2b.ttf.png)

##### Krub_Medium500_Italic
![Krub_Medium500_Italic](./defa6560ee637da7a34fda9c66033c4a5465e3bc8b92a02da190b58dfdd71ad6.ttf.png)

##### Krub_SemiBold600
![Krub_SemiBold600](./6f875531446bca4ea9d68ff550096ba0371fb5c0b8fa84667d9de385848b424e.ttf.png)

##### Krub_SemiBold600_Italic
![Krub_SemiBold600_Italic](./af1dcba5de7428e1ddd0d849ddffc16f048518210fefe8a98bf21ff22234b3f1.ttf.png)

##### Krub_Bold700
![Krub_Bold700](./066231a170b822e951eb201a38fd17e6a13d82773be17af5e9b184928e32c6c7.ttf.png)

##### Krub_Bold700_Italic
![Krub_Bold700_Italic](./bb202066513c0b7b93b2e8552d17feeaf2580daa45fdf8e88f3e98205ca2342e.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Krub on Google Fonts](https://fonts.google.com/specimen/Krub)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/krub)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/krub)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
