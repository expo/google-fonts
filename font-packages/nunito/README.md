# @expo-google-fonts/nunito

This package lets you use the [**Nunito**](https://fonts.google.com/specimen/Nunito) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nunito

![Nunito](./font-family.png)

This font family contains [14 styles](#gallery).

- `Nunito_ExtraLight200`
- `Nunito_ExtraLight200_Italic`
- `Nunito_Light300`
- `Nunito_Light300_Italic`
- `Nunito_Regular400`
- `Nunito_Regular400_Italic`
- `Nunito_SemiBold600`
- `Nunito_SemiBold600_Italic`
- `Nunito_Bold700`
- `Nunito_Bold700_Italic`
- `Nunito_ExtraBold800`
- `Nunito_ExtraBold800_Italic`
- `Nunito_Black900`
- `Nunito_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nunito expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Nunito_ExtraLight200,
  Nunito_ExtraLight200_Italic,
  Nunito_Light300,
  Nunito_Light300_Italic,
  Nunito_Regular400,
  Nunito_Regular400_Italic,
  Nunito_SemiBold600,
  Nunito_SemiBold600_Italic,
  Nunito_Bold700,
  Nunito_Bold700_Italic,
  Nunito_ExtraBold800,
  Nunito_ExtraBold800_Italic,
  Nunito_Black900,
  Nunito_Black900_Italic,
} from '@expo-google-fonts/nunito';

export default () => {
  let [fontsLoaded] = useFonts({
    Nunito_ExtraLight200,
    Nunito_ExtraLight200_Italic,
    Nunito_Light300,
    Nunito_Light300_Italic,
    Nunito_Regular400,
    Nunito_Regular400_Italic,
    Nunito_SemiBold600,
    Nunito_SemiBold600_Italic,
    Nunito_Bold700,
    Nunito_Bold700_Italic,
    Nunito_ExtraBold800,
    Nunito_ExtraBold800_Italic,
    Nunito_Black900,
    Nunito_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_ExtraLight200' }}>
          Nunito_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_ExtraLight200_Italic' }}>
          Nunito_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Light300' }}>
          Nunito_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Light300_Italic' }}>
          Nunito_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Regular400' }}>
          Nunito_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Regular400_Italic' }}>
          Nunito_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_SemiBold600' }}>
          Nunito_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_SemiBold600_Italic' }}>
          Nunito_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Bold700' }}>
          Nunito_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Bold700_Italic' }}>
          Nunito_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_ExtraBold800' }}>
          Nunito_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_ExtraBold800_Italic' }}>
          Nunito_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Black900' }}>
          Nunito_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Black900_Italic' }}>
          Nunito_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Nunito_ExtraLight200
![Nunito_ExtraLight200](./6b0fb0ec88912f1ff7a203e8c74ec905e0f2333d071fcb6aa512434f693ed426.ttf.png)

##### Nunito_ExtraLight200_Italic
![Nunito_ExtraLight200_Italic](./e542c8162e83b8b4a246d9752149784b7a910e9079625dfe29dfa33afcdacd7f.ttf.png)

##### Nunito_Light300
![Nunito_Light300](./b6d1ca92958aefa0ca13e7461a345871a0c815ceddf57dff8f143c5cefe954ac.ttf.png)

##### Nunito_Light300_Italic
![Nunito_Light300_Italic](./bac03390f60c9c7b5298d6e7849699b7c337daf835bb93fdff988865b0590410.ttf.png)

##### Nunito_Regular400
![Nunito_Regular400](./86b77a6cf443c94b0310523682920874155c008981b3bb827cff87b769309527.ttf.png)

##### Nunito_Regular400_Italic
![Nunito_Regular400_Italic](./8d666361a790f47bc95f249d2c144967589066f4c39f08d2d6a9afa7bf65570d.ttf.png)

##### Nunito_SemiBold600
![Nunito_SemiBold600](./73212904c911defbb848aea031cf5c7bc5285462708823e12fdb1038f8488039.ttf.png)

##### Nunito_SemiBold600_Italic
![Nunito_SemiBold600_Italic](./f3dd598262205c5e81b5834c0a103e1fd79a067d9fab79eee988633314bd4f91.ttf.png)

##### Nunito_Bold700
![Nunito_Bold700](./443daf06190f4c7abd94b7917adb41656e6014e81c12eb036656d63f2b0c08a3.ttf.png)

##### Nunito_Bold700_Italic
![Nunito_Bold700_Italic](./895450a4f7d173b7729b5b09d6b86710da891fa88870c08630abc1c3c186f8ea.ttf.png)

##### Nunito_ExtraBold800
![Nunito_ExtraBold800](./18790abbb2d00a39aa0f2ddf3af3a275ce1328915d899d44e31fc996c651dc5d.ttf.png)

##### Nunito_ExtraBold800_Italic
![Nunito_ExtraBold800_Italic](./18558eee9acc53f9de8633498a026360f25c82ef2a1e12b2ec7b9e736237be90.ttf.png)

##### Nunito_Black900
![Nunito_Black900](./51945e9a938a0ff892a18d5e623e439bd2c363d1cf2e13251b78f545f1de1d09.ttf.png)

##### Nunito_Black900_Italic
![Nunito_Black900_Italic](./b3cebdbb4bdd22cce2495c53142cf925a2e430788ce890e6692637f5d4bb5af4.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## Links

- [Nunito on Google Fonts](https://fonts.google.com/specimen/Nunito)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nunito)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nunito)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
