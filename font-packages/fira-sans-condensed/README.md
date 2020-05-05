# @expo-google-fonts/fira-sans-condensed

This package lets you use the [**Fira Sans Condensed**](https://fonts.google.com/specimen/Fira+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Fira Sans Condensed

![Fira Sans Condensed](./font-family.png)

This font family contains [18 styles](#gallery).

- `FiraSansCondensed_Thin100`
- `FiraSansCondensed_Thin100_Italic`
- `FiraSansCondensed_ExtraLight200`
- `FiraSansCondensed_ExtraLight200_Italic`
- `FiraSansCondensed_Light300`
- `FiraSansCondensed_Light300_Italic`
- `FiraSansCondensed_Regular400`
- `FiraSansCondensed_Regular400_Italic`
- `FiraSansCondensed_Medium500`
- `FiraSansCondensed_Medium500_Italic`
- `FiraSansCondensed_SemiBold600`
- `FiraSansCondensed_SemiBold600_Italic`
- `FiraSansCondensed_Bold700`
- `FiraSansCondensed_Bold700_Italic`
- `FiraSansCondensed_ExtraBold800`
- `FiraSansCondensed_ExtraBold800_Italic`
- `FiraSansCondensed_Black900`
- `FiraSansCondensed_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/fira-sans-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  FiraSansCondensed_Thin100,
  FiraSansCondensed_Thin100_Italic,
  FiraSansCondensed_ExtraLight200,
  FiraSansCondensed_ExtraLight200_Italic,
  FiraSansCondensed_Light300,
  FiraSansCondensed_Light300_Italic,
  FiraSansCondensed_Regular400,
  FiraSansCondensed_Regular400_Italic,
  FiraSansCondensed_Medium500,
  FiraSansCondensed_Medium500_Italic,
  FiraSansCondensed_SemiBold600,
  FiraSansCondensed_SemiBold600_Italic,
  FiraSansCondensed_Bold700,
  FiraSansCondensed_Bold700_Italic,
  FiraSansCondensed_ExtraBold800,
  FiraSansCondensed_ExtraBold800_Italic,
  FiraSansCondensed_Black900,
  FiraSansCondensed_Black900_Italic,
} from '@expo-google-fonts/fira-sans-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    FiraSansCondensed_Thin100,
    FiraSansCondensed_Thin100_Italic,
    FiraSansCondensed_ExtraLight200,
    FiraSansCondensed_ExtraLight200_Italic,
    FiraSansCondensed_Light300,
    FiraSansCondensed_Light300_Italic,
    FiraSansCondensed_Regular400,
    FiraSansCondensed_Regular400_Italic,
    FiraSansCondensed_Medium500,
    FiraSansCondensed_Medium500_Italic,
    FiraSansCondensed_SemiBold600,
    FiraSansCondensed_SemiBold600_Italic,
    FiraSansCondensed_Bold700,
    FiraSansCondensed_Bold700_Italic,
    FiraSansCondensed_ExtraBold800,
    FiraSansCondensed_ExtraBold800_Italic,
    FiraSansCondensed_Black900,
    FiraSansCondensed_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Thin100' }}>
          FiraSansCondensed_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Thin100_Italic' }}>
          FiraSansCondensed_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_ExtraLight200' }}>
          FiraSansCondensed_ExtraLight200
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansCondensed_ExtraLight200_Italic',
          }}>
          FiraSansCondensed_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Light300' }}>
          FiraSansCondensed_Light300
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Light300_Italic' }}>
          FiraSansCondensed_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Regular400' }}>
          FiraSansCondensed_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Regular400_Italic' }}>
          FiraSansCondensed_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Medium500' }}>
          FiraSansCondensed_Medium500
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Medium500_Italic' }}>
          FiraSansCondensed_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_SemiBold600' }}>
          FiraSansCondensed_SemiBold600
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_SemiBold600_Italic' }}>
          FiraSansCondensed_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Bold700' }}>
          FiraSansCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Bold700_Italic' }}>
          FiraSansCondensed_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_ExtraBold800' }}>
          FiraSansCondensed_ExtraBold800
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            fontFamily: 'FiraSansCondensed_ExtraBold800_Italic',
          }}>
          FiraSansCondensed_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Black900' }}>
          FiraSansCondensed_Black900
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'FiraSansCondensed_Black900_Italic' }}>
          FiraSansCondensed_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### FiraSansCondensed_Thin100
![FiraSansCondensed_Thin100](./bf9b3d9811dd234f65f59b0d76d65a3e1e0c670aebac4deba38952c2a936f715.ttf.png)

##### FiraSansCondensed_Thin100_Italic
![FiraSansCondensed_Thin100_Italic](./90a6e0b1a1c39abb49b18aa5dbe06d7495f40394b01fab73b9e1e2bfec8a63f1.ttf.png)

##### FiraSansCondensed_ExtraLight200
![FiraSansCondensed_ExtraLight200](./a88fd0b03c58284d60144855004f6888c1b91eb5a7d21ac6060d56968934163e.ttf.png)

##### FiraSansCondensed_ExtraLight200_Italic
![FiraSansCondensed_ExtraLight200_Italic](./07ba37d808679122d7388590ccc622b6f8f48bfad8116ba243f202818d5cd687.ttf.png)

##### FiraSansCondensed_Light300
![FiraSansCondensed_Light300](./028eb7598bbb6f3a2bf5ea109d7df59dc6518811cde6bc25a6f865eca25b8cee.ttf.png)

##### FiraSansCondensed_Light300_Italic
![FiraSansCondensed_Light300_Italic](./c87c9cbd8b98469f1021dcdc5e28dc336195b600990e646a06cd9e832b747236.ttf.png)

##### FiraSansCondensed_Regular400
![FiraSansCondensed_Regular400](./169ee94c3194b600460cd09916275e7fb039fb87644ad57a8892658bba9306c3.ttf.png)

##### FiraSansCondensed_Regular400_Italic
![FiraSansCondensed_Regular400_Italic](./a80c7a96e3707ecec8c736d84d84610e8872d361a22b5dbe0ebc3edd438d0d73.ttf.png)

##### FiraSansCondensed_Medium500
![FiraSansCondensed_Medium500](./703cb9e1a6d80a19812381b5edceb1970b68ee76546ba8ae6ffed4c952fc475c.ttf.png)

##### FiraSansCondensed_Medium500_Italic
![FiraSansCondensed_Medium500_Italic](./9ad537677b67359092459fe782eab5dbddc81f5a162d5e5089e46dab0d6d3dd5.ttf.png)

##### FiraSansCondensed_SemiBold600
![FiraSansCondensed_SemiBold600](./c134a6d726ac821a9d923951743e3265e9f99a3853356396d759d0fb71cda42a.ttf.png)

##### FiraSansCondensed_SemiBold600_Italic
![FiraSansCondensed_SemiBold600_Italic](./59ba972744bb1ef52a903a84b4b035e2086ee740963c12a11f352474b9aa841e.ttf.png)

##### FiraSansCondensed_Bold700
![FiraSansCondensed_Bold700](./29ce6255f4e521be2749f9557160ebbff60c5d160cd3a920e7bfc471c723dc3f.ttf.png)

##### FiraSansCondensed_Bold700_Italic
![FiraSansCondensed_Bold700_Italic](./02a6c070347c5261fef75b88834e9b34ca51774d98830932ac9082d60713a416.ttf.png)

##### FiraSansCondensed_ExtraBold800
![FiraSansCondensed_ExtraBold800](./a3fb82c69c6f36043219173b6f3137c43ead2f79f748d4a4a92ab045215eee54.ttf.png)

##### FiraSansCondensed_ExtraBold800_Italic
![FiraSansCondensed_ExtraBold800_Italic](./22f5b83e1b510958faf311954f84c3a505ac7ca89aa279ee4e6a9274ec38e37f.ttf.png)

##### FiraSansCondensed_Black900
![FiraSansCondensed_Black900](./cbc26fda4428ab404d1e295ba3295da5cacf05e0851f8e4db99a4f65e1a0b382.ttf.png)

##### FiraSansCondensed_Black900_Italic
![FiraSansCondensed_Black900_Italic](./d732a2087e508d3999de6ed5f8c8834fe6eed4e270dabbce0bdc668087bace49.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Fira Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
