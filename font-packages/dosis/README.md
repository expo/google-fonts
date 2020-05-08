# @expo-google-fonts/dosis

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dosis)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dosis)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dosis)

This package lets you use the [**Dosis**](https://fonts.google.com/specimen/Dosis) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Dosis

![Dosis](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Dosis_ExtraLight200`
- `Dosis_Light300`
- `Dosis_Regular400`
- `Dosis_Medium500`
- `Dosis_SemiBold600`
- `Dosis_Bold700`
- `Dosis_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dosis expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Dosis_ExtraLight200,
  Dosis_Light300,
  Dosis_Regular400,
  Dosis_Medium500,
  Dosis_SemiBold600,
  Dosis_Bold700,
  Dosis_ExtraBold800,
} from '@expo-google-fonts/dosis';

export default () => {
  let [fontsLoaded] = useFonts({
    Dosis_ExtraLight200,
    Dosis_Light300,
    Dosis_Regular400,
    Dosis_Medium500,
    Dosis_SemiBold600,
    Dosis_Bold700,
    Dosis_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_ExtraLight200' }}>
          Dosis_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_Light300' }}>
          Dosis_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_Regular400' }}>
          Dosis_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_Medium500' }}>
          Dosis_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_SemiBold600' }}>
          Dosis_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_Bold700' }}>
          Dosis_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Dosis_ExtraBold800' }}>
          Dosis_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Dosis_ExtraLight200
![Dosis_ExtraLight200](./3ae9ee353b3e8df71d17a46208649ec71c145848f8db69eb86b9cc1c129304b7.ttf.png)

##### Dosis_Light300
![Dosis_Light300](./be02e69501081e964d549ca957d036bbb12e816c1d224d1ce145ca31499bdfa0.ttf.png)

##### Dosis_Regular400
![Dosis_Regular400](./313cd3d73107761779313dba36f6ec6a100a5a4daf06f4b78f8f733538936cdf.ttf.png)

##### Dosis_Medium500
![Dosis_Medium500](./b1bef4924c728f63829085fe2ca4995a6a41c495df45c5830d51bf649e273031.ttf.png)

##### Dosis_SemiBold600
![Dosis_SemiBold600](./8b8741fdb78479290fcd114044c58c9263670dd32db70b744dd56764a8d0b734.ttf.png)

##### Dosis_Bold700
![Dosis_Bold700](./4124ad4492dbb70075dd1bce8976da33cbad57f2fc10eeedc7da35592285605d.ttf.png)

##### Dosis_ExtraBold800
![Dosis_ExtraBold800](./4a7b18554b3247dd3b1384afabd828043b9a9417221c7480c2bb78a99bc4190b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/dosis` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Dosis page on Google Fonts](https://fonts.google.com/specimen/Dosis) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Dosis on Google Fonts](https://fonts.google.com/specimen/Dosis)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dosis)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dosis)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
