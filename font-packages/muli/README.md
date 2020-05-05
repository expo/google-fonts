# @expo-google-fonts/muli

This package lets you use the [**Muli**](https://fonts.google.com/specimen/Muli) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Muli

![Muli](./font-family.png)

This font family contains [14 styles](#gallery).

- `Muli_ExtraLight200`
- `Muli_ExtraLight200_Italic`
- `Muli_Light300`
- `Muli_Light300_Italic`
- `Muli_Regular400`
- `Muli_Regular400_Italic`
- `Muli_SemiBold600`
- `Muli_SemiBold600_Italic`
- `Muli_Bold700`
- `Muli_Bold700_Italic`
- `Muli_ExtraBold800`
- `Muli_ExtraBold800_Italic`
- `Muli_Black900`
- `Muli_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/muli expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Muli_ExtraLight200,
  Muli_ExtraLight200_Italic,
  Muli_Light300,
  Muli_Light300_Italic,
  Muli_Regular400,
  Muli_Regular400_Italic,
  Muli_SemiBold600,
  Muli_SemiBold600_Italic,
  Muli_Bold700,
  Muli_Bold700_Italic,
  Muli_ExtraBold800,
  Muli_ExtraBold800_Italic,
  Muli_Black900,
  Muli_Black900_Italic,
} from '@expo-google-fonts/muli';

export default () => {
  let [fontsLoaded] = useFonts({
    Muli_ExtraLight200,
    Muli_ExtraLight200_Italic,
    Muli_Light300,
    Muli_Light300_Italic,
    Muli_Regular400,
    Muli_Regular400_Italic,
    Muli_SemiBold600,
    Muli_SemiBold600_Italic,
    Muli_Bold700,
    Muli_Bold700_Italic,
    Muli_ExtraBold800,
    Muli_ExtraBold800_Italic,
    Muli_Black900,
    Muli_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_ExtraLight200' }}>
          Muli_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_ExtraLight200_Italic' }}>
          Muli_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Light300' }}>
          Muli_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Light300_Italic' }}>
          Muli_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Regular400' }}>
          Muli_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Regular400_Italic' }}>
          Muli_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_SemiBold600' }}>
          Muli_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_SemiBold600_Italic' }}>
          Muli_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Bold700' }}>Muli_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Bold700_Italic' }}>
          Muli_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_ExtraBold800' }}>
          Muli_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_ExtraBold800_Italic' }}>
          Muli_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Black900' }}>
          Muli_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Muli_Black900_Italic' }}>
          Muli_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Muli_ExtraLight200
![Muli_ExtraLight200](./dbcba4190351f997830d7652727c7f42e0c882f325d1f75ba8a3c606f8ab0e23.ttf.png)

##### Muli_ExtraLight200_Italic
![Muli_ExtraLight200_Italic](./939afc08c356b9f83c67ee2b78dec42c2f7e1eed1ade0be8b8fc1095d1429b04.ttf.png)

##### Muli_Light300
![Muli_Light300](./5de108957fcdaef883f06a6d0852f415189779437851b0d6d7abb06c9b717a86.ttf.png)

##### Muli_Light300_Italic
![Muli_Light300_Italic](./7cc6d79998df498ec95b3c68aa52f263ad62a25202e7971a6b75de645da069c2.ttf.png)

##### Muli_Regular400
![Muli_Regular400](./ea4701f9a5e0b0e4c96b45b1c04278e62159ddb385941274af0394132622a139.ttf.png)

##### Muli_Regular400_Italic
![Muli_Regular400_Italic](./e5a17a307589ccf860441ba4904d3819f0ce0a4d7001a6e4b7d0efd5858bcde8.ttf.png)

##### Muli_SemiBold600
![Muli_SemiBold600](./10d78b9b78e06d25335389823e4383b15fea791de3324adb6497069821c2e214.ttf.png)

##### Muli_SemiBold600_Italic
![Muli_SemiBold600_Italic](./9844bb9dc82723a3d8c41821d7ed75f37aa979969dbcf244e03676190a26c279.ttf.png)

##### Muli_Bold700
![Muli_Bold700](./3ab6877022dc43f69329d1c8e73ede36b36ef3cd49a833da18c388c6311a18c7.ttf.png)

##### Muli_Bold700_Italic
![Muli_Bold700_Italic](./93112f6142019f2669649529f27d3d42f5bc8859bf1dadaaf1ab66b07492b366.ttf.png)

##### Muli_ExtraBold800
![Muli_ExtraBold800](./9ba6c90c1b1b2a61cc450ef443603f86e5acffbba7430c4d41e9ce1ef434b516.ttf.png)

##### Muli_ExtraBold800_Italic
![Muli_ExtraBold800_Italic](./dc2a00ad0b251d39d19272f9277b6940bb685b29b9cecca33bfb4008d5188d2c.ttf.png)

##### Muli_Black900
![Muli_Black900](./a887d75b7f4ca0f8a220638d755864474c4a89972ef84be00ba81d5764519e8c.ttf.png)

##### Muli_Black900_Italic
![Muli_Black900_Italic](./c1c38c7b31e983faf9ac1ba63d8a98cb93cdf7c854abd833e826a7bea94248c6.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Muli on Google Fonts](https://fonts.google.com/specimen/Muli)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/muli)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/muli)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
