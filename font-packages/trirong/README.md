# @expo-google-fonts/trirong

This package lets you use the [**Trirong**](https://fonts.google.com/specimen/Trirong) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Trirong

![Trirong](./font-family.png)

This font family contains [18 styles](#gallery).

- `Trirong_Thin100`
- `Trirong_Thin100_Italic`
- `Trirong_ExtraLight200`
- `Trirong_ExtraLight200_Italic`
- `Trirong_Light300`
- `Trirong_Light300_Italic`
- `Trirong_Regular400`
- `Trirong_Regular400_Italic`
- `Trirong_Medium500`
- `Trirong_Medium500_Italic`
- `Trirong_SemiBold600`
- `Trirong_SemiBold600_Italic`
- `Trirong_Bold700`
- `Trirong_Bold700_Italic`
- `Trirong_ExtraBold800`
- `Trirong_ExtraBold800_Italic`
- `Trirong_Black900`
- `Trirong_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/trirong expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Trirong_Thin100,
  Trirong_Thin100_Italic,
  Trirong_ExtraLight200,
  Trirong_ExtraLight200_Italic,
  Trirong_Light300,
  Trirong_Light300_Italic,
  Trirong_Regular400,
  Trirong_Regular400_Italic,
  Trirong_Medium500,
  Trirong_Medium500_Italic,
  Trirong_SemiBold600,
  Trirong_SemiBold600_Italic,
  Trirong_Bold700,
  Trirong_Bold700_Italic,
  Trirong_ExtraBold800,
  Trirong_ExtraBold800_Italic,
  Trirong_Black900,
  Trirong_Black900_Italic,
} from '@expo-google-fonts/trirong';

export default () => {
  let [fontsLoaded] = useFonts({
    Trirong_Thin100,
    Trirong_Thin100_Italic,
    Trirong_ExtraLight200,
    Trirong_ExtraLight200_Italic,
    Trirong_Light300,
    Trirong_Light300_Italic,
    Trirong_Regular400,
    Trirong_Regular400_Italic,
    Trirong_Medium500,
    Trirong_Medium500_Italic,
    Trirong_SemiBold600,
    Trirong_SemiBold600_Italic,
    Trirong_Bold700,
    Trirong_Bold700_Italic,
    Trirong_ExtraBold800,
    Trirong_ExtraBold800_Italic,
    Trirong_Black900,
    Trirong_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Thin100' }}>
          Trirong_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Thin100_Italic' }}>
          Trirong_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_ExtraLight200' }}>
          Trirong_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_ExtraLight200_Italic' }}>
          Trirong_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Light300' }}>
          Trirong_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Light300_Italic' }}>
          Trirong_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Regular400' }}>
          Trirong_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Regular400_Italic' }}>
          Trirong_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Medium500' }}>
          Trirong_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Medium500_Italic' }}>
          Trirong_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_SemiBold600' }}>
          Trirong_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_SemiBold600_Italic' }}>
          Trirong_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Bold700' }}>
          Trirong_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Bold700_Italic' }}>
          Trirong_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_ExtraBold800' }}>
          Trirong_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_ExtraBold800_Italic' }}>
          Trirong_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Black900' }}>
          Trirong_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_Black900_Italic' }}>
          Trirong_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Trirong_Thin100
![Trirong_Thin100](./ebda10c096f251b0f84ce8b6fad4468a087d944c5c45081c09f9b355ed9c2757.ttf.png)

##### Trirong_Thin100_Italic
![Trirong_Thin100_Italic](./7a42cfb5ac38b434d94f2da531cd684023ef0223664c7a1dcc27c1abbb1da60a.ttf.png)

##### Trirong_ExtraLight200
![Trirong_ExtraLight200](./c24e38979d00ca5cc7b8263089200c8047ff2589fdccff637c44dd6e0ab1f408.ttf.png)

##### Trirong_ExtraLight200_Italic
![Trirong_ExtraLight200_Italic](./273025dcd85321fcb1f102724944a7150fea25d03ff9ed2bb7386973e88b9e50.ttf.png)

##### Trirong_Light300
![Trirong_Light300](./5f63c33f4190aa7884d7b64f11279c4507d7317e5624d0bfc1b05eca2ff418e7.ttf.png)

##### Trirong_Light300_Italic
![Trirong_Light300_Italic](./1784836440ffdf31286b0df9584970579b1af1952ac75dfd022bf9d7e0984fe1.ttf.png)

##### Trirong_Regular400
![Trirong_Regular400](./83969f4046620c10445d07b6cec90f9d567b3cb5ae9f8a0d216568cc2d15654c.ttf.png)

##### Trirong_Regular400_Italic
![Trirong_Regular400_Italic](./841e812a25eb28ca4e21cb658d8366c9bb981105dd1d7aa88ca994bb54894ea3.ttf.png)

##### Trirong_Medium500
![Trirong_Medium500](./43bcfe3403429145f5c7fb7b1c235b3f7c6ec53c0eb74c60aacf204b951b5401.ttf.png)

##### Trirong_Medium500_Italic
![Trirong_Medium500_Italic](./5e3cacecc05b4c5ec441b805e2a762128058bec1d536af471ba5e41bdc4aeab6.ttf.png)

##### Trirong_SemiBold600
![Trirong_SemiBold600](./1bcf42948a6cb24de06e4672a41d7be5d5a78f8666cb01af47465ae500a71d3f.ttf.png)

##### Trirong_SemiBold600_Italic
![Trirong_SemiBold600_Italic](./33b42029fe9f85e3aca1571116b8931e01d2c0532a8686fa4d4c1a9a6002d4c7.ttf.png)

##### Trirong_Bold700
![Trirong_Bold700](./f44ac39f4897c03dc6b971c1150fb6931ae23244de24ad8b7e7786cf80d05bdf.ttf.png)

##### Trirong_Bold700_Italic
![Trirong_Bold700_Italic](./253f1ffccc8aef2bd32268020b2c2043f73135a8ae452a59da8a0392eb550f15.ttf.png)

##### Trirong_ExtraBold800
![Trirong_ExtraBold800](./91503f7fd8f6427f0f52f59b2eb579609644a895bbc23cf120d005ca661664a3.ttf.png)

##### Trirong_ExtraBold800_Italic
![Trirong_ExtraBold800_Italic](./4bfb31e96b8c31946d7ad03ee00d18bbe83bb6f3259286bfcf595eb3a58f0d0c.ttf.png)

##### Trirong_Black900
![Trirong_Black900](./68b6c54a09143e5a61f93d87711cea8b55c71178340aa29d7900f345a39d6fec.ttf.png)

##### Trirong_Black900_Italic
![Trirong_Black900_Italic](./3065ef76d27a4859bed714e0ff5f472bd1675a0fc4b103a5b365fb7e367acbdc.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Trirong on Google Fonts](https://fonts.google.com/specimen/Trirong)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/trirong)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/trirong)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
