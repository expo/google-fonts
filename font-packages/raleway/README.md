# @expo-google-fonts/raleway

This package lets you use the [**Raleway**](https://fonts.google.com/specimen/Raleway) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Raleway

![Raleway](./font-family.png)

This font family contains [18 styles](#gallery).

- `Raleway_Thin100`
- `Raleway_Thin100_Italic`
- `Raleway_ExtraLight200`
- `Raleway_ExtraLight200_Italic`
- `Raleway_Light300`
- `Raleway_Light300_Italic`
- `Raleway_Regular400`
- `Raleway_Regular400_Italic`
- `Raleway_Medium500`
- `Raleway_Medium500_Italic`
- `Raleway_SemiBold600`
- `Raleway_SemiBold600_Italic`
- `Raleway_Bold700`
- `Raleway_Bold700_Italic`
- `Raleway_ExtraBold800`
- `Raleway_ExtraBold800_Italic`
- `Raleway_Black900`
- `Raleway_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/raleway expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Raleway_Thin100,
  Raleway_Thin100_Italic,
  Raleway_ExtraLight200,
  Raleway_ExtraLight200_Italic,
  Raleway_Light300,
  Raleway_Light300_Italic,
  Raleway_Regular400,
  Raleway_Regular400_Italic,
  Raleway_Medium500,
  Raleway_Medium500_Italic,
  Raleway_SemiBold600,
  Raleway_SemiBold600_Italic,
  Raleway_Bold700,
  Raleway_Bold700_Italic,
  Raleway_ExtraBold800,
  Raleway_ExtraBold800_Italic,
  Raleway_Black900,
  Raleway_Black900_Italic,
} from '@expo-google-fonts/raleway';

export default () => {
  let [fontsLoaded] = useFonts({
    Raleway_Thin100,
    Raleway_Thin100_Italic,
    Raleway_ExtraLight200,
    Raleway_ExtraLight200_Italic,
    Raleway_Light300,
    Raleway_Light300_Italic,
    Raleway_Regular400,
    Raleway_Regular400_Italic,
    Raleway_Medium500,
    Raleway_Medium500_Italic,
    Raleway_SemiBold600,
    Raleway_SemiBold600_Italic,
    Raleway_Bold700,
    Raleway_Bold700_Italic,
    Raleway_ExtraBold800,
    Raleway_ExtraBold800_Italic,
    Raleway_Black900,
    Raleway_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Thin100' }}>
          Raleway_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Thin100_Italic' }}>
          Raleway_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_ExtraLight200' }}>
          Raleway_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_ExtraLight200_Italic' }}>
          Raleway_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Light300' }}>
          Raleway_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Light300_Italic' }}>
          Raleway_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Regular400' }}>
          Raleway_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Regular400_Italic' }}>
          Raleway_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Medium500' }}>
          Raleway_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Medium500_Italic' }}>
          Raleway_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_SemiBold600' }}>
          Raleway_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_SemiBold600_Italic' }}>
          Raleway_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Bold700' }}>
          Raleway_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Bold700_Italic' }}>
          Raleway_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_ExtraBold800' }}>
          Raleway_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_ExtraBold800_Italic' }}>
          Raleway_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Black900' }}>
          Raleway_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Raleway_Black900_Italic' }}>
          Raleway_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Raleway_Thin100
![Raleway_Thin100](./e8df4e8d960459bd5865f3570b57e6df699c766519716eef5e7875dfc55f60f8.ttf.png)

##### Raleway_Thin100_Italic
![Raleway_Thin100_Italic](./9593117176336e51cd9d5e6beece2916b11b6dd91127af0ec0e8c61360e1825d.ttf.png)

##### Raleway_ExtraLight200
![Raleway_ExtraLight200](./9fd54bfbbfe5b0f9225c616bfaf9b554e22453bccec74ff721bfa2e156349515.ttf.png)

##### Raleway_ExtraLight200_Italic
![Raleway_ExtraLight200_Italic](./020054507630a95da95e3be3a49fc214dbcfaf24390608c7a2b3d7f50f92d5d1.ttf.png)

##### Raleway_Light300
![Raleway_Light300](./7404c4efdcd985236d209c5c0c5e33de959f635b2c6e360941ba22f8753d88dc.ttf.png)

##### Raleway_Light300_Italic
![Raleway_Light300_Italic](./66dc7bf66966029a73a06e1220a824348a0d1fced869b33b94384866a907b404.ttf.png)

##### Raleway_Regular400
![Raleway_Regular400](./1aec65f5e5dca3ec9f8719936af31f54336bb5d99f25bf343ff25e009d5e569d.ttf.png)

##### Raleway_Regular400_Italic
![Raleway_Regular400_Italic](./7f67d86f99756ac80abbf4a03a41535ed9d8b077f56460fb30a9cd45ca561a22.ttf.png)

##### Raleway_Medium500
![Raleway_Medium500](./4c263e938d69d7fcfb458613f3f273780c02bda6d38090fc8cb2244c06d0b0a3.ttf.png)

##### Raleway_Medium500_Italic
![Raleway_Medium500_Italic](./f794d63e5851c970d1f8527131022b8779e7f1aa8b8a974dcd0fdb49cd74270a.ttf.png)

##### Raleway_SemiBold600
![Raleway_SemiBold600](./626bb691bbecebb8a239831c605068f546cdb97ae010463f2da45417e1741d82.ttf.png)

##### Raleway_SemiBold600_Italic
![Raleway_SemiBold600_Italic](./2884ba45cbb9cb0d03e03d9ff7ddaa586469062b6a0c7d9eedce5c300a8874b7.ttf.png)

##### Raleway_Bold700
![Raleway_Bold700](./0d65094ca3a50e3e3078a2e46a4229f4552983b5f75ca1375acc7e5846dc40fb.ttf.png)

##### Raleway_Bold700_Italic
![Raleway_Bold700_Italic](./0d7f50973be9d011396bc034d6db727bd7c8bd04c394b691aae038666b286658.ttf.png)

##### Raleway_ExtraBold800
![Raleway_ExtraBold800](./8051619be163d93f0ff326ee63a4aed4a38042fb23c4b565f5e87408bb6948f5.ttf.png)

##### Raleway_ExtraBold800_Italic
![Raleway_ExtraBold800_Italic](./7da482be71166cee8c0006906b0e930f45a5c8d6e5324b479edde0024dee23bd.ttf.png)

##### Raleway_Black900
![Raleway_Black900](./5302665d52f11188ff3c3008199ce8ca17835eb68c7c7bbbff6175e39879178a.ttf.png)

##### Raleway_Black900_Italic
![Raleway_Black900_Italic](./8a5faa87c4f12461b775bf2c6693db562a932328b199affc9c16ea56206f534d.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Raleway on Google Fonts](https://fonts.google.com/specimen/Raleway)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/raleway)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/raleway)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
